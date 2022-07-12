import React from "react";
import styles from "scss/components/BusinessCard.module.scss";

function BusinessCard({ img, title, subtitle }) {
  return (
    <div className={styles.card}>
      <img src={img} className="mb-35px " alt="" />
      <h1 className="mb-20px text-center fs-26px weight-6 white lh-1">
        {title}
      </h1>
      <p className="fs-18px white lh-1_4 weight-3 text-center">{subtitle}</p>
    </div>
  );
}

export default BusinessCard;
