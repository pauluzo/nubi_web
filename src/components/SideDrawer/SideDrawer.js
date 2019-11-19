import React from 'react';
import './SideDrawer.css'
import {Link} from 'react-router-dom';

const SideDrawer = (props) => {
  let classes;
  if(props.show) {
    classes = 'side-drawer open'
  } else {
    classes = 'side-drawer'
  }
  return(
    <div className={classes} >
      <nav>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/testimonials'>TESTIMONIALS</Link></li>
          <li><Link to='/news'>NEWS AND EVENTS</Link></li>
          <li><Link to='/contact'>CONTACT US</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideDrawer;