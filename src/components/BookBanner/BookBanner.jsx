// import React from "react";
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// css
import styles from "./BookBanner.module.css";

// images
import bannerImage from "/bookBanner/image.png";

const BookBanner = () => {
  const form = useRef();

  const [serviceName, setServiceName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSuccessMessage(true);

    setServiceName("");
    setFirstName("");
    setPhone("");
    setEmail("");
    setTime("");
    setDate("");

    emailjs
      .sendForm(
        "service_lnxyiud",
        "template_97gt4ip",
        form.current,
        "JR9tVyoPLDJWeTjlV"
      )
      .then(
        () => {},
        () => {}
      );
    setTimeout(function () {
      setIsSuccessMessage(false);
    }, 5000);
  };
  return (
    <div>
      {isSuccessMessage && (
        <div className={styles.successMessage}>
          <p>Your email is sent</p>
          <i className="fa-regular fa-circle-check"></i>
        </div>
      )}
      <div className={`row g-3 customContainer mx-auto ${styles.bookBanner}`}>
        <div className="col-lg-6 order-2">
          <div className={`${styles.image} w-100 mx-auto`}>
            <picture className="col-md-12">
              <img src={bannerImage} className="w-100" alt="" />
            </picture>
          </div>
        </div>
        <div className={`${styles.content} col-lg-6 order-1 m-0`}>
          <div className={`${styles.text}`}>
            <h3
              className={`${styles.title} ${
                i18n.language === "ar" ? "text-end" : "text-start"
              } mb-4`}
            >
              {t("home.book.title")}
            </h3>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`row g-2 ${styles.form} ${
              i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="col-md-4">
              <input
                type="text"
                name="from_service"
                id="service"
                className={`form-control ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
                pattern="^([a-zA-Z]{3,}\s?)+$"
                title="Please enter a valid service (more than 3 letters) (only letters)"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                //required
                placeholder={t("home.book.formData.serviceName")}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="from_Fname"
                id="firstname"
                className={`form-control px-4 py-3 ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
                pattern="^([a-zA-Z]{3,}\s?)+$"
                title="Please enter a valid name (more than 3 letters) (only letters)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                //required
                placeholder={t("home.book.formData.Name")}
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="tel"
                name="from_phone"
                id="phone"
                className={`form-control ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
                pattern="^\[0-9]{11,13}$"
                title="Please enter a valid starts with phone number between (11-13) digits"
                //required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("home.book.formData.phone")}
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="email"
                name="from_email"
                id="email"
                className={`form-control ${
                  i18n.language === "ar" ? "text-end" : "text-start"
                }`}
                pattern="^(\w{3,}[.-])@([a-z]{3,})((\.[a-z]{2,})+)$"
                title="Please enter a valid email address"
                //required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("home.book.formData.email")}
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="date"
                name="from_date"
                id="date"
                className={`form-control`}
                title="Please enter a valid date"
                //required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              {" "}
              <input
                type="time"
                name="from_time"
                id="time"
                className={`form-control`}
                title="Please enter a valid time"
                //required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <button type="submit" className="form-control mx-1 fw-bold">
              {t("home.book.link")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
