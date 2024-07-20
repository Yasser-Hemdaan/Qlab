// import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import styles from "./Awards.module.css";

// images
import client1 from "/awards/clients/Logo-01.jpg";
import client2 from "/awards/clients/Logo-02.jpg";
import client3 from "/awards/clients/Logo-03.jpg";
import client4 from "/awards/clients/Logo-04.jpg";
import client5 from "/awards/clients/Logo-05.jpg";
import client6 from "/awards/clients/Logo-06.jpg";

// files
import certificate from "../../assets/Files/certificate.pdf";

const Awards = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted or re-rendered
    AOS.init({
      easing: "linear",
      delay: 300,
      duration: 600,
    });
  });

  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${styles.awards} my-5`}
      dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className={`${styles.awardsBody} customContainer mx-auto`}>
        <div className="row g-5">
          <div className="col-md-5">
            <div className={`${styles.content} row`}>
              <h3
                className={`${styles.subTitle} ${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                } mb-3`}
                data-aos="fade-up"
              >
                {t("home.awards.subTitle")}
              </h3>
              <h2
                className={`${styles.mainTitle} ${
                  i18n.language === "ar" ? "boldArFont" : "exBoldEnFont"
                } mb-4`}
                style={
                  i18n.language === "ar"
                    ? { maxWidth: "360px" }
                    : { maxWidth: "660px" }
                }
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {t("home.awards.mainTitle")}
              </h2>
              <div
                className={`${styles.overWorld} blackEnFont`}
                data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              >
                <div className={`${styles.number}`}>
                  <span>{t("home.awards.overWorld.number")}</span>
                  <span>+</span>
                </div>
                <h4 className={`${styles.title}`}>
                  <span>{t("home.awards.overWorld.title")}</span>
                </h4>
              </div>
              {/* want to add link to download pdf here */}
              <a
                href={certificate}
                download="certificate"
                target="_blank"
                rel="noreferrer"
                title="download Q-Lab certificate"
                className={`${
                  styles.certificateLink
                } d-flex align-items-baseline gap-2 p-3 mt-4 ${
                  i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
                }`}
                data-aos="fade-up"
              >
                <i className="fa-regular fa-file-lines"></i>
                {t("home.awards.certificateLink")}
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className={`${styles.clients}`}>
              <p
                className={`${styles.description} fw-bold mb-4`}
                data-aos="fade-down"
              >
                <span>{t("home.awards.description")}</span>
              </p>
              <div className={`${styles.clientsGroup} row g-3 pb-3`}>
                <div
                  className="col-6 col-sm-3 col-md-4"
                  data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
                >
                  <picture>
                    <img src={client1} alt="" />
                  </picture>
                </div>
                <div
                  className="col-6 col-sm-3 col-md-4"
                  data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
                  data-aos-delay="500"
                >
                  <picture>
                    <img src={client2} alt="" />
                  </picture>
                </div>
                <div
                  className="col-6 col-sm-3 col-md-4"
                  data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
                  data-aos-delay="750"
                >
                  <picture>
                    <img src={client3} alt="" />
                  </picture>
                </div>
                <div
                  className="col-6 col-sm-3 col-md-4"
                  data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
                  data-aos-delay="1000"
                >
                  <picture>
                    <img src={client4} alt="" />
                  </picture>
                </div>
                <div
                  className="col-6 col-sm-3 col-md-4"
                  data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
                  data-aos-delay="1250"
                >
                  <picture>
                    <img src={client5} alt="" />
                  </picture>
                </div>
                <div
                  className="col-6 col-sm-3 col-md-4"
                  data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
                  data-aos-delay="1500"
                >
                  <picture>
                    <img src={client6} alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
