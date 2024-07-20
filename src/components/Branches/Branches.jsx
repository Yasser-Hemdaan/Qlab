// import React from "react";
import { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import styles from "./Branches.module.css";

// Icons
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const Branches = () => {
  useEffect(() => {
    AOS.init({
      easing: "linear",
      delay: 300,
      duration: 600,
    });
  });
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className={`${styles.branchesWrapper}`}>
        <div className={`${styles.text} text-center mx-auto pt-5`}>
          <h2
            className={`${styles.mainTitle} mb-5 mx-auto ${
              i18n.language === "ar" ? "boldArFont" : "blackEnFont"
            }`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {t("branches.title")}
          </h2>
        </div>
        <div
          className={`${styles.branchesBody} customContainer row g-4 mx-auto`}
        >
          <div
            className={`${styles.item} col-lg-4 col-md-6`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.address")}
                  </h3>
                  <div className={styles.location}>
                    <div className={`${styles.icon}`}>
                      <LiaMapMarkedAltSolid />
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("branches.allBranches.branch1.addressTitle")}</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.contactInformation")}
                  </h3>

                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineMailOutline />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch1.email")}
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineAddIcCall />
                    </div>

                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch1.phone")}
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title} fw-bold`}>
                      {t("branches.openingHour")}
                    </h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      Saturday - Thursday 9:00 am -11:00 pm
                    </p>
                    <p className={`${styles.work} ${styles.description}`}>
                      Friday 10:00 am -11:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.item} col-lg-4 col-md-6`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.address")}
                  </h3>
                  <div className={styles.location}>
                    <div className={`${styles.icon}`}>
                      <LiaMapMarkedAltSolid />
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("branches.allBranches.branch2.addressTitle")}</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.contactInformation")}
                  </h3>

                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineMailOutline />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch2.email")}
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineAddIcCall />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch2.phone")}
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title} fw-bold`}>
                      {t("branches.openingHour")}
                    </h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      Saturday - Thursday 9:00 am -11:00 pm
                    </p>
                    <p className={`${styles.work} ${styles.description}`}>
                      Friday 10:00 am -11:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.item} col-lg-4 col-md-6`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.address")}
                  </h3>
                  <div className={styles.location}>
                    <div className={`${styles.icon}`}>
                      <LiaMapMarkedAltSolid />
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("branches.allBranches.branch3.addressTitle")}</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.contactInformation")}
                  </h3>

                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineMailOutline />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch3.email")}
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineAddIcCall />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch3.phone")}
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title} fw-bold`}>
                      {t("branches.openingHour")}
                    </h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      Saturday - Thursday 9:00 am -11:00 pm
                    </p>
                    <p className={`${styles.work} ${styles.description}`}>
                      Friday 10:00 am -11:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.item} col-lg-4 col-md-6`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.address")}
                  </h3>
                  <div className={styles.location}>
                    <div className={`${styles.icon}`}>
                      <LiaMapMarkedAltSolid />
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("branches.allBranches.branch4.addressTitle")}</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.contactInformation")}
                  </h3>

                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineMailOutline />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch4.email")}
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineAddIcCall />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch4.phone")}
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title} fw-bold`}>
                      {t("branches.openingHour")}
                    </h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      Saturday - Thursday 9:00 am -11:00 pm
                    </p>
                    <p className={`${styles.work} ${styles.description}`}>
                      Friday 10:00 am -11:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={`${styles.item} col-lg-4 col-md-6`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.address")}
                  </h3>
                  <div className={styles.location}>
                    <div className={`${styles.icon}`}>
                      <LiaMapMarkedAltSolid />
                    </div>
                    <div className={`${styles.description}`}>
                      <p>{t("branches.allBranches.branch5.addressTitle")}</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title} fw-bold`}>
                    {t("branches.contactInformation")}
                  </h3>

                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineMailOutline />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch5.email")}
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <div className={`${styles.icon}`}>
                      <MdOutlineAddIcCall />
                    </div>
                    <p className={`${styles.description}`}>
                      {t("branches.allBranches.branch5.phone")}
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title} fw-bold`}>
                      {t("branches.openingHour")}
                    </h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Branches;
