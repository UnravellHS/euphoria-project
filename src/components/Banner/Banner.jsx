import React from "react";

import styles from "../../styles/Home.module.css";

import bannerImg from "../../images/banner.png";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        Сезонная
        <span>АКЦИЯ</span>
      </p>
      <button className={styles.more}>Хочу!</button>
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <p className={styles.discount}>
        выгода <span>50%</span> 
      </p>
    </div>
  </section>
);

export default Banner;
