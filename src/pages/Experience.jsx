import { useTranslation, Trans } from "react-i18next";
import { Suspense } from "react";
import i18n from "../../i18n.js";

const Experience = () => {
  return (
    <>
      <h2>
        <Trans i18nKey="experience.tag">Experience</Trans>
      </h2>
      <section id="construction">
        <h3>
          <Trans i18nKey="experience.constr_mngmt">
            Construction Management
          </Trans>
        </h3>
        <p>
          <Trans i18nKey="experience.journeyman_trained.tag">
            Journeyman Carpenter Trained Construction Manager (Rose up through
            the ranks)
          </Trans>
        </p>
        <ul>
          <li>
            <Trans i18nKey="experience.journeyman_trained.worked_various">
              Worked Various Commercial Projects based out of Denver, Colorado
              including Restricted Access State and Federal Government
              Facilities. Dates: 1998-2024
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.journeyman_trained.managed_complex">
              Managed complex projects requiring precise planning, timeline
              adherence, and problem solving under constraints
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.journeyman_trained.collaborated">
              Collaborated with teams to execute detailed blueprints,
              translating to code structure and architecture
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.journeyman_trained.applied_attentiion">
              Applied attention to detail and debugging mindset to troubleshoot
              on-site issues
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.journeyman_trained.proficient_in">
              Proficient in construction industry software such as Blue Beam,
              Procor & AutoCad
            </Trans>
          </li>
        </ul>
        <section id="constrEmploy">
          <h3>
            <Trans i18nKey="experience.some_employers">
              Some Employers I have worked with
            </Trans>
          </h3>
          <nav>
            <ul className="employ">
              <li className="emp">
                <img
                  src="https://i0.wp.com/info.mccarthy.com/brand/standards/wp-content/uploads/2025/10/Logo-Unit-Horizontal-MBC.png?fit=1920%2C748&ssl=1"
                  alt="McCarthy Logo"
                  className="emblem"
                />
                <h4>McCarthy Building Companies</h4>
                <p>
                  <Trans i18nKey="experience.job_descript.journeyman">
                    Journeyman Carpenter
                  </Trans>{" "}
                  |{" "}
                  <Trans i18nKey="experience.job_descript.lead_carpenter">
                    Lead Carpenter
                  </Trans>{" "}
                  |{" "}
                  <Trans i18nKey="experience.job_descript.foreman">
                    Carpenter Foreman
                  </Trans>
                </p>
              </li>
              <li className="emp">
                <img
                  src="https://www.acementor.org/wp-content/uploads/2021/11/ghphipps-300x79.png"
                  alt="GHPhipps Construction"
                  className="emblem"
                />
                <h4>GHPhipps Construction Companies</h4>
                <p>
                  <Trans i18nKey="experience.job_descript.apprentice">
                    Apprentice Carpenter
                  </Trans>{" "}
                  |{" "}
                  <Trans i18nKey="experience.job_descript.journeyman">
                    Journeyman Carpenter
                  </Trans>{" "}
                  |{" "}
                  <Trans i18nKey="experience.job_descript.foreman">
                    Carpenter Foreman
                  </Trans>{" "}
                  |{" "}
                  <Trans i18nKey="experience.job_descript.assist_sup">
                    Assistant Superintendent
                  </Trans>{" "}
                  |{" "}
                  <Trans i18nKey="experience.job_descript.superinten">
                    Project Superintendent
                  </Trans>
                </p>
              </li>
              <li className="emp">
                <img
                  src="https://www.boldt.com/wp-content/uploads/2021/12/Logo-White.svg"
                  alt="Boldt Construction"
                  className="emblem"
                  id="boldt"
                />
                <h4>Boldt Construction</h4>
                <p>
                  <Trans i18nKey="experience.job_descript.journeyman">
                    Journeyman Carpenter
                  </Trans>
                </p>
              </li>
            </ul>
          </nav>
        </section>
        <section id="workedOn">
          <nav>
            <ul className="projects">
              <li>
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10K3iFh-xBb2LCo_z8zWBhb5FUw3z7pzqug&s"
                    alt="Children's Hospital Colorado"
                    className="project"
                  />
                  <figcaption>
                    <Trans i18nKey="experience.projects.childrens">
                      Children's Hospital Colorado, Auroa Campus
                    </Trans>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipONTntQ8k8UWx9Qh2nRAFchwNskS_Qm1czKPjzW=w243-h406-n-k-no-nu"
                    alt="University of Denver"
                    className="project"
                  />
                  <figcaption>
                    <Trans i18nKey="experience.projects.du_engineering">
                      University of Denver Engineering Building
                    </Trans>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="https://lakehouse17.com/wp-content/uploads/2021/08/DJI_0478-scaled.jpg"
                    alt="Lake House, Sloan's Lake"
                    className="project"
                  />
                  <figcaption>
                    <Trans i18nKey="experience.projects.lake_house">
                      The Lake House, Denver Colorado
                    </Trans>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrwbFcMYqr9YgrLqpV1Y3pIo2eCv5jTOe1Q&s"
                    alt="CU Bouler"
                    className="project"
                  />
                  <figcaption>
                    <Trans i18nKey="experience.projects.cu_boulder">
                      University of Colorado at Boulder: Center for Academic
                      Success
                    </Trans>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="https://milehighcre.com/wp-content/uploads/2025/06/Screenshot-2025-06-06-at-8.09.01%E2%80%AFAM-1536x762.png"
                    alt="Southwest Airlines, Denver International Airport"
                    className="project"
                  />
                  <figcaption>
                    <Trans i18nKey="experience.projects.sw_airlines">
                      Southwest Airlines at Denver International Airport
                    </Trans>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </nav>
        </section>
      </section>
      <section id="customerSvc">
        <h3>
          <Trans i18nKey="experience.blue_cross_shield.tag">
            Blue Cross & Blue Sheild of Colorado
          </Trans>
        </h3>
        <p>
          <Trans i18nKey="experience.job_descript.custome_svc">
            Lead Customer Service Representative 1996-1997
          </Trans>
        </p>
        <img
          src="https://1000logos.net/wp-content/uploads/2025/03/Blue-Cross-Blue-Shield-Emblem.png"
          alt="Blue Cross/Blue Shield"
          className="emblem"
        />
        <ul>
          <li>
            <Trans i18nKey="experience.blue_cross_shield.led_a_ded">
              Led a dedicated team providing urgent medical care and support to
              out of state/out of network HMO members
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.blue_cross_shield.coordinated">
              Coordinated treatment authorizations and claim processing between
              visiting members and local medical providers
            </Trans>
          </li>
        </ul>
      </section>
      <section id="army">
        <h3>
          <Trans i18nKey="experience.army.tag">U.S. Army</Trans>
        </h3>
        <ul className="projects">
          <li className="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Emblem_of_the_United_States_Department_of_the_Army.svg"
              alt="U.S. Army Emblem"
            />
            <p>
              <Trans i18nKey="experience.army.responsable">
                Responsible for the Guidance, Training and Professional
                Development of all members of an Infantry Squad
              </Trans>
            </p>
          </li>
          <li className="two">
            <img
              src="https://www.medalsofamerica.com/media/catalog/product/cache/ab17e315dbf2f295f1dbc170ad8efb6f/a/r/army-infantry-wdisks-be357d_1.jpg"
              alt="Army infantry branch insignia"
            />
            <p>
              <Trans i18nKey="experience.army.deployed">
                Deployed in support of Operation Desert Shield/Storm
              </Trans>
            </p>
          </li>
          <li className="two">
            <img
              src="https://static.wixstatic.com/media/135fa7_6333acd0a51b4aaf89de7e002a117f6c~mv2.png/v1/fill/w_480,h_686,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/135fa7_6333acd0a51b4aaf89de7e002a117f6c~mv2.png"
              alt="Army Achievement Medal"
            />
            <p>
              <Trans i18nKey="experience.army.achievent_medal">
                Awarded Army Achievement Medal with 1 oak leaf cluster
              </Trans>
            </p>
          </li>
          <li className="two">
            <img
              src="https://www.medalsofamerica.com/media/catalog/product/cache/ab17e315dbf2f295f1dbc170ad8efb6f/a/r/army-good-conduct-medal-f033.jpg"
              alt="Good Conduct Medal"
            />
            <p>
              <Trans i18nKey="experience.army.good_condct_medal">
                Awarded Army Good Conduct Medal
              </Trans>
            </p>
          </li>
          <li className="two">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/US_Army_Airborne_basic_parachutist_badge.gif"
              alt="Airborne Wings"
            />
            <p>
              <Trans i18nKey="experience.army.airborne">Airborne</Trans>!!!
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Experience;
