import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.scss"
import "normalize.css"
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adClick: false
    }
  }
  
  toggleAd = () => {
    this.setState(state => ({adClick: !this.state.adClick}))
  }

  render() {
    return (
      <main>
        <section className="banner">
          <title>HULL BREACH</title>
          <h1 className="hidden">HULL BREACH</h1>
          <a className="banner" href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1">
            <StaticImage 
              src="../images/HB_mockup_transparent.png" 
              alt="Rendering of the Hull Breach book" 
              placeholder="blurred"  
            />
          </a>
          <h2>Sci-fi horror anthology for Mothership.</h2>
        </section>
        <section className="content-section">
          <article className="feature">
            <div className="imageContainer">
              <StaticImage 
                src="../images/mock-up.png" 
                alt="Rendering of the Hull Breach book" 
                placeholder="dominantColor"  
                className="rendering"
              />
            </div>
            <div className="description">
              <p>HULL BREACH is the first hardcover book for the Mothership Sci-Fi Horror RPG. This massive collaboration between 20 independent authors packs dozens of new scenarios, essays, bestiaries, system-hacks, toolkits, and more into over 200 beautifully designed pages. Follow our Kickstarter page for a notification when it goes live in January.</p>
            </div>
          </article> 
        </section>
        <section className="form-section">
          <a href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1">
            <h3 className="link">Follow the Kickstarter</h3>
          </a>
          <a href="https://ianyusem.substack.com/p/anodyne-direct-00-boot-sequence?showWelcome=true">
            <h3 className="link">Join the newsletter</h3>
          </a>
        </section>

        <button className="ad" onClick= { this.toggleAd }>
          {!this.state.adClick &&  
            <div className="static">         
              <StaticImage 
                src="../images/banner.png"  
                alt="AD - click here if you or a loved one where injured in the Hodder Forest Reserve Habitat accident."
                className="flicker desktop"
              />
            </div>
          }
          {!this.state.adClick &&  
            <div className="static">         
              <StaticImage 
                src="../images/arg-banner_mobile.png"  
                alt="AD - click here if you or a loved one where injured in the Hodder Forest Reserve Habitat accident."
                className="flicker mobile"
              />
            </div>
          }
          {this.state.adClick &&           
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
