import React from 'react'
import Header from './header/header'
import styles from './style.module.css' 
import Image from 'next/image'
import Footer from './footer/footer'
import Hero from './herosection/hero'

function Home() {
  return (
    <div className={styles.bgcolr}>
      <div className={styles.imageWrapper}>
        <Image src='/mangologo.jpg' alt='mangologo' width={200} height={200} />
      </div>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home