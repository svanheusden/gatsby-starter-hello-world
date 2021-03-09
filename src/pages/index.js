import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div>
    <Header />
    <h2>H2 subtitle</h2>
    <p>Hello world!</p>
  <Link to="/about/">Contact</Link>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
}
