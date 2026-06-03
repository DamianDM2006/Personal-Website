import { Link } from "react-router";
import soloWin from '../assets/solo-win.png';

const Contact = () => {
  return (
    <>
      <h2>Contact Information and Other Links</h2>
      <section style={{ marginBottom: "75px" }}>
        <h4>Location:</h4>
        <p style={{ margin: "2px 20px 2px 20px" }}>Denver Colorado 80229</p>
        <p style={{ margin: "2px 20px 2px 20px" }}>United States of America</p>
      </section>
      <section class="contact">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Png-clipart-computer-icons-telephone-call-symbol-phone-miscellaneous-logo-thumbnail.png"
          alt="phone logo"
          class="emblem"
        />
        <div>+1 (303) 564-3223</div>
      </section>
      <nav class="contact">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Better_GMAIL_Logo.svg"
          alt="gmail logo"
        />
        <a href={`mailto:dcam.damian.dm@gmail.com`}>dcam.damian.dm@gmail.com</a>
      </nav>
      <nav class="contact">
        <img
          style={{background: "white"}}
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
      <nav class="contact">
        <img
          style={{background: "white"}}
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub logo"
          class="emblem"
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
        <h3>Capstone Project: Riddles Of The DAAM</h3>
        <p>
          A game of riddles to be played as a solo player or being matched with
          another apponent.
        </p>
        <nav class="contact">
          <img
            src={soloWin}
            alt="beaver image"
            class="emblem"
          />
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
