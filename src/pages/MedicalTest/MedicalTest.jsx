// import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./MedicalTest.module.css";

// images
import cover1 from "../../assets/images/MedicalTests/Hero/2.jpg";

// Components
import Awards from "../../components/Awards/Awards";
import BookBanner from "../../components/BookBanner/BookBanner";
import Examinations from "../../components/Examinations/Examinations";

const MedicalTest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { i18n } = useTranslation();
  return (
    <div className={`${styles.medicalTest}`}>
      {/* Hero */}
      <div className={`${styles.hero}`}>
        <picture>
          <img src={cover1} className="w-100" alt="" />
        </picture>
      </div>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        {/* Examinations */}
        <Examinations ExaminationsNumber={18} />
        <Awards />
        <BookBanner />
      </div>
    </div>
  );
};

export default MedicalTest;
