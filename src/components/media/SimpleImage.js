import React from "react";
import Imgix, { Picture, Source } from "react-imgix";
import { BASE_URL } from "../../constants/Imgix";

export default function HeroSlide({ img, sizes }) {
  const commonProps = {
    src: `${BASE_URL}/${img}`,
    imgixParams: {
      fit: "crop"
    }
  };

  return (
    <Picture>
      {sizes.map(size => {
        return (
          <Source
            key={size}
            {...commonProps}
            width={size}
            htmlAttributes={{ media: `(min-width: ${size}px)` }}
          />
        );
      })}

      <Imgix src={commonProps.src} />
    </Picture>
  );
}
