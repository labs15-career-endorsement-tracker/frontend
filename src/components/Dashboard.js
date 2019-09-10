import React, {useEffect} from "react"
import { connect , useDispatch} from "react-redux"
import { Route, Switch } from "react-router-dom"

// Functions
import { toggleStep, fetchRequirements, fetchUser } from "../actions"
import { loadAuthDataFromLocalStorage } from "../store"

// Components
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import Navigation from "./Navigation"
import RequirementDetails from "./RequirementDetails"
import NotFound from "./NotFound"
import FullPageLoader from "./lib/Loaders/fullPageLoader";
const Dashboard = ({requirements, user}) => {
  const dispatch = useDispatch()

  const fetchData = async () => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    await dispatch(fetchUser(token, userId))
    await dispatch(fetchRequirements(token))
  }
  
  useEffect((dispatch) => {
    fetchData()
  }, [dispatch])
  
  if (!Object.keys(user).length || !requirements.length) {
    return <FullPageLoader />
  }
  return (
    <div className="dash-container">
      <Navigation user={user}/>
      <UserInfo user={user}/>
      <Switch>
        <Route
          exact
          path="/requirements/:id"
          component={RequirementDetails}
        ></Route>
        <Route exact path="/" render={props => <RequirementCardContainer {...props} requirements={requirements}/>}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    requirements: state.requirementReducer.requirements,
    stepsInProgress: state.stepReducer.inProgress,
    stepsByTask: state.stepReducer.stepsByTask,
    requirementsInProgress: state.requirementReducer.inProgress,
    userInProgress: state.userReducer.inProgress 
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchRequirements, fetchUser }
)(Dashboard)
