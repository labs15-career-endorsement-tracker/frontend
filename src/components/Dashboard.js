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
const Dashboard = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  if (!Object.keys(props.user).length ) {
    return <FullPageLoader />
  }
  return (
    <div className="dash-container">
      <Navigation user={props.user}/>
      <UserInfo user={props.user}/>
      <Switch>
        <Route
          exact
          path="/requirements/:id"
          component={RequirementDetails}
        ></Route>
        <Route exact path="/" component={RequirementCardContainer}></Route>
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
