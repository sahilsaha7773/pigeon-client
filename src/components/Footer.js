import React from 'react'
import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h3 style={{
        margin: '0',
      }}>Made with 💓 and ☕ by <a href="https://sahilsaha.me" rel="noreferrer" target="_blank"
      >Sahil Saha</a></h3>
    </div>
  )
}

export default Footer
