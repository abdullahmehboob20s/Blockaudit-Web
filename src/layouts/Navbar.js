import React, { useEffect, useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IKImage } from "imagekitio-react";
import DropdownItem from "components/DropdownItem";
import { BiChevronDown } from "react-icons/bi";
import useMediaQuery from "hooks/useMediaQuery";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  const sidebarRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });
  const dropdownRef = OutsideClickDetector(() => {
    setIsHover(false);
  });

  const dropdownToggler = () => {
    setIsHover((val) => !val);
  };

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
          <IKImage
            lqip={{ active: true }}
            loading="lazy"
            path={"logo.png"}
            className={styles.logo}
            alt=""
          />

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
              <div
                className={`${styles.navLink} ${styles.isDropdown}`}
                ref={dropdownRef}
              >
                <button
                  className={`${styles.drodpownTitle} fs-20px white weight-3 pointer`}
                  onMouseEnter={() =>
                    isBellow1024px ? null : setIsHover(true)
                  }
                  onMouseLeave={() =>
                    isBellow1024px ? null : setIsHover(false)
                  }
                  onClick={() => dropdownToggler()}
                >
                  Services <BiChevronDown color="white" />
                </button>
                <div
                  className={`${styles.dropdown} ${
                    isHover ? styles.active : ""
                  }`}
                  onMouseEnter={() =>
                    isBellow1024px ? null : setIsHover(true)
                  }
                  onMouseLeave={() =>
                    isBellow1024px ? null : setIsHover(false)
                  }
                >
                  <DropdownItem title="Audit" icon="icons/automated.svg" />
                  <DropdownItem
                    title="Incognito Audit"
                    icon="icons/solidity.svg"
                  />
                  <DropdownItem title="KYC" icon="icons/recommendation.svg" />
                  <DropdownItem title="Escrow" icon="icons/reporting.svg" />
                </div>
              </div>
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
