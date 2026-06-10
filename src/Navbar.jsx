import { NavLink } from "react-router";
import IMG_3981 from "./assets/IMG_3981.jpeg";

import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";


const Navbar = () => {
    const { t, i18n } = useTranslation();

  return (
    <nav className="menu">
      <img src={IMG_3981} alt="Photo of Damian" id="damian" />
      <NavLink to="/home">{t('button.home')}</NavLink>
      <NavLink to="/techSkills">{t('button.skills')}</NavLink>
      <NavLink to="/experience">{t('button.experience')}</NavLink>
      <NavLink to="/education">{t('button.education')}</NavLink>
      <NavLink to="/accomplish">{t('button.interests')}</NavLink>
      <NavLink to="/contact">{t('button.contactInfo')}</NavLink>
    </nav>
  );
};

export default Navbar;
