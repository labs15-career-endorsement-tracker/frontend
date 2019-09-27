import React from "react"
import { useDispatch } from "react-redux"

import { toggleMenu } from "../../../actions"

import uuid from "uuid/v4"
import "./index.scss"

class LinkInfo {
  constructor(cssClass, link, iconString) {
    this.cssClass = cssClass
    this.link = link
    this.iconString = iconString
  }
}

const links = [
  new LinkInfo("twitter", "https://twitter.com/getendrsd", "fab fa-twitter"),
  new LinkInfo(
    "slack",
    "https://lambdaschoolstudents.slack.com/messages/CN99JD9J5",
    "fab fa-slack"
  ),
  new LinkInfo("email", "mailto:labs15superteam@gmail.com", "fas fa-envelope")
]

const SupportLinks = () => {
  const dispatch = useDispatch()
  return (
    <div className="support-link-icons">
      {links.map(({ cssClass, link, iconString }) => (
        <a
          key={uuid()}
          className={cssClass}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            dispatch(toggleMenu(false))
          }}
        >
          <i className={iconString}></i>
        </a>
      ))}
    </div>
  )
}

export default SupportLinks
