import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "normalize.css"
import "./press.scss"

export default function Component () {
  return (
    <div className="press-page">
      <header className="press-header">
        <Link className="press-banner-link" to="/">
          <StaticImage 
            src="../images/hull-breach_press_page-02.png" 
            alt="Hull Breach" 
            placeholder="dominantColor"  
            className="press-banner-link-image"
          />
        </Link>
        <a className="press-banner-link" href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1?ref=avaier" target="_blank" rel="noopener noreferrer">
          <p className="press-link-text">Live on Kickstarter</p>
        </a> 
      </header>
      <article className="press-release">
        <h2 className="date-line">Press release January 4 2021</h2>
        <h2>
          Hull Breach: Mothership sci-fi horror anthology funds in 6 minutes , unlocks 2 stretch goals in under 80 minutes.
        </h2>
        <h3>
          Hull Breach, the first release from Anodyne Printware smashed through its funding goal and first batch of stretch goals in under 80 minutes. 
        </h3>
        <p>
          The funding goal of $10,000 was met within 6 minutes of launch, an excellent start to the campaign for the sci-fi horror RPG anthology, which will be running through February 3rd, 2022. Hull Breach emerged from the community of creators surrounding the indie-darling turned Kickstarter sensation, the Mothership Sci-Fi Horror RPG, and has seen enthusiastic support from fans of the game prior to its launch today.
        </p>
        <br></br>
        <p>
          The core of the project is a 200+ page hardcover anthology book featuring new content from 20 independent authors ($25 PDF, $45 physical). It includes over a dozen new and game-ready sci-fi horror adventures, plus a bounty of supplementary material to expand the Mothership system like extraterrestrial horrors, equipment and weapons, GM toolkits, generators, mechanics and more—all fully compatible with Mothership’s new 1st edition rules. 
        </p>
        <br></br>
        <p>
          The campaign also offers many other rewards for backers. Backers of the “Executive Suite” tier ($85) will also receive an entire additional book called Breach of Contract. This “legal horror” companion book features deviously worded, ruthlessly brutal contracts for all manner of corporate gigs that Mothership players might encounter. The wire-bound book will have tear off pages for Wardens to use as in-game props at the table. Other rewards in the tier include a poster-sized sector map, in-universe union id card prop and a collection of stickers useful for modifying character sheets, ship sheets, maps or book covers. 
        </p>
        <br></br>
        <p>
          The ultimate collector’s option, the “Total Acquisition” tier ($125) offers all other rewards from the campaign plus Anodyne Printware’s complete back catalogue of Mothership adventures (7 in total) fully updated to the new 1e rules at a heavily discounted bundle price. 
        </p>
        <br></br>
        <p>
          With 30 days still remaining and already $70,000 raised, Hull Breach is off to a strong start. 
        </p>
      </article>
    </div>
  )
}