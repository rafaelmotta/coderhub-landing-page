// @flow
import * as React from "react"
import s from "./footer.module.scss"

const Footer = () => (
  <footer className={s.footerContainer}>
    Made by&nbsp;
    <a
      href="https://pedromarques.me/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pedro
    </a>
    ,&nbsp;
    <a
      href="https://www.linkedin.com/in/rafamotta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Rafael
    </a>
    &nbsp;and&nbsp;
    <a
      href="https://www.linkedin.com/in/paventuri/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Paulo
    </a>
    &nbsp;in Munich & New York
  </footer>
)

export default Footer
