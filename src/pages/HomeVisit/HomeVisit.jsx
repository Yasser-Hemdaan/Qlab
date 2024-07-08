import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

// images
import cover1 from "../../assets/images/HomeVisit/Hero/5.jpg";
import image from "../../assets/images/HomeVisit/1.jpg";

// css
import styles from "./HomeVisit.module.css";

// Components
import Branches from "../../components/Branches/Branches";

const HomeVisit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();

  const [serviceName, setServiceName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    setLastName("");
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
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={`${styles.home} ${
        i18n.language === "ar" ? "regularArFont" : "mediumEnFont"
      }`}
    >
      {isSuccessMessage && (
        <div className={styles.successMessage}>
          <p>Your email is sent</p>
          <i className="fa-regular fa-circle-check"></i>
        </div>
      )}
      <div className={`${styles.homeVisit}`}>
        {/* Hero */}
        <div className={`${styles.hero} `}>
          <picture>
            <img src={cover1} className="w-100" alt="" />
          </picture>
        </div>
        <div dir={i18n.language === "ar" ? "rtl" : "ltr"}></div>
      </div>
      <div className={`${styles.book}`}>
        <div className={`${styles.text} text-center mx-auto pt-5`}>
          <h2
            className={`${styles.mainTitle} mx-auto ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            }`}
            style={
              i18n.language === "ar"
                ? { maxWidth: "660px" }
                : { maxWidth: "750px" }
            }
          >
            {t("homeVisit.title")}
          </h2>
        </div>
        <div
          className={`${styles.formWrapper} align-items-center customContainer row mx-auto gy-4 mb-4`}
        >
          <div className={`${styles.content} col-lg-6`}>
            <div className={`${styles.text} mb-5`}>
              <h3 className={`${styles.subtitle} fw-bold`}>
                {t("homeVisit.book.subTitle1")}
              </h3>
              <h2 className={`${styles.mainTitle}`}>
                {t("homeVisit.book.subTitle2")}
              </h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="p-0">
              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="from_service"
                    id="service"
                    className={`form-control px-4 py-3 ${
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
                <div className="col-md-6">
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
                    placeholder={t("home.book.formData.FName")}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="from_Lname"
                    id="lastname"
                    className={`form-control px-4 py-3 ${
                      i18n.language === "ar" ? "text-end" : "text-start"
                    }`}
                    pattern="^([a-zA-Z]{3,}\s?)+$"
                    title="Please enter a valid name (more than 3 letters) (only letters)"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    //required
                    placeholder={t("home.book.formData.LName")}
                  />
                </div>
                <div className="col-md-12">
                  {" "}
                  <input
                    type="tel"
                    name="from_phone"
                    id="phone"
                    className={`form-control px-4 py-3 ${
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
                <div className="col-md-12">
                  {" "}
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    className={`form-control px-4 py-3 ${
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
                <div className="col-md-6">
                  {" "}
                  <input
                    type="date"
                    name="from_date"
                    id="date"
                    className={`form-control px-4 py-3`}
                    title="Please enter a valid date"
                    //required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  {" "}
                  <input
                    type="time"
                    name="from_time"
                    id="time"
                    className={`form-control px-4 py-3`}
                    title="Please enter a valid time"
                    //required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>

                <div className="col-md-6 mt-4">
                  <button
                    type="submit"
                    className="form-control col-md-6 px-5 py-3"
                  >
                    {t("home.book.link")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={`${styles.images} col-lg-6`}>
            <picture>
              <img src={image} className="w-100" alt="" />
            </picture>
          </div>
        </div>
      </div>
      <Branches />
    </div>
  );
};

export default HomeVisit;
