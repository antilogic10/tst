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
        <hr />
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
      <hr />
      <p
        style={{ marginTop: `30px`, marginBottom: `10px`, fontWeight: `bold` }}
      >
        To Get in touch Please fill in this short form...
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:{" "}
            <input
              style={{
                display: `block`,
                padding: `10px 15px`,
                borderRadius: `5px`,
                border: `1px solid #808080`,
              }}
              placeholder="Name"
              type="text"
              name="name"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              style={{
                display: `block`,
                padding: `10px 15px`,
                borderRadius: `5px`,
                border: `1px solid #808080`,
              }}
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              style={{
                display: `block`,
                padding: `10px 15px`,
                borderRadius: `5px`,
                border: `1px solid #808080`,
              }}
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </label>
        </p>
        <p>
          <button
            style={{
              border: `none`,
              padding: `10px 20px`,
              backgroundColor: `#132e70`,
              color: `white`,
              borderRadius: `5px`,
            }}
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
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
