import React from 'react';
import './Reusable.css';
import Facebook from '../Assets/facebook_logo.png';
import Instagram from '../Assets/instagram_logo.png';
import Twitter from '../Assets/twitter_logo.png';
import Linkedin from '../Assets/linkedin_logo.png';

const Header = props => {
  return(
    <div className='header-container'>
      <div className='title-container'>
        <p className='header-title'>{props.title}</p>
        <p className='header-subtitle'>{props.subtitle}</p>
      </div>
    </div>
  );
}

const SubFooter = () => {
  return(
    <div className='subfoot_outer_container'>
      <div className='spacer'></div>
      <div className='subfoot_inner_container'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/nubieducation'><img src={Facebook} alt='facebook'></img></a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/nubieducation/'><img src={Instagram} alt='instagram'></img></a>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/NubiEducation'><img src={Twitter} alt='twitter'></img></a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/company/nubi-educational-counselling-ltd'><img src={Linkedin} alt='linkedIn'></img></a>
      </div>
      <div className='spacer'></div>
    </div>
  );
}

const Footer = () => {
  return(
    <div className='footer_container'>
      <div className='spacer'></div>
      <div>
        <p>300a Surulere way, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
        <p>info@nubieducation.com</p>
        <p>+234 (1) 453 408 4</p>
        <p>+234 (90) 9174 9223</p>
        <p>+234 (70) 6964 4299</p>
      </div>
      <div className='spacer'></div>
    </div>
  );
}

export {Header, SubFooter, Footer};