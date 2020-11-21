import React from "react"
import { Link, graphql } from "gatsby"

const navbar = () => {
  return (
    <div
      style={{
        display: `block`,
        backgroundColor: `#132e70`,
        padding: 0,
        margin: 0,
        marginBottom:`30px`,
        color: `white`,
      }}
    >
      <ul
        style={{
          listStyleType: `none`,
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            display: `inline-block`,
            padding: `10px 15px`,
            textDecoration: `none`,
            margin: 0,
          }}
        >
          <Link style={{ textDecoration: `none`, color: `white` }} to="/">
            Home
          </Link>
        </li>
        <li
          style={{
            display: `inline-block`,
            padding: `10px 15px`,
            textDecoration: `none`,
            margin: 0,
          }}
        >
          <Link
            style={{
              textDecoration: `none`,
              color: `white`,
            }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li
          style={{
            display: `inline-block`,
            padding: `10px 15px`,
            textDecoration: `none`,
            margin: 0,
          }}
        >
          <Link
            style={{
              textDecoration: `none`,
              color: `white`,
            }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default navbar
