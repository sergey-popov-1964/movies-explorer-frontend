import React from "react";
import './Navigation.css';

function Navigation() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  )
}

export default Navigation;
