import { NavLink } from "react-router";
import IMG_3981 from "./assets/IMG_3981.jpeg";

const Navbar = () => {
  return (
    <nav className="menu">
      <img src={IMG_3981} alt="Photo of Damian" id="damian" />
      <NavLink to="/home">Home/Summary</NavLink>
      <NavLink to="/techSkills">Technical Skills</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/accomplish">Pesonal Interests</NavLink>
      <NavLink to="/contact">Contact Information</NavLink>
    </nav>
  );
};

export default Navbar;
