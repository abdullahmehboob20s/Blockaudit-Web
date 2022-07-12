import React from "react";
import styles from "scss/components/SecurityCard.module.scss";

function SecurityCard({ title, subtitle }) {
  return (
    <div className={styles.card}>
      <p className="fs-24px white text-center weight-4 lh-1">{title}</p>
      <h5 className="fs-40px weight-6 white text-center lh-1">{subtitle}</h5>
    </div>
  );
}

export default SecurityCard;