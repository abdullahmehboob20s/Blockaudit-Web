import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/components/AboutCard.module.scss";

function AboutCard({ title, subtitle }) {
  return (
    <div className={styles.card}>
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"aboutCardBg.png"}
        className={styles.bgFilterImg}
        alt=""
      />
      <h2 className="fs-38px white weight-6 mb-15px lh-1">{title}</h2>
      <p className="fs-22px white weight-3 lh-1_2">{subtitle}</p>
    </div>
  );
}

export default AboutCard;
