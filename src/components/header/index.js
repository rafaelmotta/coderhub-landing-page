// @flow
import React from "react"
import logo from "./images/coder-hub.png"

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand font-weight-bold" href="/">
          <img src={logo} alt="Logo" width={105} />
        </a>
      </div>
    </nav>
  </header>
)

export default Header
