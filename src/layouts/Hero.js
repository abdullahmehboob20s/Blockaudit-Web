import IconCard from "components/IconCard";
import styles from "scss/layout/Hero.module.scss";
import { IKImage } from "imagekitio-react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  return (
    <div className={styles.heroWrapper}>
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path="concentric-circle.png"
        className={styles.concentricCircle}
        alt=""
      />

      <div className="container-wrapper">
        <div className={styles.hero}>
          <main>
            <h2 className={`fs-50px white weight-3 lh-1 ${styles.preTitle}`}>
              Audit <span className="red">Service</span> For
            </h2>

            <Splide
              options={{
                arrows: false,
                pagination: false,
                autoWidth: true,
                gap: 30,
                autoplay: true,
                interval: 3000,
                type: "loop",
                focus: isBellow1024px ? "center" : "center",
                // padding: { left: isBellow1024px ? 0 : "10%" },
              }}
              className={`${styles.splideSlider} splideSlider mb-15px`}
            >
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  DApp<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  DeFi<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  GameFi<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  P2E<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  Contract<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  Token<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  Coin<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  Blockchain<span className="red">.</span>
                </h1>
              </SplideSlide>
            </Splide>

            <p
              className="fs-24px white weight-2 lh-1_4 mb-30px"
              style={{ maxWidth: "22em" }}
            >
              <span className="opacity-0_6">
                Audit, KYC documents, Escrow And Development,
              </span>{" "}
              <span className="red opacity-1">All at one place.</span>
            </p>

            <div className={styles.icons}>
              <IconCard icon="icons/audit.svg" title="Audit" />
              <IconCard icon="icons/escrow.svg" title="KYC" />
              <IconCard icon="icons/kyc.svg" title="Escrow" />
            </div>
          </main>

          <aside>
            <IKImage
              lqip={{ active: true }}
              loading="lazy"
              path="code-editor-img.svg"
              className="w-full"
              alt=""
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Hero;
