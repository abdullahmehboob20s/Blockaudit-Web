import React from "react";
import styles from "scss/layout/Security.module.scss";
import { FaGithub } from "react-icons/fa";
import SecurityCard from "components/SecurityCard";
import securityBanner from "assets/images/security-banner.png";

function Security() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <section>
          <aside>
            <img src={securityBanner} className="w-full" alt="" />
          </aside>
          <main>
            <h1 className="fs-44px weight-5 white mb-20px lh-1">
              World's Leading Block <span className="red">Security</span> and{" "}
              <span className="red">Audit</span> Company
            </h1>
            <p className="fs-22px white lh-1_6 mb-40px weight-3">
              <span className="opacity-1">BlockAudit 2022</span>{" "}
              <span className="opacity-0_6">
                is only leading company which performs audit in every technical
                field of any computer language. HTML, PHP, JS, Node, React,
                Native, Solidity, Rust, Web3 etc are main framework for DApps,
                DeFi, GameFi and Metaverse. BlockAudit one of the best Audit
                Company you can get with a team of engineers and analysts,
                specialised technology having a great and wide experience in
                crypto market. We provide the most budget and investor friendly
                Audit Report.
              </span>
            </p>

            <button className={`${styles.github_button} mb-45px pointer`}>
              <p className="fs-34px white weight-6 lh-1">GitHub</p>{" "}
              <FaGithub color="white" size={40} />
            </button>

            <div className={styles.cards}>
              <SecurityCard title="Audits" subtitle="235+" />
              <SecurityCard title="KYC" subtitle="50+" />
              <SecurityCard title="Millions MC" subtitle="200+" />
              <SecurityCard title="Escrow" subtitle="8+" />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default Security;
