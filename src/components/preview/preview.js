// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import s from "./preview.module.scss"

const Preview = () => (
  <section className={s.previewContainer}>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "codehub.png" }) {
            childImageSharp {
              fluid(maxWidth: 960) {
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
  </section>
)

export default Preview
