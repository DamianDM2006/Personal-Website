import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  return (
    <div class="page">
      <header>
        <h1>Damian D. Martinez</h1>
        <h3>Full Stack Web Development | Software Engineer</h3>
      </header>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
