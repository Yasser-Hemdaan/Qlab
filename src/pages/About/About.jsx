// import React from 'react'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Accordion } from "react-bootstrap/";

// images
import cover1 from "../../assets/images/About/Hero/hero.jpg";
import image from "../../assets/images/About/1.jpg";
import Signature from "../../assets/images/About/Signature.png";
import client1 from "/awards/clients/Logo-01.jpg";
import client2 from "/awards/clients/Logo-02.jpg";
import client3 from "/awards/clients/Logo-03.jpg";
import client4 from "/awards/clients/Logo-04.jpg";
import client5 from "/awards/clients/Logo-05.jpg";
import client6 from "/awards/clients/Logo-06.jpg";

// carousrel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import styles from "./About.module.css";

// Components
import Branches from "./../../components/Branches/Branches";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  largTablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll to the top when the component is mounted or re-rendered
    AOS.init({
      easing: "linear",
      delay: 300,
      duration: 600,
    });
  }, []);
  const { t, i18n } = useTranslation();
  const [activeKey, setActiveKey] = useState("0");
  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };
  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={`${styles.home} ${
        i18n.language === "ar" ? "regularArFont" : "mediumEnFont"
      }`}
    >
      <div className={`${styles.about}`}>
        {/* Hero */}
        <div className={`${styles.hero} mb-5`}>
          <picture>
            <img src={cover1} className="w-100" alt="" />
          </picture>
        </div>
        {/* About */}
        <div
          className={`${styles.mainAbout} customContainer row mx-auto py-5 my-5`}
        >
          <div className={`${styles.text} mt-3 col-md-6`}>
            <h3
              className={`${styles.subTitle} pb-2 mb-4 fw-bold`}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {t("about.subTitle")}
            </h3>
            <h2
              className={`${styles.mainTitle} fw-bold mb-4`}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {t("about.mainTitle")}
            </h2>
            <p
              className={`${styles.description}`}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {t("about.description")}
            </p>
            <div
              className={`${styles.signature}`}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <picture>
                <img src={Signature} alt="" />
              </picture>
            </div>
          </div>
          <div
            className={`${styles.images} col-md-6`}
            data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
            data-aos-delay="250"
          >
            <picture>
              <img src={image} className="w-100" alt="" />
            </picture>
          </div>
        </div>

        {/* Clients */}
        {/* <div
          className={`${styles.clients} fw-bold`}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          <div className={`${styles.clientsBody} customContainer mx-auto`}>
            <h3
              className={`${styles.title} mb-4`}
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
            >
              {t("about.clients.title")}
            </h3>
            <p
              className={`${styles.description} mb-4`}
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
            >
              {t("about.clients.description")}
            </p>
            <Carousel
              swipeable={true}
              draggable={true}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1750}
              removeArrowOnDeviceType={[
                "desktop",
                "mobile",
                "largTablet",
                "tablet",
              ]}
              responsive={responsive}
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client1} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client2} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client3} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client4} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client5} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client6} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client1} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client2} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client3} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client4} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client5} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client6} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client1} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client2} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client3} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client4} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client5} alt="" />
                  </picture>
                </div>
              </div>
              <div
                className={`${styles.clientImage} ${
                  i18n.language === "ar" ? "ms-3" : "me-3"
                }`}
                data-aos={i18n.language === "ar" ? "fade-right" : "fade-left"}
              >
                <div className={`${styles.image}`}>
                  <picture>
                    <img src={client6} alt="" />
                  </picture>
                </div>
              </div>
            </Carousel>
          </div>
        </div> */}

        {/* Values */}

        <div
          className={`${styles.value} customContainer row mx-auto py-5 my-5`}
        >
          <h3
            className={`${styles.subTitle} ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            } pb-2 mb-4`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {t("about.values.title")}
          </h3>

          <Accordion className="mb-4" activeKey={activeKey} alwaysOpen>
            <Accordion.Item
              eventKey="0"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("0")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "0" ? "active" : ""}`}
              >
                {t("about.values.value1.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "0" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value1.description")}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("1")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "1" ? "active" : ""}`}
              >
                {t("about.values.value2.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "1" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value2.description")}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("2")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "2" ? "active" : ""}`}
              >
                {t("about.values.value3.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "2" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value3.description")}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="3"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("3")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "3" ? "active" : ""}`}
              >
                {t("about.values.value4.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "3" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value4.description")}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("4")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "4" ? "active" : ""}`}
              >
                {t("about.values.value5.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "4" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value5.description")}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("5")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "5" ? "active" : ""}`}
              >
                {t("about.values.value6.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "5" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value6.description")}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion.Header
                onClick={() => handleToggle("6")}
                className={`accordionTitle ${
                  i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                } ${activeKey === "6" ? "active" : ""}`}
              >
                {t("about.values.value7.title")}
                <i
                  className={`fa-solid ${
                    activeKey === "6" ? "fa-circle-up" : "fa-circle-down"
                  }`}
                ></i>
              </Accordion.Header>
              <Accordion.Body className={`accordionDescription`}>
                {t("about.values.value7.description")}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Branches />
    </div>
  );
};

export default About;
