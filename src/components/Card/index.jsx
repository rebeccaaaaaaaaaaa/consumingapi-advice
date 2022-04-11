import React from "react";
import styles from "../../styles/components/Card.module.css";
import QuoteDetail from "../QuoteDetail";


export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h1 className={styles.card__title}> Advice #{props.idAdvice}</h1>
      </div>
      <div className={styles.card__body}>
        <p className={styles.card__text}>"{props.adviceText}"</p>
        <QuoteDetail />
      </div>
    </div>
  );
}
