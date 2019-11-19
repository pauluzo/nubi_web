import React from 'react';
import Logo from '../Assets/nubi_logo.png';
import {Link} from 'react-router-dom';

import './Toolbar.css';
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn';

const Toolbar = props => {
  return(
    <header className='toolbar_header'>
      <div className='toolbar_container' >
        <div><img className='image' src={Logo} alt='Logo' ></img></div>
        <div className='spacer' />
        <div className='toolbar_links'>
          <ul className='toolbar_ul'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/testimonials'>TESTIMONIALS</Link></li>
            <li><Link to='/news'>NEWS AND EVENTS</Link></li>
            <li><Link to='/contact'>CONTACT US</Link></li>
          </ul>
        </div>
        <div className='drawer_toggle'>
          <DrawerToggleBtn click={props.drawerHandler} />
        </div>
      </div>
    </header>
  );
}

export default Toolbar;