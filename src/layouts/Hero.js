import IconCard from "components/IconCard";
import React from "react";
import styles from "scss/layout/Hero.module.scss";
import icon1 from "assets/images/icons/audit.svg";
import icon2 from "assets/images/icons/escrow.svg";
import icon3 from "assets/images/icons/kyc.svg";
import editor from "assets/images/editor.png";
import concentricCircle from "assets/images/concentric-circle.png";

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <img src={concentricCircle} className={styles.concentricCircle} alt="" />

      <div className="container-wrapper">
        <div className={styles.hero}>
          <main>
            <h2 className="fs-50px white weight-3 lh-1">
              Audit <span className="red">Service</span> For
            </h2>
            <h1 className="fs-150px white weight-8 lh-1 mb-15px">DeFi.</h1>
            <p
              className="fs-24px white weight-2 lh-1_4 opacity-0_6 mb-30px"
              style={{ maxWidth: "22em" }}
            >
              Audit, KYC documents, Escrow And Development, All at one place
            </p>

            <div className={styles.icons}>
              <IconCard icon={icon1} title="Audit" />
              <IconCard icon={icon3} title="KYC" />
              <IconCard icon={icon2} title="Escrow" />
            </div>
          </main>

          <aside>
            <img src={editor} className="w-full" alt="" />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Hero;
