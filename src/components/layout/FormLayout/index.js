import React from "react"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import "./index.scss"

import heroImg from "../../../assets/images/alien.png"

import { Logo } from "../../lib/index"

import SignInForm from "../../pages/SignInForm"
import SignUpForm from "../../pages/SignUpForm"
import PasswordResetForm from "../../pages/PasswordResetForm"
import EmailForm from "../../pages/EmailForm"

const defaultHeroImgData = {
  url: heroImg,
  altText: "An alien hiding behind a planet."
}

const FormLayout = ({ match, image = defaultHeroImgData }) => {
  return (
    <main>
      <div className="l-two-column">
        <div className="left">
          <Logo></Logo>
          <Switch>
            <Route path={`${match.path}/sign-in`} component={SignInForm} />
            <Route path={`${match.path}/sign-up`} component={SignUpForm} />
            <Route path={`${match.path}/reset`} component={PasswordResetForm} />
            <Route
              path={`${match.path}/reset-password`}
              component={EmailForm}
            />
            <Redirect to={`${match.path}/sign-in`}></Redirect>
          </Switch>
        </div>

        <div className="right">
          <img src={image.url} alt={image.altText} />
        </div>
      </div>
    </main>
  )
}

export default withRouter(FormLayout)
