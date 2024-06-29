// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Examinations.module.css";

// DB
import examinations from "../../DB/Examinations.js";

// eslint-disable-next-line react/prop-types
const Examinations = ({ ExaminationsNumber }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${styles.examinations} ${
        i18n.language === "ar" ? "regularArFont" : "mediumEnFont"
      }`}
    >
      <div
        className={`${styles.examinationsBody} customContainer  mx-auto pt-5`}
      >
        <div className={`${styles.text} text-center`}>
          <h3
            className={`${styles.subTitle} mb-3  ${
              i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
            }`}
          >
            {t("home.examinations.mainTitle")}
          </h3>
          <h2
            className={`${styles.mainTitle} mb-0 mx-auto ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            } `}
          >
            {t("home.examinations.subTitle1")}
          </h2>
          <h2
            className={`${styles.mainTitle} mb-4 mx-auto ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            } `}
          >
            {t("home.examinations.subTitle2")}
          </h2>
          <p
            className={`${styles.description} ${
              i18n.language === "ar" ? "semiBoldArFont" : "exBoldEnFont"
            }  `}
          >
            {t("home.examinations.description")}
            <span>{t("home.examinations.price")}</span>
          </p>
        </div>
        <div
          className={`${styles.examinationsCardsContainer} mx-auto py-4 mb-4`}
        >
          <div className="row g-3">
            {examinations.slice(0, ExaminationsNumber).map((card, index) => (
              <div key={index} className="col-md-6 col-xl-4">
                <div className={`${styles.examinationsCard}`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={card.image} width={"100%"} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.cardBody} m-4 px-3`}>
                    <h4
                      className={`${styles.type} ${
                        i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                      }`}
                    >
                      {t(
                        `home.examinations.examinationsCards.examination${
                          index + 1
                        }.type`
                      )}
                    </h4>
                    <h4
                      className={`${styles.title} mb-3 ${
                        i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                      }`}
                    >
                      {t(
                        `home.examinations.examinationsCards.examination${
                          index + 1
                        }.title`
                      )}
                    </h4>
                    <div>
                      <p
                        className={`${styles.price} ${
                          i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                        }`}
                      >
                        <span>
                          {t(`home.examinations.examinationsCards.priceTitle`)}
                        </span>{" "}
                        <span className="">
                          {t(
                            `home.examinations.examinationsCards.examination${
                              index + 1
                            }.newPrice`
                          )}
                        </span>
                        <span>
                          {t(
                            `home.examinations.examinationsCards.examination${
                              index + 1
                            }.oldPrice`
                          )}
                        </span>
                      </p>
                    </div>
                    <p className={`${styles.description}`}>
                      {t(
                        `home.examinations.examinationsCards.examination${
                          index + 1
                        }.description`
                      )}
                    </p>
                    <div className={`${styles.includes}`}>
                      <p className="m-0">
                        <span>
                          {t(
                            `home.examinations.examinationsCards.includesTitle`
                          )}
                        </span>{" "}
                        {t(
                          `home.examinations.examinationsCards.examination${
                            index + 1
                          }.testNumber`
                        )}{" "}
                        {t(
                          `home.examinations.examinationsCards.examination${
                            index + 1
                          }.testType`
                        )}
                      </p>
                      <a
                        href="wa-me:966554754811"
                        target="_blank"
                        className={`${styles.more} px-3 py-1`}
                      >
                        {t(`home.examinations.examinationsCards.more`)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examinations;
