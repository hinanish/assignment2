import React from 'react';
import styles from './contact.module.css';

export default function Contactpage() {
  return (
    <div>
      <h1 className={styles.h1css}>Contact page</h1>
      <span className={styles.css}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, hic.
      </span>
      <footer className={styles.footer}>
        <span>hello</span> <span>i&#39;m a footer</span>
        <p>&copy; 2024 Your business. All rights reserved.</p>
      </footer>
    </div>
  );
}