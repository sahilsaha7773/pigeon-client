import React from 'react'
import styles from '../styles/faqs.module.css';
import pigeonLogo from '../images/pigeonLogo.png';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className={styles.card}>
      <img src={pigeonLogo} style={{ objectFit: 'contain' }} />
      <p style={{
        fontSize: "20px"
      }}>
        Hi there! I am Sahil, your friendly neighborhood Developer. I made this site for fun after seeing something similar on my friends' whatsapp stories.
        I never thought someone will actually visit and use this site, but thanks to my friends and seniors for promoting it on their social media
        handles which brought in 300+ users on the 1st day of its launch (11th December, 2021).
        <br />
        <br />
        Currently pigeon.rocks has 2k+ daily users with 10k+ daily page views.
        <br />
        <br />
        Checkout the site's disclaimer <Link to='/disclaimer'>here</Link>.
      </p>
    </div>
  )
}

export default AboutMe
