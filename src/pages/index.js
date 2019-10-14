import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey, I'm Tim</h1>
    <h2>I'm an ETL developer looking for opportunities in Data Engineering. traveller, biker.</h2>
    <p>Now go build something great.</p>
    <p>Make progress or make excuses</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <p><Link to="/contact/">Contact</Link>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/test/">test</Link>
    <br />
    <Link to="/about/">about</Link>
    <br />
    <Link to="/now/">now</Link></p>
  </Layout>
)

export default IndexPage
