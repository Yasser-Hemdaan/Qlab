// import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// images
// import logo from "../../assets/images/Components/Footer/White-Logo.png";
import logo from "../../assets/images/Components/Header/Logo.png";

// css
import styles from "./Footer.module.css";

// Components
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <ScrollToTop />
      <div
        className={`${styles.footer} ${
          i18n.language === "ar" ? "mediumArFont" : "mediumEnFont"
        }`}
      >
        <div className=" mx-auto" data-aos-anchor-placement="top-center">
          <div className={`${styles.footerBody} customContainer `}>
            <div className={`${styles.main} order-1 mt-0`}>
              <div
                className={`${styles.logo}`}
                data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              >
                <picture>
                  <img src={logo} className="w-100 mb-4" alt="" />
                </picture>
              </div>
              <div
                className={`${styles.description} mb-4`}
                data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                data-aos-delay="500"
              >
                <p>{t("footer.main.description")}</p>
              </div>
              <ul className={`${styles.sci}`}>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="750"
                >
                  <a href="https://www.facebook.com/Q.Lab.Eg" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1000"
                >
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li> */}
                {/* <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1250"
                >
                  <a href="https://www.instagram.com/q.lab.eg/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li> */}
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1500"
                >
                  <a href="">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.quickWrapper} order-2 mt-0`}>
              <h4
                className={`${styles.title} mb-4 ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                }`}
                data-aos="fade-down"
                data-aos-delay="250"
              >
                {t("footer.quickLinks.title")}
              </h4>
              <ul className={styles.quickLinks}>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="250"
                >
                  <NavLink to={"/"}>{t("header.home")}</NavLink>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="500"
                >
                  <NavLink to={"/about"}>{t("header.about")}</NavLink>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="750"
                >
                  <NavLink to={"/medicalTest"}>
                    {t("header.medicalTests")}
                  </NavLink>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1000"
                >
                  <NavLink to={"/offers"}>{t("header.offers")}</NavLink>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1250"
                >
                  <NavLink to={"/homeVisit"}>{t("header.homeVisit")}</NavLink>
                </li>
              </ul>
            </div>
            <div className={`${styles.contactWrapper} order-3 mt-0`}>
              <h4
                className={`${styles.title} mb-4 ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                }`}
                data-aos="fade-down"
                data-aos-delay="250"
              >
                {t("footer.contactUS.title")}
              </h4>
              <ul className={`${styles.contacts}`}>
                <li
                  className={`${styles.data}`}
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="250"
                >
                  <a href="">
                    <i className="fa-solid fa-phone"></i>
                    <span>+20 11 222 40 120</span>
                  </a>
                </li>
                <li
                  className={`${styles.data}`}
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="500"
                >
                  <a href="https://wa.me/201122240120" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>+20 11 222 40 120</span>
                  </a>
                </li>
                <li
                  className={`${styles.data}`}
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="750"
                >
                  <a href="">
                    <i className="fa-regular fa-envelope"></i>
                    <span>info@qlab-eg.com</span>
                  </a>
                </li>
                {/* <li
                  className={`${styles.data}`}
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="750"
                >
                  <a href="">
                    <i className="fa-regular fa-envelope"></i>
                    <span>info@qlab-eg.com</span>
                  </a>
                </li>
                <li
                  className={`${styles.data}`}
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="750"
                >
                  <a href="">
                    <i className="fa-regular fa-envelope"></i>
                    <span>info@qlab-eg.com</span>
                  </a>
                </li> */}
                <li
                  className={`${styles.data}`}
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1000"
                >
                  <a href="">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{t("footer.contactUS.location")}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.openingHoursWrapper} order-4 mt-0`}>
              <h4
                className={`${styles.title} mb-4 ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                }`}
                data-aos="fade-down"
                data-aos-delay="250"
              >
                {t("footer.openingHours.title")}
              </h4>
              <ul className={`${styles.openingHours} w-100`}>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1500"
                >
                  <span>{t("footer.openingHours.saturday")}</span>
                  <span>9am - 11pm</span>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1750"
                >
                  <span>{t("footer.openingHours.sunday")}</span>
                  <span>9am - 11pm</span>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="250"
                >
                  <span>{t("footer.openingHours.monday")}</span>
                  <span>9am - 11pm</span>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="500"
                >
                  <span>{t("footer.openingHours.tuesday")}</span>
                  <span>9am - 11pm</span>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="750"
                >
                  <span>{t("footer.openingHours.wednesday")}</span>
                  <span>9am - 11pm</span>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1000"
                >
                  <span>{t("footer.openingHours.thursday")}</span>
                  <span>9am - 11pm</span>
                </li>
                <li
                  data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
                  data-aos-delay="1250"
                >
                  <span>{t("footer.openingHours.friday")}</span>
                  <span>10am - 11pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
