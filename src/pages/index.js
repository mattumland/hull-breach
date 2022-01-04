import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./styles.scss"
import "normalize.css"
import { Helmet } from "react-helmet"
import icon from "../images/gatsby-icon.png"

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
      <>
        <Helmet>
          <title>HULL BREACH</title>
          <link rel="icon" type="image/png" href={ icon } sizes="16x16" />
          <html lang="en" amp />
        </Helmet>
        <main>
          <section className="banner-section">
            <StaticImage 
              src="../images/hullbreach-cover-13000px300dpi-20211027.jpeg" 
              alt="Debris being pulled through a hole in the hull of a ship" 
              placeholder="blurred"  
              className="banner-image"
            />
            <div className="banner-content">
              <div className="title-box">
                <h1>
                <StaticImage 
                    src="../images/hull-breach-title-01.png" 
                    alt="HULL BREACH" 
                    placeholder="blurred" 
                    className="banner-title" 
                />
                </h1>
                <StaticImage 
                    src="../images/hb-subhead-01.png" 
                    alt="A sci-fi horror ttrpg anthology" 
                    placeholder="blurred" 
                    className="banner-subtitle" 
                />
                <div className="banner-logo">
                  <StaticImage 
                    src="../images/mosh-logo.png" 
                    alt="For use with the Mothership Sci-Fi Horror RPG" 
                    placeholder="blurred"  
                    className="logo"
                  />
                </div>
              </div>
              <div className="banner-links">
                <a href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1?ref=avaier" target="_blank" rel="noopener noreferrer">
                  <p className="link-text" >Now on Kickstarter</p>
                </a>        
                <a href="https://ianyusem.substack.com/p/anodyne-direct-00-boot-sequence?showWelcome=true" target="_blank" rel="noopener noreferrer">
                  <p className="link-text">Join the Newsletter</p>
                </a>
                <Link to="/press/">
                  <p className="link-text">Press Release</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="content-section">
            <article className="feature">
              <StaticImage 
                src="../images/HardcoverFront.png" 
                alt="Artist rendering of Hull Breach book cover" 
                placeholder="dominantColor"  
                className="rendering"
              />
              <div className="description">
                <p><b>Hull Breach</b> is a massive adventure and supplement anthology for the <b>Mothership Sci-Fi Horror RPG</b>, brought to you by a diverse community of 3rd party Mothership authors, designers and artists.</p><br></br>
                <p><i>"If you've just learned about Mothership, Hull Breach is the perfect book for you."</i> - Sean McCoy, creator of Mothership</p><br></br>
                <p><b>This 200+ page hardcover book </b>features all new Mothership content fully compatible with the 1st edition rules, including:</p>
                <ul>
                  <li>12+ terrifying adventures for one shot or campaign play.</li>
                  <li>Dozens of hostile alien entities and human adversaries.</li>
                  <li>Warden Advice and articles to level up your game.</li>
                  <li>Generators, toolkits and toys galore.</li>
                  <li>New ways to play Mothership with expanded mechanics, alternate campaign frames and system hacks.</li>
                  <li>Over 50 original illustrations from an all-star roster of fan favorite and first time Mothership artists.</li>
                </ul>
                <a href="https://www.kickstarter.com/projects/yusem/hull-breach-vol-1?ref=avaier" target="_blank" rel="noopener noreferrer">
                  <p className="description-link">Live now on Kickstarter</p>
                </a>  
              </div>
            </article> 
          </section>
          <section className="spread-section">
            <StaticImage 
              src="../images/Xeiram_ForWebsite.png" 
              alt="Artist rendering of interior pages of Xeiram article from Hull Breach" 
              placeholder="dominantColor"  
            />
            <StaticImage 
              src="../images/MostWantedForWebsite.png" 
              alt="Artist rendering of interior pages of Most Wanted article from Hull Breach" 
              placeholder="dominantColor"  
            />
            <StaticImage 
              src="../images/ISMM_4_Website.png" 
              alt="Artist rendering of interior pages of ISMM article from Hull Breach" 
              placeholder="dominantColor"  
            />
          </section>
          <section className="form-section">
            <button className="ad" onClick= { this.toggleAd }>
              {!this.state.adClick &&  
                <div className="static">         
                  <StaticImage 
                    src="../images/banner.png"  
                    alt="AD - click here if you or a loved one where injured in the Hodder Forest Reserve Habitat accident."
                    className="desktop"
                    placeholder="blurred"
                  />
                </div>
              }
              {!this.state.adClick &&  
                <div className="static">         
                  <StaticImage 
                    src="../images/arg-banner_mobile.png"  
                    alt="AD - click here if you or a loved one where injured in the Hodder Forest Reserve Habitat accident."
                    className="mobile"
                    placeholder="blurred"
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
      </>
    );
  }
}

export default IndexPage
