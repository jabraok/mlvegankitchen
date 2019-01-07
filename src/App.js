import React from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import "babel-polyfill";

// Page Imports
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Main path="/">
        <Landing path="/" />
        <About path="about" />
        <Contact path="contact" />
      </Main>
    </Router>
  );
}

render(React.createElement(App), document.getElementById("root"));
