import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// images
import cover1 from "../../assets/images/HomeVisit/Hero/5.jpg";
import image from "../../../public/testVisit.jpg";

// css
import styles from "./HomeVisit.module.css";

// Components
import Branches from "../../components/Branches/Branches";

const HomeVisit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
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
            className={`${styles.mainTitle} mb-5 mx-auto ${
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
          className={`${styles.formWrapper} align-items-center customContainer row mx-auto mb-4`}
        >
          <div className={`${styles.content} col-lg-6`}>
            <div className={`${styles.text} mb-5`}>
              <h3 className={`${styles.subtitle}`}>
                {t("homeVisit.book.subTitle1")}
              </h3>
              <h2 className={`${styles.mainTitle}`}>
                {t("homeVisit.book.subTitle2")}
              </h2>
            </div>
            <form action="" className="p-0">
              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="service"
                    id="service"
                    className={`form-control px-4 py-3 ${
                      i18n.language === "ar" ? "text-end" : "text-start"
                    }`}
                    required
                    placeholder={t("home.book.formData.serviceName")}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`form-control px-4 py-3 ${
                      i18n.language === "ar" ? "text-end" : "text-start"
                    }`}
                    required
                    placeholder={t("home.book.formData.Name")}
                  />
                </div>
                <div className="col-md-6">
                  {" "}
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className={`form-control px-4 py-3 ${
                      i18n.language === "ar" ? "text-end" : "text-start"
                    }`}
                    required
                    placeholder={t("home.book.formData.phone")}
                  />
                </div>
                <div className="col-md-12">
                  {" "}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`form-control px-4 py-3 ${
                      i18n.language === "ar" ? "text-end" : "text-start"
                    }`}
                    required
                    placeholder={t("home.book.formData.email")}
                  />
                </div>
                <div className="col-md-6">
                  {" "}
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className={`form-control px-4 py-3`}
                    required
                  />
                </div>
                <div className="col-md-6">
                  {" "}
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className={`form-control px-4 py-3`}
                    required
                  />
                </div>

                <div className="col-md-6 mt-4">
                  <button type="submit" className="form-control col-md-6 px-5 py-3">
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
