// @flow
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

type TProps = {
  siteTitle: string,
}

const Header = ({ siteTitle }: TProps) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand font-weight-bold" href="/">
          {siteTitle}
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" />
          <a className="btn btn-primary" href="#hero">
            Get early access
          </a>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
