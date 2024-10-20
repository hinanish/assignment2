import React from 'react';
import css from './mangoes.module.css';

export default function Mangoes() {
  return (
    <div>
      <h1 className={css.h1css}>Mangoes</h1>
      <span>
        <ul>
          <li className={css.li}>Sindhri Aam</li>
          <li className={css.li}>Chuansa Aam</li>
        </ul>
      </span>
      <footer className={css.footer}>
        <span>hello</span> <span>i&#39;m a footer</span>
        <p>&copy; 2024 Your business. All rights reserved.</p>
      </footer>
    </div>
  );
}