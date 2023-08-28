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
      <a className="alt-banner-link" href="https://shop.anodyneprintware.com/products/hull-breach-vol-1" target="_blank" rel="noopener noreferrer">
        <p className="alt-link-text">Now Available</p>
      </a> 
    </header>
  )
}
