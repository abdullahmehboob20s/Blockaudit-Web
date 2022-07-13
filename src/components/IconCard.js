import React from "react";
import styles from "scss/components/IconCard.module.scss";
import { IKImage } from "imagekitio-react";

function IconCard({ icon, title }) {
  return (
    <div className={styles.card}>
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"bg-filter-img.png"}
        className={styles.bgFilterImg}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={icon}
        className={styles.icon}
        alt=""
      />
      <h4 className="fs-24px white weight-4">{title}</h4>
    </div>
  );
}

export default IconCard;
