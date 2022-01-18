import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "normalize.css"
import "./altheader.scss"
      
export default function Component () {
  return (
    <header className="alt-header">
      <Link className="alt-banner-link" to="/">
        <StaticImage 
          src="../images/hull-breach_press_page-02.png" 
          alt="Hull Breach" 
          placeholder="dominantColor"  
          className="alt-banner-link-image"
        />
      </Link>
      <a className="alt-banner-link" href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1?ref=avaier" target="_blank" rel="noopener noreferrer">
        <p className="alt-link-text">Live on Kickstarter</p>
      </a> 
    </header>
  )
}