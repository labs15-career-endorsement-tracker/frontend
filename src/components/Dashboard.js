import React, { useEffect, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { Route, Switch } from "react-router-dom"

// Functions
import { toggleStep, fetchRequirements, fetchUser } from "../actions"
import { loadAuthDataFromLocalStorage } from "../store"

// Components
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import Navigation from "./Navigation"
import RequirementDetails from "./RequirementDetails"
import NotFound from "./NotFound"
import FullPageLoader from "./lib/Loaders/fullPageLoader"
import SideBar from "./SideBar"

const Dashboard = ({ requirements, user }) => {
  const dispatch = useDispatch()
  const [width, setWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      return setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    if (width > 768) setIsOpen(false)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])
  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchRequirements(token))
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  if (!user || !Object.keys(user).length || !requirements.length) {
    return <FullPageLoader />
  }
  return (
    <div className="dash-container">
      <Navigation
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width={width}
      />
      <main>
        <SideBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          width={width}
          user={user}
          requirements={requirements}
        />
        <Switch>
          <Route
            exact
            path="/requirements/:id"
            component={RequirementDetails}
          ></Route>
          <Route
            exact
            path="/"
            render={props => (
              <RequirementCardContainer
                {...props}
                requirements={requirements}
              />
            )}
          ></Route>

          <Route component={NotFound} />
        </Switch>
      </main>
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
