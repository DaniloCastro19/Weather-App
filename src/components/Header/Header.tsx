import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Weather App</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
