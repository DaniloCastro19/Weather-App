import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/"><p className="pageTitle">Weather App</p></Link>
        <Link to="/about"><p className="aboutLink">About</p></Link>
      </nav>
    </div>
  );
}
