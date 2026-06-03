import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav class="menu">
      <img src="src/assets/IMG_3981.jpeg"
        alt="Photo of Damian"
        id="damian" />
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
