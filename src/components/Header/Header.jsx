// import React from 'react'

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// images
import logo from "../../assets/images/Components/Header/Logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navigationAndSciIsActive, setNavigationAndSciIsActive] =
    useState(false);
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);

  function handleClick() {
    if (window.innerWidth < 992) {
      setNavigationAndSciIsActive(!navigationAndSciIsActive);
      handleCheck();
    }
  }

  function handleCheck() {
    setIsBurgerChecked(!isBurgerChecked);
  }

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    handleClick();
  };

  return (
    <div
      className={`${i18n.language === "ar" ? "regularArFont" : "mediumEnFont"}`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="customContainer">
        <div className="header py-4">
          <div className="logo">
            <picture>
              <NavLink to={"/"}>
                <img src={logo} alt="Q-LAB Logo" />
              </NavLink>
            </picture>
          </div>

          <div
            className={`navigationAndSci ${
              navigationAndSciIsActive ? `active` : ``
            }`}
          >
            <ul className="navigation m-0 p-0">
              <li>
                <NavLink to={"/"} onClick={handleClick}>
                  {t("header.home")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} onClick={handleClick}>
                  {t("header.about")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/medicalTest"} onClick={handleClick}>
                  {t("header.medicalTests")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/offers"} onClick={handleClick}>
                  {t("header.offers")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/homeVisit"} onClick={handleClick}>
                  {t("header.homeVisit")}
                </NavLink>
              </li>
              <li
                className={`${
                  i18n.language === "ar" ? "boldEnFont" : "regularArFont"
                }`}
              >
                <NavLink onClick={switchLanguage}>
                  {t("header.language")}
                </NavLink>
              </li>
            </ul>

            <ul className="sci m-0 p-0">
              <li>
                <a href="https://www.facebook.com/Q.Lab.Eg" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              {/* <li>
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li> */}
              {/* <li>
                <a href="https://www.instagram.com/q.lab.eg/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li> */}
              {/* <li>
                <a href="">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="burger">
            <input
              id="checkbox2"
              checked={isBurgerChecked}
              onChange={handleCheck}
              onClick={handleClick}
              type="checkbox"
            />
            <label className="toggle toggle2" htmlFor="checkbox2">
              <div id="bar4" className="bars"></div>
              <div id="bar5" className="bars"></div>
              <div id="bar6" className="bars"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
