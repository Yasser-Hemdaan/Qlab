// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Packages.module.css";

// DB
// import examinations from "../../DB/Examinations.js";
import packages from "../../DB/Packages.js";

// eslint-disable-next-line react/prop-types
const Packages = ({ PackagesNumber }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${styles.packages} ${
        i18n.language === "ar" ? "regularArFont" : "mediumEnFont"
      }`}
    >
      <div className={`${styles.packagesBody} customContainer mx-auto pt-5`}>
        <div className={`${styles.text} text-center`}>
          <h3
            className={`${styles.subTitle} mb-3 ${
              i18n.language === "ar" ? "semiBoldArFont" : "semiBoldEnFont"
            }`}
          >
            {t("home.packages.mainTitle")}
          </h3>
          <h2
            className={`${styles.mainTitle} mb-0 mx-auto ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            } `}
          >
            {t("home.packages.subTitle1")}
          </h2>
          <h2
            className={`${styles.mainTitle} mb-4 mx-auto ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            } `}
          >
            {t("home.packages.subTitle2")}
          </h2>
          <p className={`${styles.description} mx-auto`}>
            {t("home.packages.description")}
          </p>
        </div>
        <div className={`${styles.packagesCardsContainer} mx-auto py-4 mb-5`}>
          <div className="row g-3">
            {packages.slice(0, PackagesNumber).map((card, index) => (
              <div key={index} className="col-md-6 col-xl-4">
                <div className={`${styles.packagesCard}`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={card.image} width={"100%"} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.cardBody} m-4 px-3`}>
                    <h4
                      className={`${styles.type} mb-3 ${
                        i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                      }`}
                    >
                      {t(
                        `home.packages.packagesCards.package${index + 1}.type`
                      )}
                    </h4>
                    <h4
                      className={`${styles.title} mb-3 ${
                        i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                      }`}
                    >
                      {t(
                        `home.packages.packagesCards.package${index + 1}.title`
                      )}
                    </h4>
                    <div>
                      <p
                        className={`${styles.price} ${
                          i18n.language === "ar" ? "boldArFont" : "blackEnFont"
                        }`}
                      >
                        <span>
                          {t(`home.packages.packagesCards.priceTitle`)}
                        </span>{" "}
                        <span>
                          {t(
                            `home.packages.packagesCards.package${
                              index + 1
                            }.newPrice`
                          )}
                        </span>
                        <span>
                          {t(
                            `home.packages.packagesCards.package${
                              index + 1
                            }.oldPrice`
                          )}
                        </span>
                      </p>
                    </div>
                    <ul
                      className={`${styles.description} ${
                        i18n.language === "ar" ? "semiBoldArFont" : "boldEnFont"
                      }`}
                    >
                      <li>
                        <span>
                          {t(
                            `home.packages.packagesCards.package${
                              index + 1
                            }.description.d1`
                          )}
                        </span>
                      </li>
                      <li>
                        <span>
                          {t(
                            `home.packages.packagesCards.package${
                              index + 1
                            }.description.d2`
                          )}
                        </span>
                      </li>
                      <li>
                        <span>
                          {t(
                            `home.packages.packagesCards.package${
                              index + 1
                            }.description.d3`
                          )}
                        </span>
                      </li>
                      <li>
                        <span>
                          {t(
                            `home.packages.packagesCards.package${
                              index + 1
                            }.description.d4`
                          )}
                        </span>
                      </li>
                    </ul>
                    {/* <p className={`${styles.description}`}>
                      {t(
                        `home.packages.packagesCards.package${
                          index + 1
                        }.description`
                      )}
                    </p> */}
                    <div className={`${styles.includes}`}>
                      <p className="m-0">
                        <span>
                          {t(`home.packages.packagesCards.includesTitle`)}
                        </span>{" "}
                        {t(
                          `home.packages.packagesCards.package${
                            index + 1
                          }.testNumber`
                        )}{" "}
                        {t(
                          `home.packages.packagesCards.package${
                            index + 1
                          }.testType`
                        )}
                      </p>
                      <a
                        href="wa-me:966554754811"
                        target="_blank"
                        className={`${styles.more} px-3 py-1`}
                      >
                        {t(`home.packages.packagesCards.more`)}
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

export default Packages;
