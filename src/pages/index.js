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
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      title={`All-in-one personal website builder for developers`}
      subtitle={`Build an elegant and minimalist personal website that showcases your work
      and contributions around the web in just a few clicks.`}
    />
    <Preview />
    <HeadlineSecondary />
    <Features />
    <Contact />
  </Layout>
)

export default IndexPage
