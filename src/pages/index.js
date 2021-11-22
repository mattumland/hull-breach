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
          <h2>A sci-fi horror anthology digest for the Mothership RPG.</h2>
          <article className="feature">
            <StaticImage 
              src="../images/mock-up.png" 
              alt="Rendering of the Hull Breach book" 
              placeholder="blurred"  
              className="rendering"
              imgClassName="imgRender"
            />
            <div className="description">
              <h3>HULL BREACH is the first hardcover book for the Mothership Sci-Fi Horror RPG. This massive collaboration between 20 independent authors packs dozens of new scenarios, essays, bestiaries, system-hacks, toolkits, and more into over 200 beautifully designed pages. Follow our Kickstarter page for a notification when it goes live in January.</h3>
            </div>
          </article> 
          <a className="ks-link" href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1">
            <h2>Follow us on Kickstarter</h2>
          </a>
        </section>

        <button className="ad" onClick= { this.toggleBanner }>
          {!this.state.bannerClick &&  
            <div className="static">         
              <StaticImage 
              src="../images/banner.png"  
              alt="AD - click here if you or a loved one where injured in the Hodder Forest Reserve Habitat accident."
              className="flicker"
              />
            </div>
          }
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
