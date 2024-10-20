import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'

function Hero() {
  return (
    <div className={styles.container}> 
      <div><Image src ={'/mangotree.jpg'} alt='mangotree' width={400} height={100} className={styles.img}></Image></div>
      

      <div><Image src ={'/4mango.jpg'} alt='4mango.jpg' width={400} height={100} className={styles.img}></Image></div>
      </div>
     
  )
}

export default Hero