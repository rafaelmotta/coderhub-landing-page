// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import s from "./preview.module.scss"

const Preview = () => (
  <section className={s.previewContainer}>
    <div className="container">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "codehub.png" }) {
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
  </section>
)

export default Preview
