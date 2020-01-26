import React from 'react'
import PropTypes from 'prop-types'

import picAboutMe from '../images/aboutMe.jpg'
import picProgramming from '../images/programming.jpg'
import picMusic from '../images/music.jpg'
import picMovie from '../images/movie.gif'

//const firebase = require("firebase");
//require("firebase/functions");

let firebase;
if (typeof window !== 'undefined') {
  firebase = require('firebase')
  require('firebase/auth')

  const config = {
    apiKey: "AIzaSyBE81ER2WQhND0ddpjJdh2OK_ZtU0E9UhU",
    authDomain: "my-portfolio-a7b14.firebaseapp.com",
    databaseURL: "my-portfolio-a7b14.firebaseio.com",
    projectId: "my-portfolio-a7b14",
    storageBucket: "my-portfolio-a7b14.appspot.com",
    messagingSenderId: "831567689940"
  };
  
  firebase.initializeApp(config);
  
}

class Main extends React.Component {
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    let data = {}
    data.name = e.target.name.value
    data.email = e.target.email.value
    data.message = e.target.message.value

    // バルデーションちゃんと書く
    if(data.name === '' || data.email === '' || data.message === '')　return

    // メールエラーパターンちゃんと書く
    let sendMail = firebase.functions().httpsCallable('sendMail');
    sendMail(data)
      .then((r)=>console.log('success',r))
      .catch((e)=>console.log('error',e))

    e.target.name.value = ""
    e.target.email.value = ""
    e.target.message.value = ""
    e.target.value = ""

    //[todo]送信エラーパターンとバリデーション
    this.props.onCloseArticle()
  }

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
          <span className="image main"><img src={picProgramming} alt="" /></span>
          <h3 className="major">Skill</h3>
          <p>JavaScript
            <br/>React/ReactNative/Next.js/Gatsby.js/Node.js
            <br/>Redux/GraphQl/Git/VSCode
            <br/>CircleCI/Bitrise/DeployGate/etc...</p>
          <h3 className="major">Work History</h3>
          <p>2019/03 〜 Web/iOS/android developer</p>
          <p>2015/04 〜 2019/01 Financial System Engineer(SIer)</p>
          {close}
        </article>

        <article id="music" className={`${this.props.article === 'music' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Music</h2>
          <span className="image main"><img src={picMusic} alt="" /></span>
          <h3 className="major">Kirikou and the sorceress</h3>
          <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tunecore.co.jp/artist/kiri-jyo?id=227641&lang=ja">This is Art Music Band in Japan.</a>
            <br/><br/>
            Guitar recordings for all songs.<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://kiri-jyo.com/">OFFICIAL WEBSITE</a>
          </p>
          {close}
        </article>

        <article id="movie" className={`${this.props.article === 'movie' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Movie</h2>
          <span className="image main"><img src={picMovie} alt="" /></span>
          <h3 className="major">2019</h3>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TwBSSPcdhkA">Live Movie / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=GFbpn29j1tk">Rouningyou / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=37SwV0Pasjg">Maboroshi no yoru / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=BYjXIptrvN4">MUTANT / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Qt0qC0viXgE">Ryugujou / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=4zMo_Gme63g">Tengoku no kairou (trailer) / Kirikou and the sorceress</a>
          </p>
          <h3 className="major">2018</h3>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=U-Xgf5Qjdkw">2ndSingle Sakana to bouken (PV) / Kirikou and the sorceress</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=5p3GKOvLWW8">Live Trailer / Kirikou and the sorceress</a>
          </p>
          <h3 className="major">~2017</h3>
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=S3C5mpd9sRQ">Syuumatsuron(PV) / Kirikou and the sorceress</a>
          </p>
          <br/>
          <h2 className="major">Tool</h2>
          <p>
            AdobeCC(PremirePro/AfterEffect/Photoshop/
            <br/>Illustrator/Lightroom)/
            <br/>Logic pro
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" onSubmit={this.onSubmit}>
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