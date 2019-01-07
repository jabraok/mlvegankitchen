import React from "react";
import Nav from "../components/navigation/Nav";

export default function Main({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
