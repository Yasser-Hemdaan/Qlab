// import React from "react";
import { useTranslation } from "react-i18next";

// css
import styles from "./Packages.module.css";

// DB
import examinations from "../../DB/Examinations.js";
// import packages from "../../DB/Packages.js";

// eslint-disable-next-line react/prop-types
const Packages = ({ PackagesNumber }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.packages}`}>
      <div className={`${styles.packagesBody} customContainer mx-auto pt-5`}>
        <div className={`${styles.text} text-center`}>
          <h3 className={`${styles.subTitle} mb-3`}>
            {t("home.packages.mainTitle")}
          </h3>
          <h2 className={`${styles.mainTitle} mb-4 mx-auto fw-bold`}>
            {t("home.packages.subTitle")}
          </h2>
          <p className={`${styles.description}`}>
            {t("home.packages.description")}
          </p>
        </div>
        <div className={`${styles.packagesCardsContainer} mx-auto py-4 mb-5`}>
          <div className="row g-3">
            {examinations.slice(0, PackagesNumber).map((card, index) => (
              <div key={index} className="col-sm-6 col-xl-4">
                <div className={`${styles.packagesCard}`}>
                  <div className={`${styles.image}`}>
                    <picture>
                      <img src={card.image} width={"100%"} alt="" />
                    </picture>
                  </div>
                  <div className={`${styles.cardBody} m-4`}>
                    <h4 className={`${styles.title} fw-bold`}>
                      {t(
                        `home.packages.packagesCards.package${index + 1}.title`
                      )}
                    </h4>
                    <div>
                      <p className={`${styles.price}`}>
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
                    <p className={`${styles.description}`}>
                      {t(
                        `home.packages.packagesCards.package${
                          index + 1
                        }.description`
                      )}
                    </p>
                    <div className={`${styles.includes}`}>
                      <p>
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
