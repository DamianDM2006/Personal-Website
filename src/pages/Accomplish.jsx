import img0573 from '../assets/IMG_0573.jpeg';
import img0578 from '../assets/IMG_0578.jpeg';
import img0579 from '../assets/IMG_0579.jpeg';
import img0650 from '../assets/IMG_0650.jpeg';
import imgag0062 from '../assets/IMAG0062.jpeg';
import imgag0094 from '../assets/IMAG0094.jpeg';
import imgag0095 from '../assets/IMAG0095.jpeg';
import img1030 from '../assets/IMG_1030.jpeg';
import img1040 from '../assets/IMG_1040.jpeg';
import img1077 from '../assets/IMG_1077.jpeg';
import img2760 from '../assets/IMG_2760.jpeg';
import img3829 from '../assets/IMG_3829.jpeg';
import img5020 from '../assets/IMG_5020.jpeg';

const Accomplish = () => {
  return (
    <>
      <h2>Personal Interests</h2>
      <section>
        <h3>Woodworking and Craftsmanship</h3>
        <section>
          <h4>Finish Carpentry</h4>
          <ul class="withImg">
            <li>
              <figure>
                <img
                  src={img0573}
                  alt="Son's storage chests"
                  class="project"
                />
                <figcaption>
                  Handmade Blanket Storage Chests
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={img0579}
                  alt="carving detail of Godzilla"
                  class="project"
                />
                <figcaption>
                  Hand Carved Storage Chest Lid Detail "Godzilla"
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={img0578}
                  alt="carving detail of airborne insignia"
                  class="project"
                />
                <figcaption>
                  Hand Carved Storage Chest Lid Detail "Airborne Wings"
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={img0650}
                  alt="grandson's play chest"
                  class="project"
                />
                <figcaption>
                  Hand Made Child's Toy Storage Chest
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src={imgag0062}
                  alt="Custom bookshelf unit"
                  class="project" />
                <figcaption>
                  Custom Built Bookshelf Unit
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section>
          <h4>Rough Carpentry</h4>
          <ul class="withImg">
            <li>
              <figure>
                <img src={imgag0094}
                  alt="backyard view of pergola and gate"
                  class="project" />
                <figcaption>
                  Custom Fence with Pergola at gate: Backyard View
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src={imgag0095}
                  alt="front yard view of pergola and gate"
                  class="project" />
                <figcaption>
                  Custom Fence and Gate
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h3>Travel</h3>
        <ul class="withImg">
          <li>
            <figure>
              <img src={img1030}
                alt="traffic in Bangkok"
                class="project" />
              <figcaption>
                Moderate Traffic in Bangkok, Thailand
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={img1040}
                alt="Thai royal palace"
                class="project" />
              <figcaption>
                Thailand's Royal Palace
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={img1077}
                alt="river view of Bangkok skyline"
                class="project"
              />
              <figcaption>
                River view of the Bangkok, Thailand Skyline
              </figcaption>              
            </figure>
          </li>            
        </ul>
      </section>
      <section>
        <h3>Connections in Southeast Asia</h3>
        <ul class="withImg">
          <li>
            <figure>
              <img src={img2760}
                alt="image of myself, my wife, and my mother-inlaw in front of ancient Kmere temple"
                class="project"
              />
              <figcaption>
                Family at an Ancient Kmere Temple along the Thailand Cambodia Border
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={img3829}
                alt="image of myself and my wife in Singapore"
                class="project"
              />
              <figcaption>
                In Singapore
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={img5020}
                alt="image of myself and my wife sitting"
                class="project"
              />
              <figcaption>
                My wife and I at a village party
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Accomplish;
