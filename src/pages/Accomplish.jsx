import img0573 from "../assets/IMG_0573.jpeg";
import img0578 from "../assets/IMG_0578.jpeg";
import img0579 from "../assets/IMG_0579.jpeg";
import img0650 from "../assets/IMG_0650.jpeg";
import imgag0062 from "../assets/IMAG0062.jpeg";
import imgag0094 from "../assets/IMAG0094.jpeg";
import imgag0095 from "../assets/IMAG0095.jpeg";
import img1030 from "../assets/IMG_1030.jpeg";
import img1040 from "../assets/IMG_1040.jpeg";
import img1077 from "../assets/IMG_1077.jpeg";
import img2760 from "../assets/IMG_2760.jpeg";
import img3829 from "../assets/IMG_3829.jpeg";
import img5020 from "../assets/IMG_5020.jpeg";

import { useTranslation, Trans } from "react-i18next";
import i18n from "../../i18n.js";

const Accomplish = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h2>
        <Trans i18nKey="accomplishments.tag">Personal Interests</Trans>
      </h2>
      <section>
        <h3>
          <Trans i18nKey="accomplishments.woodworking.tag">
            Woodworking and Craftsmanship
          </Trans>
        </h3>
        <section>
          <h4>
            <Trans i18nKey="accomplishments.woodworking.finish_carpentry">
              Finish Carpentry
            </Trans>
          </h4>
          <ul className="withImg">
            <li>
              <figure>
                <img
                  src={img0573}
                  alt="Son's storage chests"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.storage_chests">
                    Handmade Blanket Storage Chests
                  </Trans>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={img0579}
                  alt="carving detail of Godzilla"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.godzilla_detail">
                    Hand Carved Storage Chest Lid Detail "Godzilla"
                  </Trans>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={img0578}
                  alt="carving detail of airborne insignia"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.airborne_detail">
                    Hand Carved Storage Chest Lid Detail "Airborne Wings"
                  </Trans>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={img0650}
                  alt="grandson's play chest"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.child_chest">
                    Hand Made Child's Toy Storage Chest
                  </Trans>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={imgag0062}
                  alt="Custom bookshelf unit"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.bookshelf">
                    Custom Built Bookshelf Unit
                  </Trans>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section>
          <h4>
            <Trans i18nKey="accomplishments.woodworking.rough_carpentry">
              Rough Carpentry
            </Trans>
          </h4>
          <ul className="withImg">
            <li>
              <figure>
                <img
                  src={imgag0094}
                  alt="backyard view of pergola and gate"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.gate_back_view">
                    Custom Fence with Pergola at gate: Backyard View
                  </Trans>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={imgag0095}
                  alt="front yard view of pergola and gate"
                  className="project"
                />
                <figcaption>
                  <Trans i18nKey="accomplishments.woodworking.fence_gate">
                    Custom Fence and Gate
                  </Trans>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h3>
          <Trans i18nKey="accomplishments.travel.tag">Travel</Trans>
        </h3>
        <ul className="withImg">
          <li>
            <figure>
              <img src={img1030} alt="traffic in Bangkok" className="project" />
              <figcaption>
                <Trans i18nKey="accomplishments.travel.bkk_traffic">
                  Moderate Traffic in Bangkok, Thailand
                </Trans>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={img1040} alt="Thai royal palace" className="project" />
              <figcaption>
                <Trans i18nKey="accomplishments.travel.bkk_palace">
                  Thailand's Royal Palace
                </Trans>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={img1077}
                alt="river view of Bangkok skyline"
                className="project"
              />
              <figcaption>
                <Trans i18nKey="accomplishments.travel.bkk_river_view">
                  River view of the Bangkok, Thailand Skyline
                </Trans>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section>
        <h3>
          <Trans i18nKey="accomplishments.travel.connections">
            Connections in Southeast Asia
          </Trans>
        </h3>
        <ul className="withImg">
          <li>
            <figure>
              <img
                src={img2760}
                alt="image of myself, my wife, and my mother-inlaw in front of ancient Kmere temple"
                className="project"
              />
              <figcaption>
                <Trans i18nKey="accomplishments.travel.kmere_temple">
                  Family at an Ancient Kmere Temple along the Thailand Cambodia
                  Border
                </Trans>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={img3829}
                alt="image of myself and my wife in Singapore"
                className="project"
              />
              <figcaption>
                <Trans i18nKey="accomplishments.travel.singapore">
                  In Singapore
                </Trans>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={img5020}
                alt="image of myself and my wife sitting"
                className="project"
              />
              <figcaption>
                <Trans i18nKey="accomplishments.travel.village_party">
                  My wife and I at a village party in Thailand
                </Trans>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Accomplish;
