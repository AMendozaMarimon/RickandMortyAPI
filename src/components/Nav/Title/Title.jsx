// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from '../Title/Title.module.css';
import { useLocation } from "react-router-dom";

export default function Title() {

  const location = useLocation();
  if (location.pathname === '/favorites') {
    return null;
  }

  return (
    <div>
      <h1 className={styles.Title}>The Rick and Morty API</h1>
    </div>
  );
}
