import React from 'react'
import classes from './whatsapp.module.css';
import {FaWhatsappSquare} from "react-icons/fa";


const whatsapp = () => {
  return (
    <div className={classes.whatsappchat}>
        <a href="https://wa.me/2347035236186">
            <FaWhatsappSquare className={classes.icon} />
            <p>Chat</p>
        </a>
        
      
    </div>
  )
}

export default whatsapp
