import React from 'react';
import styles from './Box.module.css';

export default function Box({ className, ...rest }) {
  // props { name: 'John', children:  }
  return <div {...rest} className={`${styles.box} ${className} `} />;
}
