import React from "react";
import SimpleImage from "../../components/media/SimpleImage";
import Button from "../../components/buttons/button";

// position: absolute;
// left: 5.62%;
// right: 66.6%;
// top: 2.7%;
// bottom: 95.74%;

// font-family: Futura New;
// line-height: 56px;
// font-size: 56px;
// text-transform: uppercase;

// color: #6D6654;

export default function HeroSlide() {
  return (
    <div className="w-full h-screen pt-56 px-5">
      <div className="uppercase text-6xl text-grey">
        UPLIFT YOUR EATING EXPERIENCE
      </div>
      <Button text="DISCOVER MORE" />
      <SimpleImage img="images/hero-image-isometric.png" />
    </div>
  );
}
