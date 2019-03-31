// @flow
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Preview from "../components/preview"
import HeadlineSecondary from "../components/headline-secondary"
import Features from "../components/features"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Preview />
    <HeadlineSecondary />
    <Features />
    <Contact />
  </Layout>
)

export default IndexPage
