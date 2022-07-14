import { IKImage } from "imagekitio-react";
import React from "react";
import styles from "scss/components/DropdownItem.module.scss";

function DropdownItem({ title, icon }) {
  return (
    <div className={styles.card}>
      <IKImage
        path={icon}
        alt=""
        lqip={{ active: true }}
        loading="lazy"
        className={styles.icon}
      />
      <p className="fs-16px white weight-3">{title}</p>
    </div>
  );
}

export default DropdownItem;
