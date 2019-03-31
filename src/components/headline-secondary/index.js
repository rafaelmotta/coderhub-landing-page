// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import s from "./styles.module.scss"

const HeadlineSecondary = () => (
  <div className={s.headlineContainer} id="headline-secondary">
    <div className="container">
      <h3 className={s.title}>It’s not only about your code, is it?</h3>
      <h4 className={s.subtitle}>
        Modern developers are not only coding, but also writing and actively
        contributing to online communities. Some are even working on side
        projects. CoderHub is where all of it comes together.{" "}
      </h4>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "hero-secondary.png" }) {
              childImageSharp {
                fluid(maxWidth: 840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      />
    </div>
  </div>
)

export default HeadlineSecondary
