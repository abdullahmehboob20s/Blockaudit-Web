import React from "react";
import styles from "scss/layout/Navbar.module.scss";
import logo from "assets/images/logo.png";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <img src={logo} className={styles.logo} alt="" />
          <div className={styles.right}>
            <ul>
              <a
                href="/"
                className={`${styles.navLink} ${styles.active} fs-20px white weight-3 pointer`}
              >
                Home
              </a>
              <a
                href="/"
                className={`${styles.navLink} fs-20px white weight-3 pointer`}
              >
                Services
              </a>
              <a
                href="/"
                className={`${styles.navLink} fs-20px white weight-3 pointer`}
              >
                Audits
              </a>
              <a
                href="/"
                className={`${styles.navLink} fs-20px white weight-3 pointer`}
              >
                Pricing
              </a>
              <a
                href="/"
                className={`${styles.navLink} fs-20px white weight-3 pointer`}
              >
                Contact
              </a>
            </ul>

            <aside>
              <a
                href="/"
                className={`${styles.btn} fs-20px white weight-4 pointer`}
              >
                Request KYC
              </a>
              <a
                href="/"
                className={`${styles.btn} fs-20px white weight-4 pointer`}
              >
                Request Audit
              </a>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
