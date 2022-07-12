import React from "react";
import styles from "scss/components/IconCard.module.scss";

function IconCard({ icon, title }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt="" />
      <h4 className="fs-24px white weight-4">{title}</h4>
    </div>
  );
}

export default IconCard;
