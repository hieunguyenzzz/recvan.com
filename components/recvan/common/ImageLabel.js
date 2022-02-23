import React from 'react'
import styles from './ImageLabel.module.css'
export default function ImageLabel({ children }) {
  return <span className={styles.root}>{children}</span>
}
