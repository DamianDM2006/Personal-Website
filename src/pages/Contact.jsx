import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../../i18n.js";

import soloWin from "../assets/solo-win.png"; // photo from capstone project

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h2>
        <Trans i18nKey="contact.tag">Contact Information and Other Links</Trans>
      </h2>
      <section style={{ marginBottom: "75px" }}>
        <h4><Trans i18nKey="contact.location.tag">Location</Trans>:</h4>
        <p style={{ margin: "2px 20px 2px 20px" }}>
          <Trans i18nKey="contact.location.city_state">
            Denver Colorado 80229
          </Trans>
        </p>
        <p style={{ margin: "2px 20px 2px 20px" }}>
          <Trans i18nKey="contact.location.country">
            United States of America
          </Trans>
        </p>
      </section>
      <section className="contact">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Png-clipart-computer-icons-telephone-call-symbol-phone-miscellaneous-logo-thumbnail.png"
          alt="phone logo"
          className="emblem"
        />
        <div>+1 (303) 564-3223</div>
      </section>
      <nav className="contact">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Better_GMAIL_Logo.svg"
          alt="gmail logo"
        />
        <a href={`mailto:dcam.damian.dm@gmail.com`}>dcam.damian.dm@gmail.com</a>
      </nav>
      <nav className="contact">
        <img
          style={{ background: "white" }}
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg"
          alt="LinkedIn logo"
        />
        <a
          href="https://linkedin.com/in/damian-martinez-7006742b9"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/damian-martinez-7006742b9
        </a>
      </nav>
      <nav className="contact">
        <img
          style={{ background: "white" }}
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub logo"
          className="emblem"
        />
        <a
          href="https://github.com/DamianDM2006"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/DamianDM2006
        </a>
      </nav>
      <section style={{ marginTop: "100px" }}>
        <h3>
          <Trans i18nKey="contact.capstone">
            Capstone Project: Riddles Of The DAAM
          </Trans>
        </h3>
        <p>
          <Trans i18nKey="contact.discription">
            A game of riddles to be played as a solo player or being matched
            with another apponent.
          </Trans>
        </p>
        <nav className="contact">
          <img src={soloWin} alt="beaver image" className="emblem" />
          <a
            href="https://zesty-gingersnap-c9b335.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riddles Of The DAAM
          </a>
        </nav>
      </section>
    </>
  );
};

export default Contact;
