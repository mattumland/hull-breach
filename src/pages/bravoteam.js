import React from "react"
import AltHeader from "./altheader.js"
import "normalize.css"
import "./bravoteam.scss"
import { bravo_images, alt_tags } from "../images/bravo-team-images.js"
class BravoTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: 1
    }
  }

  updateImage (chapterNumber) {
    this.setState({currentChapter: chapterNumber})
  }

  render () {
    return (
      <div className="bravo-page">
        <AltHeader></AltHeader>
        <nav className="chapter-select">
          <div className="chapter-buttons">
            <button 
              className={this.state.currentChapter === 1 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(1)}
            >1</button>
            <button 
              className={this.state.currentChapter === 2 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(2)}
            >2</button>
            <button 
              className={this.state.currentChapter === 3 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(3)}
            >3</button>
            <button 
              className={this.state.currentChapter === 4 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(4)}
            >4</button>
            <button 
              className={this.state.currentChapter === 5 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(5)}
            >5</button>
            <button 
              className={this.state.currentChapter === 6 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(6)}
            >6</button>
            <button 
              className={this.state.currentChapter === 7 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(7)}
            >7</button>
            <button 
              className={this.state.currentChapter === 8 ? 'active' : 'inactive'}
              onClick={ e=> this.updateImage(8)}
            >8</button>
          </div>
        </nav>
        <section className="bravo-list">
          <h2 className="bravo-subtitle">{(alt_tags[this.state.currentChapter-1])}</h2>
          <div className="bravo-image-container">
            <img
              src={bravo_images[this.state.currentChapter-1]}
              alt="" 
              className="bravo-image"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default BravoTeam