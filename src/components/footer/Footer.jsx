import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'
const Footer = () => {
  return (
    <div className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        Welcome to Movix, your ultimate destination for all things cinema. At <code>www.movix.com</code>, we are passionate about bringing you the latest and greatest in the world of movies. From blockbuster releases to hidden gems, our curated collection ensures that every film enthusiast finds something to indulge in. Explore detailed movie profiles, watch trailers, read reviews, and discover showtimes near you. Immerse yourself in the magic of storytelling and cinematic artistry with Movix
        </div>
        <div className="socialIcons">
          <span className="icon"><FaFacebook/></span>
          <span className="icon"><FaInstagram/></span>
          <span className="icon"><FaTwitter/></span>
          <span className="icon"><FaLinkedin/></span>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Footer