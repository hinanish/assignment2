import React from 'react'
import Footerstyle from './Footer.module.css'
function Footer() {
  return (
    <footer className={Footerstyle.footer}>
        <div className={Footerstyle.divs}> © Salma  Fruits All Rights Reserved.

Disclaimer: Images are for just visual purpose original product may differ from the images. </div>  
        <span className={Footerstyle.div}>Privacy & Policy</span>
        <span className={Footerstyle.div}>Terms of Service </span> 
      
    </footer>
  
  )
}

export default Footer