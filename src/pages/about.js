import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const about = ({ data, location }) => {
  const siteTitle = data.siteTitle
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Page" />
      <div
        style={{
          paddingBottom: `15vh`,
        }}
      >
        <h3>Hello Welcome to About</h3>
        <p>
          This is the about page the content about the company can be shown
          here.
        </p>
        <h3>About Me</h3>
        <p>
          <Bio />
        </p>
        <Link to="/">Back to home Page</Link>
      </div>
    </Layout>
  )
}

export default about

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
