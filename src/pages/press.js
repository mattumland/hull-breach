import React from "react"
import AltHeader from "./altheader.js"
import "normalize.css"
import "./press.scss"

export default function Component () {
  return (
    <div className="press-page">
      <AltHeader></AltHeader>
      <article className="press-release">
        <h2 className="date-line">Press release August 29 2023</h2>
        <h2>
          Smash Success Sci-fi TTRPG Anthology Hull Breach Vol. 1 Releasing Now!
        </h2>
        <p>
          After crowdfunding on Kickstarter with a funding total of $480,000 in 2022, the highly anticipated sci-fi anthology Hull Breach Vol. 1 releases to the public on August 29th!        </p>
        <br></br>
        <p>
          Hull Breach Vol. 1 from publisher Anodyne Printware is a massive adventure and supplement anthology compatible with the new Mothership Sci-Fi Horror RPG 1st Edition. This eclectic hoard of all-new sci-fi scenarios, GM tools, monsters and more doubles as a complete sandbox campaign setting: effortlessly weaving punchy one shots into multi-session epics.
        </p>
        <br></br>
        <p>
          <b>Hull Breach Vol. 1 launches at retail on Tuesday, August 29th at 10 AM EDT (UTC-4).</b>
        </p>
        <br></br>
        <p>
          What started as a modest Mothership fan-project grew into a 228-page hardcover behemoth, with dozens of incredible international contributors from the 3rd party community pouring their souls into this love letter to sci-fi horror. 
        </p>
        <br></br>
        <p>
          No matter which system you use, Hull Breach Vol. 1 offers years of sci-fi roleplaying content and brain-meltingly gameable ideas: from multidimensional adventures to complete alien ecologies and space piracy codes of conduct.        </p>
      </article>
    </div>
  )
}
