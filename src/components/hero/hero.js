// @flow
import * as React from "react"
import classnames from "classnames"
import s from "./hero.module.scss"

const Hero = () => (
  <section className={s.heroContainer} id="hero">
    <div className="container">
      <h1 className={s.title}>
        All-in-one personal website builder for developers
      </h1>
      <h2 className={s.subtitle}>
        Build an elegant and minimalist personal website that showcases your
        work and contributions around the web in just a few clicks.
      </h2>
      <div className={s.formContainer}>
        <div className="d-flex justify-content-center">
          <form
            action="https://getform.io/f/e098dc5a-2b50-48df-9522-b2f560cd6db0"
            method="POST"
            className="form-inline"
          >
            <input
              required
              className={classnames(
                "form-control form-control-lg mr-sm-2",
                s.inputEmail
              )}
              type="email"
              name="email"
              placeholder="Your email address"
              aria-label="Get early access"
            />
            <button
              className="btn btn-primary btn-lg my-2 my-sm-0"
              type="submit"
            >
              Get early access
            </button>
          </form>
        </div>
      </div>
      <div className={s.shareContainer}>
        <div>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A//coderhub.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fal-facebook" />
            Share on Facebook
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/home?status=https%3A//www.facebook.com/sharer/sharer.php?u=http%253A//coderhub.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fal-facebook" />
            Share on Twitter
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
