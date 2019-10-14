import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>What am I up to now?</h1>
    <p>Currently looking for opportunities in Data Engineering.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NowPage
