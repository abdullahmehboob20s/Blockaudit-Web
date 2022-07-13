import React from "react";
import styles from "scss/layout/About.module.scss";
import AboutCard from "components/AboutCard";
import { IKImage } from "imagekitio-react";

function About() {
  return (
    <div className={styles.wrapper}>
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"numbers-bg.png"}
        className={`${styles.numberBg}`}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"red-thick-circle.svg"}
        className={styles.redCircle1}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"red-thick-circle.svg"}
        className={styles.redCircle2}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"solana.svg"}
        className={styles.solanaIcon}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"polygon.svg"}
        className={styles.polygonIcon}
        alt=""
      />
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"eth-icon.png"}
        className={styles.ethIcon}
        alt=""
      />

      <main>
        <section>
          <div className="container-wrapper">
            <div className={styles.cards}>
              <AboutCard
                title="Security Services"
                subtitle="We deeply analyze the smart contracts line by line and cover the smart contracts with tests when developing for our clients."
              />
              <AboutCard
                title="Superfast Service"
                subtitle="Audit reports with the recommendations how to fix the bugs and mitigate the risks delivered in ~ 6h up to 2 days."
              />
              <AboutCard
                title="Manual Checkup"
                subtitle="We dose not only Automated audit, but also in manual check every code in smart contract."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
