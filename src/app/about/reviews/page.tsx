import React from 'react';
import css from './reviews.module.css';

export default function Review() {
  return (
    <div>
      <h1 className={css.h1css}>Review page</h1>
      <span className={css.css}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, hic.</p>
      </span>
      <footer className={css.footer}>
        <span>hello</span> 
        <span>i&#39;m a footer</span> 
        <p>&copy; 2024 Your business. All rights reserved.</p>
      </footer>
    </div>
  );
}