import React from "react";
import Imgix, { Picture, Source } from "react-imgix";
import { BASE_URL } from "../../constants/Imgix";

export default function SimpleImage({ img, sizes = [1200, 992, 768, 576] }) {
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
