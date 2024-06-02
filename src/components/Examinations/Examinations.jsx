// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Examinations.module.css";

// DB
import examinations from "../../DB/Examinations.js";

// eslint-disable-next-line react/prop-types
const Examinations = ({ ExaminationsNumber }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.examinations}`}>
      <div
        className={`${styles.examinationsBody} customContainer mx-auto pt-5`}
      >
        <div className={`${styles.text} text-center`}>
          <h3 className={`${styles.subTitle} mb-3`}>
            {t("home.examinations.mainTitle")}
          </h3>
          <h2 className={`${styles.mainTitle} mb-4 mx-auto`}>
            {t("home.examinations.subTitle")}
          </h2>
          <p className={`${styles.description}`}>
            {t("home.examinations.description")}
            <span>{t("home.examinations.price")}</span>
          </p>
        </div>
        <div
          className={`${styles.examinationsCardsContainer} customContainer mx-auto p-4 mb-4`}
        >
          <div className="row g-3">
            {examinations.slice(0, ExaminationsNumber).map((card, index) => (
              <div key={index} className="col-sm-6 col-xl-4">
                <div className={`${styles.examinationsCard}`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={card.image} width={"100%"} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.cardBody} m-4`}>
                    <h4 className={`${styles.title}`}>
                      {t(
                        `home.examinations.examinationsCards.examination${
                          index + 1
                        }.title`
                      )}
                    </h4>
                    <div>
                      <p className={`${styles.price}`}>
                        <span>
                          {t(`home.examinations.examinationsCards.priceTitle`)}
                        </span>{" "}
                        <span>
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
                      <p>
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
