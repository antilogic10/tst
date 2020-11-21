import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const contact = ({ data, location }) => {
  const siteTitle = data.siteTitle
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Page" />
      <div>
        <h3>Contact Us</h3>
        <p>
          Email : <a href="mailto:someone@gmeil.com">someone@gmeil.com</a>
        </p>
        <p>
          Phone : <a href="tel:+1234567890">+1234567890</a>
        </p>
        <p>
          Address : Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s standard
          dummy text ever since the
        </p>
      </div>
    </Layout>
  )
}

export default contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
