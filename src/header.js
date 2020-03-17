import React from "react";
import { render } from "@testing-library/react";

function Header() {
  return (
    <header id="container">
      <img
        src="https://i.pinimg.com/originals/04/7b/d8/047bd8e3f8a69db94655388838fc43be.jpg"
        alt="Whats the problem?"
        width="100%"
        height="300px"
      />
      <h1 id="bottom-left">Kitty Generator</h1>
    </header>
  );
}

export default Header;
