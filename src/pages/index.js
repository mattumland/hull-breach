import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.scss"
import "normalize.css"
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerClick: false
    }
  }
  
  toggleBanner = () => {
    this.setState(state => ({bannerClick: !this.state.bannerClick}))
  }

  render() {
    return (
      <main>
        <title>HULL BREACH</title>
        <h1 className="hidden">HULL BREACH</h1>
        <a href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1">
          <StaticImage 
            src="../images/HB_mockup.png" 
            alt="Rendering of the Hull Breach book" 
            placeholder="blurred"  
          />
        </a>

        <section className="content-section">
          <h2>HULL BREACH is 200 page hardcover anthology for the Mothership Sci-Fi Horror RPG.</h2>
          <StaticImage 
            src="../images/mock-up.png" 
            alt="Rendering of the Hull Breach book" 
            placeholder="blurred"  
          />
          <a href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1">Follow us on Kickstarter</a>
          <p>HULL BREACH is the first hardcover book for the Mothership Sci-Fi Horror RPG. This massive collaboration between 20 independent authors packs dozens of new scenarios, essays, bestiaries, system-hacks, toolkits, and more into over 200 beautifully designed pages. Follow our Kickstarter page for a notification when it goes live in January.</p>
        </section>

        <button className="ad" onClick= { this.toggleBanner }>
          {!this.state.bannerClick &&           
            <StaticImage 
            src="../images/banner.png"  
            alt="AD - click here if you or a loved one where injured in the Hodder Forest Reserve Habitat accident."
          />}
          {this.state.bannerClick &&           
            <img 
            src=""  
            alt=".../hodderreserve"
          />}
        </button>
      </main>
    );
  }
}

export default IndexPage
