import React from "react";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
      <Nav
        nav={
          <ul className="nav">
            <a href="#">
              <li>Women's</li>
            </a>
            <a href="#">
              <li>Men's</li>
            </a>
            <a href="#">
              <li>On the Street</li>
            </a>
            <a href="#">
              <li>The Catwalk</li>
            </a>
            <a href="#">
              <li>AdWatch</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
          </ul>
        }
      />
    </div>
  );
};

export default Header;
