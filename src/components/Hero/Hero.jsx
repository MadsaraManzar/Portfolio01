import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className = {styles.content}>
            <h1 className={styles.title}>Hi, I am Manzar</h1>
            <p className={styles.description}>
                I am a full-stack developer with 2 years of experience in React and NodeJs. Reach out if you'd like to learn more.
            </p>
            <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
        alt="Image" 
        className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero