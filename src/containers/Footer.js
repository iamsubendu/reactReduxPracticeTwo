import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="text-center p-3">
        © 2022 Copyright Reserved{" "}
        <Link className="text-white" to="/">
          UserDie
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
