import React from "react";
import { withContentRect } from "react-measure";
import Imgix from "react-imgix";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const ReactiveImgix = withContentRect("bounds")(
  ({ measureRef, contentRect, ...other }) => {
    if (!contentRect.bounds.height) {
      return (
        <img
          alt="placeholder"
          ref={measureRef}
          {...other.imgProps}
          // This url should work in all browsers that react-imgix used to support.
          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
      );
    }
    const { height, width } = contentRect.bounds;
    return (
      <Container>
        <Imgix
          height={height}
          width={width}
          {...other}
          htmlAttributes={{ ref: measureRef, ...other.imgProps }}
        />
      </Container>
    );
  }
);

export default ReactiveImgix;
