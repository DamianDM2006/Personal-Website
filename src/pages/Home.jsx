import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import i18n from "../../i18n.js";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section>
        <h2>
          <Trans i18nKey="home.tag">Professional Summary</Trans>
        </h2>
        <p>
          <Trans i18nKey="home.discription">
            Motivated front-end and back-end developer transitioning from a
            strong background in construction management and commercial
            carpentry into software development. Passionate about building
            responsive, user-friendly web applications using modern{" "}
            <span translate="no">JavaScript</span> technologies. Skilled in{" "}
            <span translate="no">
              React, Node.js/Express, SQL databases, PostgreSQL, CSS, Grid
            </span>
            , and full-stack development practices. Eager to apply
            problem-solving skills from hands-on project management to deliver
            clean, efficient code in a collaborative teamenvironment.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans i18nKey="home.philosophy.tag">My Personal Philosophy</Trans>
        </h2>
        <h3>
          <Trans i18nKey="home.philosophy.threeRules.tag">
            Three Rules I Live By:
          </Trans>
        </h3>
        <p>
          <Trans i18nKey="home.philosophy.threeRules.discription">
            I strive to adbide by and live theses rules everyday. These rules
            are mutually <strong>INCLUSIVE</strong>. I feel it would be damaging
            to my intergrity to exclude one rule for the fulfillment of another.
          </Trans>
        </p>
        <ul>
          <li>
            <Trans i18nKey="home.philosophy.threeRules.rules.rule1">
              Have Fun
            </Trans>
          </li>
          <li>
            <Trans i18nKey="home.philosophy.threeRules.rules.rule2">
              Respect Other People
            </Trans>
          </li>
          <li>
            <Trans i18nKey="home.philosophy.threeRules.rules.rule3">
              Endeavor to Learn Something New
            </Trans>
          </li>
        </ul>
      </section>
      <section>
        <h2>
          <Trans i18nKey="home.mindset.tag">
            Professional Mindset
          </Trans>
        </h2>
        <p>
          <Trans i18nKey="home.mindset.discription.part1">
            I recently graduated from an immersive full stack cohort where I
            gained the basic tools to start my journey as a software developer. I
            have come to realize, however, that the knowledge and skills that I
            acquired through course work just scratches the surface of what tools
            and techniques are required to become a master of this craft.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="home.mindset.discription.part2">
            I am approaching this transition as I approached my development as a
            highly skilled carpenter. As, what some would call me now, a master
            carpenter, I was always learning. Sometimes I learned better
            techniques. Sometimes I was required to learn and adapt to changing
            technologies.
            <strong>Always</strong> I used my knowledge to creatively build unique
            projects.
          </Trans>
        </p>
        <p>
          Yes, I take pride in being able to creatively leverage my skill sets
          in a productive manner. I have a very strong work ethic. I like to
          learn. I am not above doing the grunt work. As I see it, doing the
          mundane is also an opportunity to hone acquired skills.
        </p>
        <p>
          I am sincerely looking forward to have an opportunity to develop and
          further my skills by contributing to meaningful projects.
        </p>
      </section>
    </>
  );
};

export default Home;
