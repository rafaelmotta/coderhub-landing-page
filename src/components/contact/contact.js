// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import classnames from "classnames"
import image from "./assets/contact.png"
import s from "./contact.module.scss"

const Contact = () => (
  <section className={s.contactContainer} id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "contact.png" }) {
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
        <div className="col-md-6">
          <div className={s.formContainer}>
            <h3 className={s.title}>Did we get your attention?</h3>
            <p className={s.description}>
              Then get notified about updates and be the first get early access
              to CoderHub
            </p>
            <div className={s.formContainer}>
              <form
                action="https://getform.io/f/e098dc5a-2b50-48df-9522-b2f560cd6db0"
                method="POST"
                className="form-inline"
              >
                <input
                  required
                  className={classnames("form-control mr-sm-2", s.inputEmail)}
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  aria-label="Get early access"
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  Get early access
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
