// @flow
import * as React from "react"
import s from "./features.module.scss"
import assets from "./assets"

const items = [
  {
    img: assets.github,
    title: "Your GitHub Projects",
    description: "Easily and conveniently show your GitHub projects.",
  },
  {
    img: assets.ph,
    title: "Your Pens",
    description:
      "Showcase your CodePen’s Pens and impress other developers and potential employers.",
  },
  {
    img: assets.stackOverflow,
    title: "Your Stack Overflow Contributions ",
    description:
      "As a developer, you certainly have contributed to Stack Overflow. Highlight it on CoderHub.",
  },
  {
    img: assets.medium,
    title: "Your Articles",
    description:
      "Are you a developer who writes? Adding your best articles to your personal website is a breeze.",
  },
  {
    img: assets.ph,
    title: "Your Product Hunt Launches ",
    description: "Are you a Maker on Product Hunt? CoderHub got you covered! ",
  },
  {
    img: assets.linkedin,
    title: "Your Work Experience",
    description: "Show your skills and experiences in a unique way. ",
  },
]

const Features = () => (
  <section className={s.featuresContainer}>
    <div className="container">
      <h3 className={s.title}>Your personal single source of truth</h3>
      <h4 className={s.description}>
        We value your time as much as ours, so we made it dead simple to build
        your personal website. In just a few clicks, it’s up and running as well
        as integrated with all of your favorite services.
      </h4>
      <div className={s.featuresList}>
        {items.map(({ img, title, description }) => (
          <div className={s.featureItem} key={title}>
            <img src={img} alt={title} className={s.featureImg} />
            <div className={s.featureTitle}>{title}</div>
            <div className={s.featureDescription}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features
