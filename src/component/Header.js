import React from "react";
import logo from '../logo.svg';
import './Header.css';

function Header() {
  return (
    <div class="header-wrap" >
      <img src={logo} width="100px" alt="logo" />
      <a class="menu" href="#">HOME</a>
      <a class="menu" href="#">DOCS</a>
      <a class="menu" href="#">TUTORIAL</a>
      <a class="menu" href="#">BLOG</a>
    </div>
  );
}

export default Header;
