import React from 'react';
import './DrawerToggleBtn.css';

const DrawerToggleBtn = props => {
  return (
    <button className='toggle_button' onClick={props.click}>
      <div className='toggle_lines' />
      <div className='toggle_lines' />
      <div className='toggle_lines' />
    </button>
  );
}

export default DrawerToggleBtn;