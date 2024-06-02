// import React from "react";
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// css
import styles from "./BookBanner.module.css";

// images
import bannerImage from "/bookBanner/image.png";

const BookBanner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className={`row g-3 customContainer mx-auto px-4 ${styles.bookBanner}`}
      >
        <div className="col-lg-5 order-lg-1 order-2">
          <div className={`${styles.image} w-100 mx-auto`}>
            <picture className="col-md-6">
              <img src={bannerImage} className="w-100" alt="" />
            </picture>
          </div>
        </div>
        <div className="col-lg-7 order-lg-2 order-1">
          <div className={`${styles.text}`}>
            <h3 className={`${styles.title} mb-4`}>{t("home.book.title")}</h3>
            {/* <NavLink to="">{t("home.book.link")}</NavLink> */}
          </div>
          <form action="" className={`row g-2 ${styles.form}`}>
            <div className="col-md-4">
              <input
                type="text"
                name="service"
                id="service"
                className="form-control"
                required
                placeholder="Service Name"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
                placeholder="Name"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                required
                placeholder="phone"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
                placeholder="email"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                required
                placeholder="mm-dd-yyyy"
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="time"
                name="time"
                id="time"
                className="form-control"
                required
                placeholder="time"
              />
            </div>
            <button type="submit" className="form-control w-25 mx-1">
              {t("home.book.link")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
