import React from "react";
import SimpleImage from "../../components/media/SimpleImage";
import styled from "@emotion/styled";

const Container = styled("div")`
  background-color: #f7f5f2;
  padding-top: 14rem;
`;

export default function HeroSlide() {
  return (
    <Container className="w-full h-screen">
      <SimpleImage img="images/hero-image-isometric.png" sizes={[600, 300]} />
    </Container>
  );
}
