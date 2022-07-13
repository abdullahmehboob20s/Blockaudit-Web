import React from "react";
import styles from "scss/layout/Companies.module.scss";
import bigCircle from "assets/images/companies-big-circle.png";
import stripeWithCircle from "assets/images/stripe-with-circle.png";
import wonderfullClients from "assets/images/wonderfull-clients.png";
import bitcoinIcon from "assets/images/bitcoin-icon.png";
import redCircle from "assets/images/red-thick-circle.svg";
import ethIcon from "assets/images/eth-icon.png";

function Companies() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <main>
          <div className={styles.stripeWithCircle}>
            <div className={styles.bigCircle}>
              <img src={bigCircle} alt="" />

              <img src={bitcoinIcon} className={styles.bitcoinIcon} alt="" />
              <img src={redCircle} className={styles.redCircle} alt="" />
              <img src={ethIcon} className={styles.ethIcon} alt="" />
              <img src={redCircle} className={styles.redCircle2} alt="" />
            </div>
            <img
              src={stripeWithCircle}
              className={styles.stripeAndCircle}
              alt=""
            />
          </div>

          <h1 className={`${styles.title} weight-3 lh-1_4 white`}>
            Trusted by over <span className="red">235+</span> Companies in the
            CryptoWorld
          </h1>
        </main>

        <section>
          <img src={bigCircle} className={styles.sectionBigCircle} alt="" />
          <img
            src={wonderfullClients}
            className={styles.wonderfullClients}
            alt=""
          />
          <h1 className="white weight-5 lh-1">
            Some of our <br /> wonderful <br />{" "}
            <span className="red">Clients.</span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Companies;
