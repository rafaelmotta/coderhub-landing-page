// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import s from "./styles.module.scss"

const Preview = () => (
  <div className={s.previewContainer}>
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
  </div>
)

export default Preview
