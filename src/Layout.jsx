import { Outlet } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";

import Navbar from "./Navbar.jsx";
import i18n from "../i18n.js";

const lngs = {
  en: { nativeName: "English" },
  th: { nativeName: "ไทย" },
};

const Layout = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="page">
      <header>
        <h1>Damian D. Martinez</h1>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <h3>{t("header")}</h3>
      </header>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
