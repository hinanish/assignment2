import React from 'react'
import Link from 'next/link'
import styles from './header.module.css' 


function Nav() {
  return (
    
       
  
      <nav className={styles.nav}><ul className={styles.ul}>
        <li className={styles.li}> Mango Store rollnumber00106157 Hina</li>
        <li className={styles.li}><Link href="/home" target="_blank"> Home </Link></li>
        <li className={styles.li}><Link href="/about" target='_blank'>About </Link></li>
        <li className={styles.li} ><Link href="/mangoes" target="_blank">Mangoes </Link></li> 
        <li className={styles.li}><Link href="/contact" target='blank'>Contact </Link></li>

    </ul>
        </nav>
  )
}

export default Nav
