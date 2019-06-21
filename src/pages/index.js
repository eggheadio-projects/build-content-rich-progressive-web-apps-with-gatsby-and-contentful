import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Learn JAMStack"
      keywords={[`gatsby`, `jamstack`, `react`, `netlify`]}
    />
  </Layout>
)

export default IndexPage
