// @flow
import * as React from "react"
import s from "./styles.module.scss"
import browserImg from "./images/hero-secondary.png"

const HeadlineSecondary = () => (
  <section className={s.headlineContainer} id="headline-secondary">
    <div className="container">
      <h3 className={s.title}>It’s not only about your code, is it?</h3>
      <h4 className={s.subtitle}>
        Modern developers are not only coding, but also writing and actively
        contributing to online communities. Some are even working on side
        projects. CoderHub is where all of it comes together.{" "}
      </h4>
      <img
        src={browserImg}
        className={s.browserImg}
        alt="It’s not only about your code, is it?"
      />
    </div>
  </section>
)

export default HeadlineSecondary
