import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a 
                href="mailto:myemail.com">myemail@email.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linked Icon" />
                <a 
                href="https://www.linkedin.com/myname">Linkedin.com</a>
            </li>
            <li className={styles.link}>
              <img src= {getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
            <a href="https://www.github.com/myname">gibhub.com/myname</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact