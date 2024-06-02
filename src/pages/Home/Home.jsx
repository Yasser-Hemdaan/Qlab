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
// import cover1 from "../../assets/images/Home/Hero/1.jpg";
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
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className={`${styles.home}`}>
        {/* Hero */}
        <div
          className={`${styles.hero}`}
          style={
            i18n.language === "ar"
              ? {
                  backgroundImage:
                    "linear-gradient(to left, var(--main-color), #ac62ad)",
                }
              : {
                  backgroundImage:
                    "linear-gradient(to right, var(--main-color), #ac62ad)",
                }
          }
        >
          <div className="container-lg">
            <div className="row">
              <div className={`${styles.content} py-5 col-lg-7`}>
                <div className={`${styles.text} mb-5`}>
                  <p>علشان انت واحد من العيلة</p>
                  <h1>
                    احصل على العضوية الآن واستمتع بخصم 50% على جميع التحاليل
                  </h1>
                  <p>
                    تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحليل
                    الطبية, ونهدف دائما إلى تقديم خدمة طبية عالية المستوى وفائقة
                    الجودة على ارض مصر
                  </p>
                </div>

                <div className={`${styles.offer}`}>
                  <div className={`${styles.price} px-4 py-4`}>
                    <p className={`${styles.percentage} px-3`}>50.00% off</p>
                    <p className={`${styles.after} m-0`}>L.E 500</p>
                    <p className={`${styles.before} m-0`}>L.E 1000</p>
                  </div>
                  <div className={`${styles.testAndParameters}`}>
                    <div className={`${styles.test}`}>
                      <div className={`${styles.body}`}>
                        <div className={`${styles.icon}`}>
                          <GrDocumentTest />
                        </div>
                        <div className={`${styles.data}`}>
                          <p className={`${styles.number}`}>10</p>
                          <p className={`${styles.title}`}>tests</p>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.parameters}`}>
                      <div className={`${styles.body}`}>
                        <div className={`${styles.icon}`}>
                          <BsSliders />
                        </div>
                        <div className={`${styles.data}`}>
                          <p className={`${styles.number}`}>30</p>
                          <p className={`${styles.title}`}>tests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.images} col-lg-5`}></div>
            </div>
          </div>
          {/* <Swiper
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <picture>
              <img src={cover1} className="w-100" alt="" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img src={cover2} className="w-100" alt="" />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img src={cover3} className="w-100" alt="" />
            </picture>
          </SwiperSlide>
        </Swiper> */}
        </div>

        <div className={`${styles.wrapper}`}>
          {/* Examinations */}
          <Examinations ExaminationsNumber={6} />
          <div className={`${styles.link} mx-auto px-3 py-2 mb-5`}>
            <span className="me-1">{t("home.examinations.link")}</span>
            <NavLink to="/medicalTest">
              <span className={i18n.language === "ar" ? "me-2" : "ms-2"}>
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
          <div className=" px-4 mb-5">
            <div className={`${styles.statistics} sectionBody mx-auto`}>
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
          
            <div className={`row g-0 sectionBody mx-auto ${styles.advantages}`}>
              <div className="col-lg-6">
                <div className={`${styles.image} w-100 mx-auto`}>
                  <picture className="col-md-6">
                    <img src={advantages} className="w-100" alt="" />
                  </picture>
                </div>
              </div>
              <div className="col-lg-6">
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
              <span className={i18n.language === "ar" ? "me-2" : "ms-2"}>
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
        <div className={`${styles.testmonials} py-5`}>
          
            <div className={`${styles.testmonialsBody} sectionBody mx-auto`}>
              <h3 className={`${styles.title} mb-4`}>clients testmonials</h3>
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
                      <p className={`${styles.name}`}>
                        yasser hamada abdelmonem
                      </p>
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
                    aspernatur odit ratione nisi dignissimos aut praesentium
                    ipsa. Libero officiis sit repellat unde nostrum.
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
                      <p className={`${styles.name}`}>
                        yasser hamada abdelmonem
                      </p>
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
                    aspernatur odit ratione nisi dignissimos aut praesentium
                    ipsa. Libero officiis sit repellat unde nostrum.
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
                      <p className={`${styles.name}`}>
                        yasser hamada abdelmonem
                      </p>
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
                    aspernatur odit ratione nisi dignissimos aut praesentium
                    ipsa. Libero officiis sit repellat unde nostrum.
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
                      <p className={`${styles.name}`}>
                        yasser hamada abdelmonem
                      </p>
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
                    aspernatur odit ratione nisi dignissimos aut praesentium
                    ipsa. Libero officiis sit repellat unde nostrum.
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
