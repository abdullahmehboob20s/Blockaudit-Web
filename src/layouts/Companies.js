import React from "react";
import styles from "scss/layout/Companies.module.scss";
import { IKImage } from "imagekitio-react";

function Companies() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <main>
          <div className={styles.stripeWithCircle}>
            <div className={styles.bigCircle}>
              <IKImage
                lqip={{ active: true }}
                loading="lazy"
                path={"companies-big-circle.png"}
                alt=""
              />

              <IKImage
                lqip={{ active: true }}
                loading="lazy"
                path={"bitcoin-icon.png"}
                className={styles.bitcoinIcon}
                alt=""
              />
              <IKImage
                lqip={{ active: true }}
                loading="lazy"
                path={"red-thick-circle.svg"}
                className={styles.redCircle}
                alt=""
              />
              <IKImage
                lqip={{ active: true }}
                loading="lazy"
                path={"eth-icon.png"}
                className={styles.ethIcon}
                alt=""
              />
              <IKImage
                lqip={{ active: true }}
                loading="lazy"
                path={"red-thick-circle.svg"}
                className={styles.redCircle2}
                alt=""
              />
            </div>
            <IKImage
              lqip={{ active: true }}
              loading="lazy"
              path={"stripe-with-circle.png"}
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
          <IKImage
            lqip={{ active: true }}
            loading="lazy"
            path={"companies-big-circle.png"}
            className={styles.sectionBigCircle}
            alt=""
          />
          <IKImage
            lqip={{ active: true }}
            loading="lazy"
            path={"wonderfull-clients.png"}
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
