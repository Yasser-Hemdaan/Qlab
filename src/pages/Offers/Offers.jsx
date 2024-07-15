// import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Offers.module.css";

// images
import cover1 from "../../assets/images/Offers/Hero/hero.jpg";

// Components
import Awards from "../../components/Awards/Awards";
import BookBanner from "../../components/BookBanner/BookBanner";
import Packages from "../../components/Packages/Packages";

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { i18n } = useTranslation();
  return (
    <div className={`${styles.offers}`}>
      {/* Hero */}
      <div className={`${styles.hero}`}>
        <picture>
          <img src={cover1} className="w-100" alt="" />
        </picture>
      </div>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        {/* Packages */}
        <Packages PackagesNumber={17} />
        <Awards />
        <BookBanner />
      </div>
    </div>
  );
};

export default Offers;
