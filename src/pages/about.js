import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function About({ data }) {
  console.log(data)
  return (
    <div style={{ color: `teal` }}>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    <Link to="/">Go home</Link>
    </div>
  )
}



export const query = graphql'
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
'
