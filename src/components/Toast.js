import React from "react";
import styles from "scss/components/Toast.module.scss";
import { IoClose } from "react-icons/io5";
import useMediaQuery from "hooks/useMediaQuery";

function Toast({ title, state, stateSetter, toastRef }) {
  const isBellow760px = useMediaQuery("(max-width : 47.5em)");
  return (
    <div
      className={`${styles.toast} ${state ? styles.active : ""}`}
      ref={toastRef}
    >
      <p className={`${isBellow760px ? "fs-14px" : "fs-22px"}  white weight-4`}>
        {title}
      </p>

      <button onClick={() => stateSetter(false)}>
        <IoClose color="white" />
      </button>
    </div>
  );
}

export default Toast;
