import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-address-card-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Yda Work</h1>
                <p>This is my portfolio web site.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('aboutMe')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('programming')}}>Programming</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('music')}}>Music</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('movie')}}>Movie</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
