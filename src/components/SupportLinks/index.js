import React from "react"

import "./index.scss"

const SupportLinks = () => {
  return (
    <div className="support-link-icons">
      <a class="twitter" href="https://twitter.com/getendrsd">
        <i class="fab fa-twitter"></i>
      </a>
      <a
        class="slack"
        href="https://lambdaschoolstudents.slack.com/messages/CN99JD9J5"
      >
        <i class="fab fa-slack"></i>
      </a>
      <a class="email" href="">
        <i class="far fa-envelope"></i>
      </a>
    </div>
  )
}

export default SupportLinks
