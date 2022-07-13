import BusinessCard from "components/BusinessCard";
import React from "react";
import styles from "scss/layout/Business.module.scss";
import useMediaQuery from "hooks/useMediaQuery";

function Business() {
  const isBellow500px = useMediaQuery("(max-width : 31.25em)");

  return (
    <div className={styles.wrapper}>
      <header className={isBellow500px ? "mb-20px" : "mb-120px"}>
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
            img={"icons/automated.svg"}
            title="Automated Testing"
            subtitle="We do a variety of interactions with your smart contract manually on test net blockchain and also with test tools for figuring out the vulnerabilities."
          />
          <BusinessCard
            img={"icons/solidity.svg"}
            title="Solidity Assessment"
            subtitle="We do simulates and examine line by line by our experts to identify the vulnerabilities or other issues."
          />
          <BusinessCard
            img={"icons/recommendation.svg"}
            title="Recommendation"
            subtitle="After finding the Security issues and errors (if any) we do suggest to improve the codes for high level of security."
          />
          <BusinessCard
            img={"icons/reporting.svg"}
            title="Reporting"
            subtitle="After the issues is resolved the transparent reporting of the smart contract is done with highlighting the main functions."
          />
          <BusinessCard
            img={"icons/delivery.svg"}
            title="Delivery"
            subtitle="Final publication of the report is done and delivered with the security scores depicted in graphs and it also get posted in our community."
          />
          <BusinessCard
            img={"icons/secure.svg"}
            title="Secure and Safe"
            subtitle="We deeply examine the codes line by line with manual and automated test is carried out on test net blockchain before publication."
          />
          <BusinessCard
            img={"icons/high.svg"}
            title="High Efficiency"
            subtitle="With our experienced engineers the Security reports and recommendations are done quicker for saving the clients time."
          />
          <BusinessCard
            img={"icons/easy.svg"}
            title="Easy To Understand"
            subtitle="Our reports are very easy to understand for all investors across the world because of decent stylish and its functions are highlighted in different colours."
          />
          <BusinessCard
            img={"icons/affordable.svg"}
            title="Affordable"
            subtitle="We deeply examine the codes line by line with manual and automated test is carried out on test net blockchain before publication."
          />
        </main>
      </div>
    </div>
  );
}

export default Business;
