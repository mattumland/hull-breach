import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"
import "normalize.css"
import "./hodder.scss"
import { Helmet } from "react-helmet"
import hodderIcon from "../images/hodderIcon-01.png"
import download1 from "../downloads/hull-breach_wallpaper_1920x1080.png"
import download2 from "../downloads/Hodder_Forest_Reserve_1MCR_Voucher.pdf"
class hodderreserve extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'unidentified user',
      password:'',
      authorized: false
    }
  }

  secretMessage = () => {
    alert('incident password 1 logged')
    console.log('IP-1: giveme________s')
  }

  wrongOne = () => {
    alert('��console error - wrong one:�^�')
    console.log('under here')
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    if (this.state.password === "givemeyourhands") {
      alert('AUTHORIZED USER DETECTED.')
      this.setState({authorized: true});
    } else {
      alert(`UNAUTHORIZED LOGIN DETECTED ACCOUNT ASSOCIATED WITH ${this.state.username} HAS BEEN FLAGGED FOR CENSURE AND FORFEITURE OF ASSETS PER CORPORATE CODE OF CONDUCT 2A-1BT SECTION 45.C.5` )
    }
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Hodder Forest Reserve Habitat</title>
          <link rel="icon" type="image/png" href={ hodderIcon } sizes="16x16" />
          <html lang="en" amp />
        </Helmet>
        <div className="site-background">
          <div className="top-section">
            <h1> 
              <StaticImage 
                src="../images/hodder_forest_reserve_logo_1-01.png"  
                alt="Hodder Forest Reserve Habitat"
                placeholder="blurred"
                className="hodder-logo"  
              />
            </h1>

            <button className="static" onClick={this.secretMessage}>
              <StaticImage 
                src="../images/corporate-humans.jpg"  
                alt="Humans sitting at a table and being very productive"
                placeholder="blurred"  
                className="flicker"
              />
            </button>
          </div>
          <h3 className="hodderH3">
            At Hodder Forest Reserve Habitat we help you leverage agile frameworks to provide a robust synopsis for high level overviews. 
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
          </h3>
          <section className="lower-section">
              <div className="grid-container">
                <div className="upper-left">
                  <h4 className="hodderH4">
                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    Bring to the table win-win survival strategies to ensure proactive domination. 
                    At the end of the � day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. 
                    &lt;insert-script-error&gt;!!Keep your eye on &lt;html&gt;the elements!!&lt;insert-script-error&gt; 
                    User generated content in real%time will have multiple touchpoints for offshoring.
                    Capitalize on low hanging fruit &lt;div&gt;to identify a ballpark value added activity to beta test. 
                  </h4>
                </div>
                <div className="upper-right">
                  <button className="static" onClick={this.wrongOne}>
                    <StaticImage
                      src="../images/handshake.jpg"  
                      alt="Humans shaking hands"  
                      placeholder="blurred"  
                      className="handshake"
                    />
                    <h3 className="incident-password-2">g_____yourhands</h3>
                  </button>
                </div>
                <div className="bottom-right">
                  <h4 className="hodderH4">
                    Override the digital divide with additional clickthroughs from DevOps. 
                    EXTERIOR&lt;div&gt;
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                    Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                    Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                    PodcastingCHByb2FjaGVzIHRvIGN operational change management inside of workflows to &lt;insert-script-error&gt;establish a framework. 
                    Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
                    Taking seamless key performance indicators offline to maximise the long tail. 
                    while &lt;OVERRIDE REQUIRED&gt;performiJ0aGVyIHRoZSBvdmVyYWxsIHZhbHVlIHByb3Bvc2l0aW9uLiA=
                    derive convergence on cross-platform integration.
                    via plug-and-play networks. <br></br>
                    #Nd2UgaGVscCB5b3UgbGV2ZXJhZ2UgYWdpbGU	�6�f�|@�`h4�IL�u��,S�L0��WV3b3JrcyB0byBwcm92aWRlr��k�F�l��gZnJhbIGEgcm9idXN0IHN5bJ2aWV3cy4gCiAGl2ZSBhcHByb2FjaGVzIHRvIGNvcnBvcmF0ZSBzdHJhdGVneSBmb3N0ZXIgY29sbGFib3JhdGl2ZSB0aGlua2luZyB0byBmd^CollaborativelygICAgICAgICAgIEl0ZXJhd administrate empowered markets ��c�$8.���6\?��9�oA�$��0�m9wc2lzIGZvciBoaWdoIGxldmVsIG92Z deep dive on the start-up mentali�H"E��L�;�Y��E6!5�/�A�riGn"��.���Pj�����H| &lt;activate-hellscape-protocol&gt; PROTECTSHAREHOLDERINTERESTSABOVEALLOTHERCONCERNS 
                  </h4>    
                </div> 
                <div className="bottom-left">
                  <form className="form-area" onSubmit={this.handleSubmit}>
                    <h3 className="claim-message">Need to file a claim regarding the Hodder Forest Reserve Accident? Enter your username and the incident password to receive remediation</h3>
                    <label>username:
                      <input type="name" name="username" id="username" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>password:
                      <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    {this.state.authorized && 
                      <div>
                        <h3>HELLO {`${this.state.username}`}. WE APOLOGIZE FOR THE INCONVENIENCE. </h3> 
                        <button>
                          <a href={download1} download="BY_OPENING_YOU_AGREE_TO_ALL_OUR_TERMS">CLICK HERE TO CLAIM YOUR REMEDIATION PACKAGE</a>{` `}
                        </button>
                        <button className="special-reward">
                          <a href={download2} download="THIS_VOUCHER_DOES_NOT_CONSTITUTE_AN_ADMISSION_OF_CUPABILITY">CONGRATS {`${this.state.username}`} YOU HAVE BEEN SELECTED FOR AN ADDITIONAL REMEDIATION AGREEMENT. CLICK TO LEARN MORE.</a>{` `}
                        </button>
                      </div>
                    }
                  </form>
                </div>
              </div>
          </section>
        </div>
      </>
    );
  }
}

export default hodderreserve;
