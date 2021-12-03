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
        <title>HULL BREACH</title>
        <section className="banner-section">
          {/* <StaticImage 
            src="../images/hullbreach-cover-13000px300dpi-20211027.jpeg" 
            alt="Debris being pulled through a hole in the hull of a ship" 
            placeholder="blurred"  
            className="banner-image"
          /> */}
          <h1 className="hidden">HULL BREACH</h1>
          <StaticImage 
              src="../images/hull-breach-title-01.png" 
              alt="Hull Breach" 
              placeholder="blurred" 
              className="banner-title" 
          />
          <StaticImage 
              src="../images/hb-subhead-01.png" 
              alt="A sci-fi horror ttrpg anthology" 
              placeholder="blurred" 
              className="banner-subtitle" 
          />
          <div className="banner-logo">
            <StaticImage 
              src="../images/mosh-logo.png" 
              alt="Logo for the Mothership Sci-Fi Horror RPG" 
              placeholder="blurred"  
              className="logo"
            />
          </div>
          <aside className="banner-links">
            <div>
              <a href="https://ianyusem.substack.com/p/anodyne-direct-00-boot-sequence?showWelcome=true">
                <p className="link-text">Join the newsletter</p>
              </a>
              <a href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1">
                <p className="link-text" >Follow the Kickstarter</p>
              </a>        
            </div>
          </aside>
        </section>
        <section className="content-section">
          <article className="feature">
            <div className="imageContainer">
              <StaticImage 
                src="../images/HardcoverUVTestFront.png" 
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
        <section className="spread-section">
          <StaticImage 
            src="../images/open_mockup1.png" 
            alt="Rendering of spread from the Hull Breach book" 
            placeholder="dominantColor"  
            className="rendering"
          />
          <StaticImage 
            src="../images/open_mockup2.png" 
            alt="Rendering of spread from the Hull Breach book" 
            placeholder="dominantColor"  
            className="rendering"
          />
        </section>
        <section className="form-section">
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
              className="broken-link"
              src=""  
              alt=".../hodderreserve"
            />}
          </button>
        </section>
      </main>
    );
  }
}

export default IndexPage
