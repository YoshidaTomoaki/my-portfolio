import React from 'react'
import PropTypes from 'prop-types'

import picAboutMe from '../images/aboutMe.jpg'
import demo from '../images/pic02.jpg'
import picMusic from '../images/music.jpg'
//import picProgramming from '../images/programming.jpg'
import picMovie from '../images/movie.gif'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="aboutMe" className={`${this.props.article === 'aboutMe' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <span className="image main"><img src={picAboutMe} alt="" /></span>
          <p><br/>Tomoaki Yoshida. (Yda:waida)</p>
          <p>1992/03/06 (27ages)</p>
          <p>FrontEnd Enginner and Guitarist and Movie creater.</p>
          <p>Contact: ydaydada@gmail.com</p>
          {close}
        </article>

        <article id="programming" className={`${this.props.article === 'programming' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Programming</h2>
          <span className="image main"><img src={demo} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="music" className={`${this.props.article === 'music' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Music</h2>
          <span className="image main"><img src={picMusic} alt="" /></span>
          <h3 className="major">Kirikou and the sorceress</h3>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="movie" className={`${this.props.article === 'movie' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Movie</h2>
          <span className="image main"><img src={picMovie} alt="" /></span>
          <h3 className="major">2019</h3>
          <p>
            <a target="_blank" href="https://www.youtube.com/watch?v=TwBSSPcdhkA">Live Movie / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" href="https://www.youtube.com/watch?v=GFbpn29j1tk">Rouningyou / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" href="https://www.youtube.com/watch?v=37SwV0Pasjg">Maboroshi no yoru / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" href="https://www.youtube.com/watch?v=BYjXIptrvN4">MUTANT / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" href="https://www.youtube.com/watch?v=Qt0qC0viXgE">Ryugujou / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" href="https://www.youtube.com/watch?v=4zMo_Gme63g">Tengoku no kairou (trailer) / Kirikou and the sorceress</a>
          </p>
          <h3 className="major">2018</h3>
          <p>
            <a target="_blank" href="https://www.youtube.com/watch?v=U-Xgf5Qjdkw">2ndSingle Sakana to bouken (PV) / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" href="https://www.youtube.com/watch?v=5p3GKOvLWW8">Live Trailer / Kirikou and the sorceress</a>
          </p>
          <h3 className="major">~2017</h3>
          <p>
            <a target="_blank" href="https://www.youtube.com/watch?v=S3C5mpd9sRQ">Syuumatsuron(PV) / Kirikou and the sorceress</a>
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/kirijyo_Yda" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/tomoaki.yoshida.391" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/kirijyo_yda/?hl=ja" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/YoshidaTomoaki" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main