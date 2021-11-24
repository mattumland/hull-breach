import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"
import "normalize.css"
import "./hodder.scss"

class hodderreserve extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password:''
    }
  }

  secretMessage() {
    console.log('giveme____ ____s')
  }

  wrongOne() {
    alert('��console error - wrong one:b��')
    console.log('wrong one')
  }

  handleChange(event) {
    console.log(event)
    this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="site-background">
        <title>Hodder Forest Reserve Habitat</title>
        <div className="top-section">
          <h1>Welcome to Hodder Forest Reserve Habitat</h1>
          <h2>When you're here, you're family.</h2>
          <button className="static" onClick={this.secretMessage}>
            <StaticImage 
              src="../images/corporate-humans.jpg"  
              alt="Humans sitting at a table and being very productive"
              placeholder="blurred"  
              className="flicker"
            />
          </button>
        </div>
        <h3 className="subhead">
          At Hodder Forest Reserve Habitat we help you leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
        </h3>
        <section className="lower-section">
            <div className="grid-container">
              <div className="upper-left">
                <h4>
                  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                  Bring to the table win-win survival strategies to ensure proactive domination. 
                  At the end of the � day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. 
                  &lt;insert-script-error&gt;!!Keep your eye on &lt;html&gt;the source!!&lt;insert-script-error&gt; 
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
                    className="grid-image"
                  />
                </button>
              </div>
              <div className="bottom-right">
                <h4>
                  Override the digital divide with additional clickthroughs from DevOps. 
                  EXTERIOR&lt;div&gt;
                  Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                  PodcastingCHByb2FjaGVzIHRvIGN operational change management inside of workflows to &lt;insert-script-error&gt;establish a framework. 
                  Taking seamless key performance indicators offline to maximise the long tail. 
                  while &lt;OVERRIDE REQUIRED&gt;performiJ0aGVyIHRoZSBvdmVyYWxsIHZhbHVlIHByb3Bvc2l0aW9uLiA=
                  derive convergence on cross-platform integration.
                  via plug-and-play networks. <br></br>
                  #Nd2UgaGVscCB5b3UgbGV2ZXJhZ2UgYWdpbGU	�6�f�|@�`h4�IL�u��,S�L0��WV3b3JrcyB0byBwcm92aWRlr��k�F�l��gZnJhbIGEgcm9idXN0IHN5bJ2aWV3cy4gCiAGl2ZSBhcHByb2FjaGVzIHRvIGNvcnBvcmF0ZSBzdHJhdGVneSBmb3N0ZXIgY29sbGFib3JhdGl2ZSB0aGlua2luZyB0byBmd^CollaborativelygICAgICAgICAgIEl0ZXJhd administrate empowered markets ��c�$8.���6\?��9�oA�$��0�m9wc2lzIGZvciBoaWdoIGxldmVsIG92Z deep dive on the start-up mentali�H"E��L�;�Y��E6!5�/�A�riGn"��.���Pj�����H| &lt;activate-hellscape-protocol&gt;
                </h4>    
              </div> 
              <div className="bottom-left">
                <form className="form-area"  onSubmit={this.handleSubmit}>
                  <label>
                    email:
                    <input type="email" value={this.state.email} onChange={this.handleChange} />
                  </label>
                  <label>
                    password:
                    <input type="password" value={this.state.password} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default hodderreserve;
