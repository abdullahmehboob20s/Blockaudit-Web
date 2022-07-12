import React, { useEffect, useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import logo from "assets/images/logo.png";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <img src={logo} className={styles.logo} alt="" />

          <div
            className={`${styles.right} ${isOpen ? styles.show : ""}`}
            ref={sidebarRef}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <IoClose color="white" />
            </button>

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

          <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
            <FiMenu color="white" />
          </button>
        </div>
      </div>

      <div className={`black-screen ${isOpen ? "show" : ""}`}></div>
    </div>
  );
}

export default Navbar;
