import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import AltHeader from "./altheader.js"
import "normalize.css"
import "./bravoteam.scss"

export default function Component () {
  return (
    <div className="bravo-page">
      <AltHeader></AltHeader>
    </div>
  )
}