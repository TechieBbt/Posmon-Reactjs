import React from 'react';
import classes from './header.module.css';
import Hamburger from '../../Assets/menu.png';
import Logo from '../../Assets/Pavilion.png';
import Notification from '../../Assets/notification.png';
import Profile from '../../Assets/Profile.jpg';

const header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.inner}>
          <div className={classes.logo}>
              <img src={Hamburger} alt='hamburger'/>
              <img src={Logo} alt='logo'/>
              <input type="text" placeholder="Search"></input>
          </div>
          <div className={classes.icons}>
          <div className={classes.bell}><img src={Notification} alt='notify'/></div>
          <div><img src={Profile} alt='user'/></div>
          </div>
        </div>
    </div>
  )
}

export default header
