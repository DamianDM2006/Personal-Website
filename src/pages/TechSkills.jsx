import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import i18n from "../../i18n.js";

const TechSkills = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h2>
        <Trans i18nKey="skill.tag">Technical & Other Skills</Trans>
      </h2>
      <section>
        <h3>
          <Trans i18nKey="skill.frontEnd">Front End Development</Trans>
        </h3>
        <ul class="withImg">
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="html5 emblem"
            />
            <div>
              HTML<sub>5</sub>
            </div>
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="css3 emblem"
            />
            <div>
              CSS<sub>3</sub> (including Flexbox, Grid, Custom Properties)
            </div>
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Deepin_Icon_Theme_%E2%80%93_text-x-javascript_%286%29.svg"
              alt="JavaScript emblem"
              class="emblem"
            />
            JavaScript ES6+
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React emblem"
              class="emblem"
            />
            React/.jsx
          </li>
          <li>
            <strong>
              <Trans i18nKey="skill.dom.part1">Responsive Design</Trans>
            </strong>
          </li>
          <li>
            <strong>
              <Trans i18nKey="skill.dom.part2">
                <span translate="no">DOM</span> (Document Object Model)
                Manipulation
              </Trans>
            </strong>
          </li>
        </ul>
      </section>
      <section>
        <h3>
          <Trans i18nKey="skill.backEnd">Back End Development</Trans>
        </h3>
        <ul class="withImg">
          <li class="two">
            <img
              style={{ background: "white" }}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js emblem"
            />
            Node.js
          </li>
          <li class="two">
            <img
              style={{ background: "white" }}
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="Express.js emblem"
              id="express"
            />
            Express.js
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/SQL_Image.svg"
              alt="SQL emblem"
            />
            SQL (
            <Trans i18nKey="skill.joins">Joins, Queries, Error Handling</Trans>)
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
              alt="socket.io emblem"
            />
            Socket.io
          </li>
        </ul>
      </section>
      <section>
        <h3>
          <Trans i18nKey="skill.tools">Tools & Others</Trans>
        </h3>
        <ul class="withImg">
          <li class="two">
            <img
              style={{ background: "white" }}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="github emblem"
            />
            GitHub
          </li>
          <li class="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
              alt="VS Code emblem"
            />
            VS Code
          </li>
          <li>
            <strong>
              <Trans i18nKey="skill.obj">Object/Array Manipulation</Trans>
            </strong>
          </li>
          <li>
            <strong>
              <Trans i18nKey="skill.testDriven.test_driven_development">
                Test Driven Development
              </Trans>{" "}
              (ViTest,{" "}
              <Trans i18nKey="skill.testDriven.familiar_with">
                familiar with
              </Trans>{" "}
              Playwright)
            </strong>
          </li>
        </ul>
      </section>
      <section>
        <h3>
          <Trans i18nKey="skill.soft_skill.tag">Soft Skills</Trans>
        </h3>
        <ul>
          <li>
            <Trans i18nKey="skill.soft_skill.creative_problem_solving">
              Creative Problem Solving
            </Trans>
          </li>
          <li>
            <Trans i18nKey="skill.soft_skill.attention_detail">
              Attention to Detail
            </Trans>
          </li>
          <li>
            <Trans i18nKey="skill.soft_skill.project_management">
              Project Management
            </Trans>{" "}
            (<Trans i18nKey="well_organized">Well Organized</Trans>)
          </li>
          <li>
            <Trans i18nKey="skill.soft_skill.team_collaboration">
              Team Collaboration
            </Trans>
          </li>
          <li>
            <Trans i18nKey="skill.soft_skill.quick_learn">Quick Learner</Trans>
          </li>
          <li>
            <Trans i18nKey="skill.soft_skill.high_integrity">
              High Integrity
            </Trans>
          </li>
        </ul>
      </section>
    </>
  );
};

export default TechSkills;
