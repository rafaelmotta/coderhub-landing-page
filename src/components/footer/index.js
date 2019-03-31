// @flow
import * as React from "react"
import s from "./footer.module.scss"

const Footer = () => (
  <footer className={s.container}>
    Made by{" "}
    <a
      href="https://pedromarques.me/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pedro
    </a>{" "}
    and{" "}
    <a
      href="https://www.linkedin.com/in/rafamotta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Rafael
    </a>{" "}
    in Munich, Germany
  </footer>
)

export default Footer
