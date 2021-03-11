import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from "../components/header"

export default function Home({data}) {
  return <div>
    <Header />
    <h2>{data.site.siteMetadata.title}</h2>
    <p>Hello Koeienkop!</p>
  <Link to="/about/">Contact</Link>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
