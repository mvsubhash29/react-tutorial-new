/**
 * css stylesheets
 * Inline styles
 * css modules
 *
 */

// example for css stylessheets
// we will create css style in .css files and import it here

import React from "react";
import './style.css';
import {Chlid} from './child';

import styles from './style.module.css'

export const CssStyleSheet = () => {
  return (
    <>
      <h1 className={styles.primary}>Primary Color</h1>
      <Chlid />
    </>
  )
}

const primary = {
  color: 'white',
  fontSize: '3em'
}

export const InlineStyleComponent = () => {
  return (
    <>
      <h1 style={primary}>InlineStyleComponent</h1>
    </>
  )
}