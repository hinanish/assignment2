import React from 'react'
import Header from './header/header'
import styles from './style.module.css' 
import Image from 'next/image'
import Footer from './footer/footer'
import Hero from './herosection/hero'



function Home() {
  return (
    <div className={styles.bgcolr}>
     <Image src={'/mangologo.jpg'} alt='mangologo' width={200} height={200} className={styles.Image} ></Image>
      <Header></Header>
      <Hero> </Hero>
      <Footer></Footer>
    </div>
  )
}

export default Home 