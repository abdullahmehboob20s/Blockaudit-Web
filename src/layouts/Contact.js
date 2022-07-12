import React from "react";
import styles from "scss/layout/Contact.module.scss";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import contactBuildings from "assets/images/contact-buildings.png";

function Contact() {
  return (
    <div className={`${styles.wrapper} py-200px`}>
      <img src={contactBuildings} className={styles.contactBuildings} alt="" />

      <div className="container-wrapper">
        <section>
          <div className={styles.formWrapper}>
            <header>
              <h2 className="text-center fs-34px white weight-3 mb-15px lh-1">
                We would love to hear from you,
              </h2>
              <h1 className="fs-70px weight-7 text-center white lh-1">
                Let’s <span className="red">Talk!</span>
              </h1>
            </header>
            <form>
              <input
                type="text"
                className="fs-26px white weight-3"
                placeholder="Name"
              />
              <input
                type="email"
                className="fs-26px white weight-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="fs-26px white weight-3"
                placeholder="Subject"
              />
              <textarea
                className="fs-26px white weight-3"
                placeholder="Message"
              ></textarea>

              <button type="submit" className="fs-34px white weight-5 pointer">
                Send
              </button>
            </form>
          </div>
          <aside>
            <div className="mb-40px">
              <h2 className="fs-44px white weight-5 mb-5px lh-1">Email : </h2>
              <p className="fs-26px white weight-2">
                support@blockaudit.report
              </p>
            </div>
            <div className="mb-40px">
              <h2 className="fs-44px white weight-5 mb-15px lh-1">
                Follow Us :
              </h2>
              <div className={styles.socialIcons}>
                <a href="#">
                  <FaTwitter size={32} color="white" />
                </a>
                <a href="#">
                  <FaTelegram size={32} color="white" />
                </a>
                <a href="#">
                  <FaLinkedin size={32} color="white" />
                </a>
                <a href="#">
                  <FaGithub size={32} color="white" />
                </a>
              </div>
            </div>
            <div className="mb-40px">
              <h2 className="fs-44px white weight-5 mb-10px lh-1">
                Address :{" "}
              </h2>
              <p
                className="fs-26px white weight-2 lh-1_2"
                style={{ maxWidth: "20em" }}
              >
                Office 1410, 14th Floor, ETA Star Building, Business Bay, Dubai,
                UAE, PO Box No. 365921
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default Contact;