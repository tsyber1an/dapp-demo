import React from 'react'
// import { Container, Jumbotron } from 'reactstrap'

const Header = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">
        <h1>Next Dapp Here!!!</h1>
        <h3>Buy NFT stored in Eth smart conracts</h3>
        <div className="intro-button">
          <a href="">Get Started</a>
        </div>
        <div className="company-icons">
          <span className="company-icons__item">
            <i className="fab fa-apple" />
            app store
          </span>
          <span className="company-icons__item">
            <i className="fab fa-google-play" />
            google play
          </span>
          <span className="company-icons__item">
            <i className="fab fa-windows" />
            windows
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
