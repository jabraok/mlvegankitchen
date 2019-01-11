import React from "react";

export default function Button({ color = "green", text, size = "md" }) {
  // @TODO: refactor this one later
  let fontSize = "16px";
  if (size == "lg") {
    fontSize = "18px";
  }

  let bgColor = "#98A445";
  let bgHoveredColor = "#8E9940";
  let bgClickedColor = "#A1AD49";

  let textColor = "#FFFFFF";

  let pX = "28px";
  let pY = "64px";

  if (size == "lg") {
    pX = "32px";
    pY = "72px";
  }

  // font-family: Futura New;
  // line-height: 16px;
  // font-size: 16px;
  // letter-spacing: 3.6px;
  // text-transform: uppercase;

  // color: #FFFFFF;

  return <button className="uppercase">{text}</button>;
}
