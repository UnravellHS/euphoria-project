import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}> СКИДКА 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>лучшее предложение 2024</div>
        <h1 className={styles.head}> два ядра два гига игровая видеокарта</h1>
        <button className={styles.button}>Купить</button>
      </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;
