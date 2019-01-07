import React from "react";
import ReactiveImgix from "../components/media/ReactiveImgix";
import { BASE_URL } from "../constants/Imgix";

export default function HeroSlide() {
  return (
    <div className="w-1/2 h-screen">
      <ReactiveImgix src={`${BASE_URL}/images/hero-image-isometric.png`} />
    </div>
  );
}
