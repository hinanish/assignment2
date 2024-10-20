import React from 'react'
import Image from 'next/image'
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.container}> 
      <div><Image src ={'/mangoleaf.jpg'} alt='mango' width={400} height={100} className={styles.img}></Image></div>
      

      <div><Image src ={'/images.jpg'} alt='mango.jpg' width={400} height={100} className={styles.img}></Image></div>
      </div>
     
  )
}

export default Home