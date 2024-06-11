import React from 'react';
import styles from "../../Styles/Cardtwo.module.css";

const Card = ({ icon, totalNumber }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardMain}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.totalNumber}>{totalNumber}</div>
      </div>
    </div>
  );
};

export default Card;
