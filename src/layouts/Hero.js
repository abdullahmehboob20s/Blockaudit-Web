import IconCard from "components/IconCard";
import styles from "scss/layout/Hero.module.scss";
import useMediaQuery from "hooks/useMediaQuery";
import { IKImage } from "imagekitio-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

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
            <h2 className="fs-50px white weight-3 lh-1">
              Audit <span className="red">Service</span> For
            </h2>

            <div className={`${styles.swiper} mb-15px`}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                centeredSlides={isBellow1024px ? true : false}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  waitForTransition: true,
                }}
                className={`heroSwiper`}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <h1 className="fs-150px white weight-8 lh-1">DeFi.</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="fs-150px white weight-8 lh-1">Dapps.</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="fs-150px white weight-8 lh-1">Token.</h1>
                </SwiperSlide>
              </Swiper>
            </div>

            <p
              className="fs-24px white weight-2 lh-1_4 opacity-0_6 mb-30px"
              style={{ maxWidth: "22em" }}
            >
              Audit, KYC documents, Escrow And Development, All at one place
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
