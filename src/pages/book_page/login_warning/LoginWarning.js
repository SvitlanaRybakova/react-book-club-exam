import React from "react";
import styles from './LoginWarning.module.css'

const LoginWarning = ({ message }) => {
  return (
    <div className={styles.container}>
     {message}
    </div>
  );
};

export default LoginWarning;
