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
      <div className={`${styles.footer} pb-5`}>
        <ScrollToTop />
        <div className=" mx-auto">
          <div
            className={`${styles.footerBody} customContainer mx-auto row gy-5`}
          >
            <div className={`${styles.main} col-xl-4 col-md-12 order-1`}>
              <div className={`${styles.logo}`}>
                <picture>
                  <img src={logo} className="w-100 mb-4" alt="" />
                </picture>
              </div>
              <div className={`${styles.description} mb-3`}>
                <p>
                  patholab laboratory is a very well equipped laboratory of this
                  country and thy promised to provide best services, patholab
                  laboratory is a very well equipped laboratory of this country
                  and thy promised to provide best services, patholab laboratory
                  is a very well equipped laboratory of this country and thy
                  promised to provide best services
                </p>
              </div>
              <ul className={`${styles.sci}`}>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-12 order-2">
              <h4 className={`${styles.title} mb-4`}>
                {t("footer.quickLinks.title")}
              </h4>
              <ul className={styles.quickLinks}>
                <li>
                  <NavLink to={"/"}>{t("header.home")}</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>{t("header.about")}</NavLink>
                </li>
                <li>
                  <NavLink to={"/medicalTest"}>
                    {t("header.medicalTests")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/offers"}>{t("header.offers")}</NavLink>
                </li>
                <li>
                  <NavLink to={"/homeVisit"}>{t("header.homeVisit")}</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-12 order-3">
              <h4 className={`${styles.title} mb-4`}>
                {t("footer.contactUS.title")}
              </h4>
              <ul className={`${styles.contacts}`}>
                <li className={`${styles.data}`}>
                  <a href="">
                    <i className="fa-solid fa-phone"></i>
                    <span>+20 11 222 40 120</span>
                  </a>
                </li>
                <li className={`${styles.data}`}>
                  <a href="">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>info@qlab-eg.com</span>
                  </a>
                </li>
                <li className={`${styles.data}`}>
                  <a href="">
                    <i className="fa-regular fa-envelope"></i>
                    <span>info@qlab-eg.com</span>
                  </a>
                </li>
                <li className={`${styles.data}`}>
                  <a href="">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{t("footer.contactUS.location")}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-5 col-sm-12 order-4">
              <h4 className={`${styles.title} mb-4`}>
                {t("footer.openingHours.title")}
              </h4>
              <ul className={`${styles.openingHours} w-100`}>
                <li>
                  <span>{t("footer.openingHours.monday")}</span>
                  <span>9am - 7pm</span>
                </li>
                <li>
                  <span>{t("footer.openingHours.tuesday")}</span>
                  <span>9am - 7pm</span>
                </li>
                <li>
                  <span>{t("footer.openingHours.wednesday")}</span>
                  <span>9am - 7pm</span>
                </li>
                <li>
                  <span>{t("footer.openingHours.thursday")}</span>
                  <span>9am - 7pm</span>
                </li>
                <li>
                  <span>{t("footer.openingHours.friday")}</span>
                  <span>9am - 7pm</span>
                </li>
                <li>
                  <span>{t("footer.openingHours.saturday")}</span>
                  <span>9am - 7pm</span>
                </li>
                <li>
                  <span>{t("footer.openingHours.sunday")}</span>
                  <span>{t("footer.openingHours.closed")}</span>
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
