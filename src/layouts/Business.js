import BusinessCard from "components/BusinessCard";
import React from "react";
import styles from "scss/layout/Business.module.scss";
import automated from "assets/images/icons/automated.svg";
import solidity from "assets/images/icons/solidity.svg";
import recommendation from "assets/images/icons/recommendation.svg";
import reporting from "assets/images/icons/reporting.svg";
import delivery from "assets/images/icons/delivery.svg";
import secure from "assets/images/icons/secure.svg";
import high from "assets/images/icons/high.svg";
import easy from "assets/images/icons/easy.svg";
import affordable from "assets/images/icons/affordable.svg";

function Business() {
  return (
    <div className={styles.wrapper}>
      <header className="mb-120px">
        <div className="container-wrapper">
          <h1 className="text-center fs-84px white weight-6 lh-1">
            Your Business is our Domain
          </h1>
        </div>
      </header>

      <div className="container-wrapper">
        <main>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <BusinessCard
            img={automated}
            title="Automated Testing"
            subtitle="We do a variety of interactions with your smart contract manually on test net blockchain and also with test tools for figuring out the vulnerabilities."
          />
          <BusinessCard
            img={solidity}
            title="Solidity Assessment"
            subtitle="We do simulates and examine line by line by our experts to identify the vulnerabilities or other issues."
          />
          <BusinessCard
            img={recommendation}
            title="Recommendation"
            subtitle="After finding the Security issues and errors (if any) we do suggest to improve the codes for high level of security."
          />
          <BusinessCard
            img={reporting}
            title="Reporting"
            subtitle="After the issues is resolved the transparent reporting of the smart contract is done with highlighting the main functions."
          />
          <BusinessCard
            img={delivery}
            title="Delivery"
            subtitle="Final publication of the report is done and delivered with the security scores depicted in graphs and it also get posted in our community."
          />
          <BusinessCard
            img={secure}
            title="Secure and Safe"
            subtitle="We deeply examine the codes line by line with manual and automated test is carried out on test net blockchain before publication."
          />
          <BusinessCard
            img={high}
            title="High Efficiency"
            subtitle="With our experienced engineers the Security reports and recommendations are done quicker for saving the clients time."
          />
          <BusinessCard
            img={easy}
            title="Easy To Understand"
            subtitle="Our reports are very easy to understand for all investors across the world because of decent stylish and its functions are highlighted in different colours."
          />
          <BusinessCard
            img={affordable}
            title="Affordable"
            subtitle="We deeply examine the codes line by line with manual and automated test is carried out on test net blockchain before publication."
          />
        </main>
      </div>
    </div>
  );
}

export default Business;
