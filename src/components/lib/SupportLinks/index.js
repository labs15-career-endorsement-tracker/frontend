import React from "react"

import "./index.scss"

const SupportLinks = () => {
  return (
    <div className="support-link-icons">
      <a
        className="twitter"
        href="https://twitter.com/getendrsd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className="slack"
        href="https://lambdaschoolstudents.slack.com/messages/CN99JD9J5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-slack"></i>
      </a>
      <a
        className="email"
        href="mailto:labs15superteam@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  )
}

export default SupportLinks
