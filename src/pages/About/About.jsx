// import React from 'react'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// images
import cover1 from "../../assets/images/About/Hero/hero.jpg";
import image from "../../assets/images/About/1.jpg";
import Signature from "../../assets/images/About/Signature.png";

// css
import styles from "./About.module.css";

// Components
import Branches from "./../../components/Branches/Branches";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={`${styles.home} ${
        i18n.language === "ar" ? "regularArFont" : "mediumEnFont"
      }`}
    >
      <div className={`${styles.about}`}>
        {/* Hero */}
        <div className={`${styles.hero} mb-5`}>
          <picture>
            <img src={cover1} className="w-100" alt="" />
          </picture>
        </div>
        {/* About */}
        <div
          className={`${styles.mainAbout} customContainer row mx-auto py-5 my-5`}
        >
          <div className={`${styles.text} mt-3 col-md-6`}>
            <h3 className={`${styles.subTitle} pb-2 mb-4 fw-bold`}>
              {t("about.subTitle")}
            </h3>
            <h2 className={`${styles.mainTitle} fw-bold mb-4`}>
              {t("about.mainTitle")}
            </h2>
            <p className={`${styles.description}`}>{t("about.description")}</p>
            <div className={`${styles.signature}`}>
              <picture>
                <img src={Signature} alt="" />
              </picture>
            </div>
          </div>
          <div className={`${styles.images} col-md-6`}>
            <picture>
              <img src={image} className="w-100" alt="" />
            </picture>
          </div>
        </div>
        {/* Values */}
        <div className={`${styles.value} customContainer row mx-auto p-5 my-5`}>
          <div className={`${styles.text} col-md-6`}>
            <h3 className={`${styles.subTitle} pb-2 mb-4`}>
              {t("about.values.title")}
            </h3>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value1.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value1.description")}
              </p>
            </div>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value2.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value2.description")}
              </p>
            </div>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value3.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value3.description")}
              </p>
            </div>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value4.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value4.description")}
              </p>
            </div>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value5.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value5.description")}
              </p>
            </div>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value6.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value6.description")}
              </p>
            </div>
            <div className={`${styles.row}`}>
              <h4 className={`${styles.title}`}>
                {t("about.values.value7.title")}
              </h4>
              <p className={`${styles.description}`}>
                {t("about.values.value7.description")}
              </p>
            </div>
          </div>
          {/* <div className={`${styles.images} col-md-6`}>
            <picture>
              <img src={image2} className="w-100" alt="" />
            </picture>
          </div> */}
        </div>
      </div>
      <Branches />
    </div>
  );
};

export default About;
