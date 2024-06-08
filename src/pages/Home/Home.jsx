// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Home.module.css";

// React Icons
import { GrDocumentTest } from "react-icons/gr";
import { BsSliders } from "react-icons/bs";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

// carousrel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import required modules
// import { Autoplay } from "swiper/modules";

// images
import Doc from "../../assets/images/Home/Hero/Doc.png";
import objitems from "../../assets/images/Home/Hero/objitems.png";
// import cover2 from "../../assets/images/Home/Hero/2.jpg";
// import cover3 from "../../assets/images/Home/Hero/3.jpg";

// advantages
import advantages from "../../assets/images/Home/advantages/image.png";
// testmonails
import avatar from "../../assets/images/Home/testmonails/ava.jpg";
// statistics
import patients from "../../assets/images/Home/statistics/patients.svg";
import satisfaction from "../../assets/images/Home/statistics/satisfaction.svg";
import tests from "../../assets/images/Home/statistics/tests.svg";
import research from "../../assets/images/Home/statistics/research.svg";

// Components
import Examinations from "../../components/Examinations/Examinations";
import Packages from "../../components/Packages/Packages";
import Awards from "../../components/Awards/Awards";
import BookBanner from "../../components/BookBanner/BookBanner";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div
        className={`${styles.home} ${
          i18n.language === "ar" ? "arFont" : "enFont"
        }`}
      >
        {/* Hero */}
        <div
          className={`${styles.hero} ${
            i18n.language === "ar" ? "arFont" : "enFont"
          }`}
        >
          <div className="customContainer">
            <div className="row">
              <div className={`${styles.images} col-lg-5`}>
                <picture>
                  <img src={Doc} className="w-100" alt="" />
                </picture>
                <picture className={`${styles.items}`}>
                  <img src={objitems} alt="" />
                </picture>
              </div>
              <div
                className={`${styles.content} d-flex flex-column ${
                  i18n.language === "ar"
                    ? "align-items-end"
                    : "align-items-start"
                } py-5 offset-lg-1 col-lg-6`}
              >
                <div
                  className={`${styles.text} mb-5 `}
                  dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
                >
                  <p
                    className={`${styles.special} ${
                      i18n.language === "ar" ? "specialArabicFont" : "enFont"
                    } `}
                  >
                    {t("home.hero.special")}
                  </p>
                  <h1 className="fw-bold">{t("home.hero.main")}</h1>
                  <p>{t("home.hero.description")}</p>
                </div>

                <div className={`${styles.offer}`}>
                  <div className={`${styles.price} px-4 py-4 fw-bold`}>
                    <p className={`${styles.percentage} px-3 `}>
                      50.00% {t("home.hero.off")}
                    </p>
                    <p className={`${styles.after} m-0`}>
                      {t("home.hero.LE")} 500
                    </p>
                    <p className={`${styles.before} m-0`}>
                      {t("home.hero.LE")} 1000
                    </p>
                  </div>
                  <div className={`${styles.testAndParameters}`}>
                    <div className={`${styles.test}`}>
                      <div className={`${styles.body}`}>
                        <div className={`${styles.icon}`}>
                          <GrDocumentTest />
                        </div>
                        <div className={`${styles.data} fw-bold`}>
                          <p className={`${styles.number}`}>10</p>
                          <p className={`${styles.title}`}>
                            {t("home.hero.test")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.parameters} fw-bold`}>
                      <div className={`${styles.body}`}>
                        <div className={`${styles.icon}`}>
                          <BsSliders />
                        </div>
                        <div className={`${styles.data}`}>
                          <p className={`${styles.number}`}>30</p>
                          <p className={`${styles.title}`}>
                            {t("home.hero.parameters")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.wrapper}`}
          dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
        >
          {/* Examinations */}
          <Examinations ExaminationsNumber={6} />
          <div className={`${styles.link} mx-auto px-3 py-2 mb-5`}>
            <span className="me-1">{t("home.examinations.link")}</span>
            <NavLink to="/medicalTest">
              <span
                className={
                  i18n.language === "ar" ? "me-2 fw-bold" : "ms-2 fw-bold"
                }
              >
                {t("home.examinations.click")}
              </span>
              <i
                className={
                  i18n.language === "ar"
                    ? "fa-solid fa-angles-left me-1"
                    : "fa-solid fa-angles-right ms-1"
                }
              ></i>
            </NavLink>
          </div>
          {/* Statistics */}
          <div className=" mb-5">
            <div
              className={`${styles.statistics} customContainer mx-auto fw-bold`}
            >
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className={`${styles.item}`}>
                    <div className={`${styles.info}`}>
                      <div className={`${styles.icon}`}>
                        <picture>
                          <img src={patients} className="w-100" alt="" />
                        </picture>
                      </div>
                      <span className={`${styles.number}`}>
                        {t("home.statistics.patinets.number")}
                      </span>
                    </div>
                    <p className={`${styles.description}`}>
                      {t("home.statistics.patinets.description")}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={`${styles.item}`}>
                    <div className={`${styles.info}`}>
                      <div className={`${styles.icon}`}>
                        <picture>
                          <img src={satisfaction} className="w-100" alt="" />
                        </picture>
                      </div>
                      <span className={`${styles.number}`}>
                        {t("home.statistics.clientSatisifications.number")}
                      </span>
                    </div>
                    <div className={`${styles.description}`}>
                      <p>
                        {t("home.statistics.clientSatisifications.description")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={`${styles.item}`}>
                    <div className={`${styles.info}`}>
                      <div className={`${styles.icon}`}>
                        <picture>
                          <img src={tests} className="w-100" alt="" />
                        </picture>
                      </div>
                      <span className={`${styles.number}`}>
                        {t("home.statistics.kindsOfTests.number")}
                      </span>
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("home.statistics.kindsOfTests.description")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={`${styles.item}`}>
                    <div className={`${styles.info}`}>
                      <div className={`${styles.icon}`}>
                        <picture>
                          <img src={research} className="w-100" alt="" />
                        </picture>
                      </div>
                      <span className={`${styles.number}`}>
                        {t("home.statistics.research.number")}
                      </span>
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("home.statistics.research.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Advantages Banner */}

          <div
            className={`row g-5 customContainer mx-auto ${styles.advantages} fw-bold`}
          >
            <div className="col-lg-6 order-lg-1 order-2">
              <div className={`${styles.image} w-100 mx-auto`}>
                <picture className="col-md-6">
                  <img src={advantages} className="w-100" alt="" />
                </picture>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className={`${styles.text}`}>
                <h3 className={`${styles.title}`}>
                  {t("home.advantages.title")}
                </h3>
                <p className={`${styles.description}`}>
                  {t("home.advantages.description")}
                </p>
                <div className={`${styles.advantagesTopics} `}>
                  <div className={`${styles.topic} p-2`}>
                    <span>{t("home.advantages.topics.topic1")}</span>
                  </div>
                  <div className={`${styles.topic} p-2`}>
                    <span>{t("home.advantages.topics.topic2")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <Packages PackagesNumber={6} />
          <div className={`${styles.link} mx-auto px-3 py-2`}>
            <span className="me-1">{t("home.packages.link")}</span>
            <NavLink to="/offers">
              <span
                className={
                  i18n.language === "ar" ? "me-2 fw-bold" : "ms-2 fw-bold"
                }
              >
                {t("home.packages.click")}
              </span>
              <i
                className={
                  i18n.language === "ar"
                    ? "fa-solid fa-angles-left me-1"
                    : "fa-solid fa-angles-right ms-1"
                }
              ></i>
            </NavLink>
          </div>
        </div>
        {/* Testmonials */}
        <div className={`${styles.testmonials} py-5 fw-bold`} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
          <div className={`${styles.testmonialsBody} customContainer mx-auto`}>
            <h3 className={`${styles.title} mb-4`}>clients testmonials</h3>
            <p className={`${styles.description} mb-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quisquam magni fugit quaerat amet sapiente esse corrupti eveniet
              iure, possimus aliquam vero! Delectus quo repellendus nisi dolores
              saepe, maiores magnam?
            </p>
            <Carousel
              swipeable={true}
              draggable={true}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1750}
              removeArrowOnDeviceType={["desktop", "mobile"]}
              responsive={responsive}
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className={`${styles.opinionWrapper}`}
            >
              <div className={`${styles.opinion}`}>
                <div
                  className={styles.personalInfo}
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                >
                  <div className={`${styles.profileImage}`}>
                    <div className={`${styles.image}`}>
                      <picture>
                        <img src={avatar} alt="" />
                      </picture>
                    </div>
                    <div className={`${styles.qoute}`}>
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                  <div className={`${styles.data}`}>
                    <p className={`${styles.name}`}>yasser hamada abdelmonem</p>
                    <div className={`${styles.rating}`}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p
                  className={`${styles.details} ${
                    i18n.language === "ar" ? "text-end" : "text-start"
                  }`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis, officiis eos id ex maiores deserunt totam
                  exercitationem impedit earum reprehenderit recusandae
                  praesentium dolorem, consectetur saepe! Tenetur, sequi! Quos
                  aspernatur odit ratione nisi dignissimos aut praesentium ipsa.
                  Libero officiis sit repellat unde nostrum.
                </p>
              </div>
              <div className={`${styles.opinion}`}>
                <div
                  className={styles.personalInfo}
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                >
                  <div className={`${styles.profileImage}`}>
                    <div className={`${styles.image}`}>
                      <picture>
                        <img src={avatar} alt="" />
                      </picture>
                    </div>
                    <div className={`${styles.qoute}`}>
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                  <div className={`${styles.data}`}>
                    <p className={`${styles.name}`}>yasser hamada abdelmonem</p>
                    <div className={`${styles.rating}`}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p
                  className={`${styles.details} ${
                    i18n.language === "ar" ? "text-end" : "text-start"
                  }`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis, officiis eos id ex maiores deserunt totam
                  exercitationem impedit earum reprehenderit recusandae
                  praesentium dolorem, consectetur saepe! Tenetur, sequi! Quos
                  aspernatur odit ratione nisi dignissimos aut praesentium ipsa.
                  Libero officiis sit repellat unde nostrum.
                </p>
              </div>
              <div className={`${styles.opinion}`}>
                <div
                  className={styles.personalInfo}
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                >
                  <div className={`${styles.profileImage}`}>
                    <div className={`${styles.image}`}>
                      <picture>
                        <img src={avatar} alt="" />
                      </picture>
                    </div>
                    <div className={`${styles.qoute}`}>
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                  <div className={`${styles.data}`}>
                    <p className={`${styles.name}`}>yasser hamada abdelmonem</p>
                    <div className={`${styles.rating}`}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p
                  className={`${styles.details} ${
                    i18n.language === "ar" ? "text-end" : "text-start"
                  }`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis, officiis eos id ex maiores deserunt totam
                  exercitationem impedit earum reprehenderit recusandae
                  praesentium dolorem, consectetur saepe! Tenetur, sequi! Quos
                  aspernatur odit ratione nisi dignissimos aut praesentium ipsa.
                  Libero officiis sit repellat unde nostrum.
                </p>
              </div>
              <div className={`${styles.opinion}`}>
                <div
                  className={styles.personalInfo}
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                >
                  <div className={`${styles.profileImage}`}>
                    <div className={`${styles.image}`}>
                      <picture>
                        <img src={avatar} alt="" />
                      </picture>
                    </div>
                    <div className={`${styles.qoute}`}>
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                  <div className={`${styles.data}`}>
                    <p className={`${styles.name}`}>yasser hamada abdelmonem</p>
                    <div className={`${styles.rating}`}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <p
                  className={`${styles.details} ${
                    i18n.language === "ar" ? "text-end" : "text-start"
                  }`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corporis, officiis eos id ex maiores deserunt totam
                  exercitationem impedit earum reprehenderit recusandae
                  praesentium dolorem, consectetur saepe! Tenetur, sequi! Quos
                  aspernatur odit ratione nisi dignissimos aut praesentium ipsa.
                  Libero officiis sit repellat unde nostrum.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
        <Awards />
        <BookBanner />
      </div>
    </div>
  );
};

export default Home;
