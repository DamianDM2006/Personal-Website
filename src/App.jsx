import { Routes, Route } from "react-router";
import { useTranslation, Trans } from "react-i18next";

import i18n from "../i18n.js";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import TechSkills from "./pages/TechSkills.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import Accomplish from "./pages/Accomplish.jsx";
import Contact from "./pages/Contact.jsx";

const lngs = {
  en: { nativeName: "English" },
  th: { nativeName: "ไทย" },
};

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/techSkills" element={<TechSkills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/accomplish" element={<Accomplish />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
