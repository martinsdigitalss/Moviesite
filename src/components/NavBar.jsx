import { Link } from "react-router-dom";
import "../css/Navbar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App </Link>
      </div>
      <div className="navbar-Links">
        <Link to="/" className="nav-Link">
          Home
        </Link>
        <Link to="/favourites" className="nav-Link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
