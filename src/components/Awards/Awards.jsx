// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Awards.module.css";

// images
import client1 from "/awards/clients/Logo-01.jpg";
import client2 from "/awards/clients/Logo-02.jpg";
import client3 from "/awards/clients/Logo-03.jpg";
import client4 from "/awards/clients/Logo-04.jpg";
import client5 from "/awards/clients/Logo-05.jpg";
import client6 from "/awards/clients/Logo-06.jpg";

const Awards = () => {
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
              <h3 className={`${styles.subTitle} mb-3`}>
                {t("home.awards.subTitle")}
              </h3>
              <h2 className={`${styles.mainTitle} fw-bold mb-4`}>
                {t("home.awards.mainTitle")}
              </h2>
              <div className={`${styles.overWorld} fw-bold`}>
                <div className={`${styles.number}`}>
                  <span>{t("home.awards.overWorld.number")}</span>
                  <span>+</span>
                </div>
                <h4 className={`${styles.title}`}>
                  <span>{t("home.awards.overWorld.title")}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={`${styles.clients}`}>
              <p className={`${styles.description} mb-4`}>
                <span>{t("home.awards.description")}</span>
              </p>
              <div className={`${styles.clientsGroup} row g-3 pb-3`}>
                <div className="col-6 col-sm-3 col-md-4">
                  <picture>
                    <img src={client1} alt="" />
                  </picture>
                </div>
                <div className="col-6 col-sm-3 col-md-4">
                  <picture>
                    <img src={client2} alt="" />
                  </picture>
                </div>
                <div className="col-6 col-sm-3 col-md-4">
                  <picture>
                    <img src={client3} alt="" />
                  </picture>
                </div>
                <div className="col-6 col-sm-3 col-md-4">
                  <picture>
                    <img src={client4} alt="" />
                  </picture>
                </div>
                <div className="col-6 col-sm-3 col-md-4">
                  <picture>
                    <img src={client5} alt="" />
                  </picture>
                </div>
                <div className="col-6 col-sm-3 col-md-4">
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
