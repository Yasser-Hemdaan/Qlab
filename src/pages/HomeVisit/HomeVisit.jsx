import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// images
import cover1 from "../../assets/images/HomeVisit/Hero/5.jpg";

// css
import styles from "./HomeVisit.module.css";

// Components
import Branches from "../../components/Branches/Branches";

const HomeVisit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { i18n } = useTranslation();
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
        <div className={`${styles.text} text-center customContainer mx-auto pt-5`}>
          <h2 className={`${styles.mainTitle} mb-5 mx-auto`}>
            دلوقتي تقدر تحجز زيارتك المنزلية مع معامل كيولاب
          </h2>
        </div>
        <div className={`${styles.formWrapper} customContainer row mx-auto p-4 mb-4`}>
          <div className={`${styles.content} col-lg-6`}>
            <div className={`${styles.text} mb-5`}>
              <h3 className={`${styles.subtitle}`}>book an</h3>
              <h2 className={`${styles.mainTitle}`}>appointment</h2>
            </div>
            <form action="">
              <div className="row g-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="service"
                    id="service"
                    className="form-control"
                    required
                    placeholder="Service Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
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
                <div className="col-md-12">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                  Book Now
                </button>
              </div>
            </form>
          </div>
          <div className={`${styles.images} col-lg-6`}></div>
        </div>
      </div>
      <Branches />
    </div>
  );
};

export default HomeVisit;
