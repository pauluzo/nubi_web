import React from 'react';
import './SideDrawer.css'
import {NavLink} from 'react-router-dom';
import Logo from '../Assets/nubi_logo.png';

const SideDrawer = (props) => {
  let classes;
  if(props.show) {
    classes = 'side-drawer open'
  } else {
    classes = 'side-drawer'
  }
  return(
    <div className='drawer_container'>
      <div className={classes} >
        <div className='logo_container'>
          <img alt='logo' src={Logo} />
        </div>
        <div>
          <nav>
            <ul>
              <li><NavLink exact activeStyle={{backgroundColor: 'rgb(32, 29, 29)', borderRadius: '20px 0px 0px 20px'}} to='/'>HOME</NavLink></li>
              <li><NavLink activeStyle={{backgroundColor: 'rgb(32, 29, 29)', borderRadius: '20px 0px 0px 20px'}} to='/testimonials'>TESTIMONIALS</NavLink></li>
              <li><NavLink activeStyle={{backgroundColor: 'rgb(32, 29, 29)', borderRadius: '20px 0px 0px 20px'}} to='/news'>NEWS AND EVENTS</NavLink></li>
              <li><NavLink activeStyle={{backgroundColor: 'rgb(32, 29, 29)', borderRadius: '20px 0px 0px 20px'}} to='/contact'>CONTACT US</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;