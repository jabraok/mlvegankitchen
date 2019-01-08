import React from "react";
import SimpleImage from "../../components/media/SimpleImage";
import styled from "@emotion/styled";
import { ACCENT_ORANGE } from "../../styles/color";

const Container = styled("div")`
  background-color: ${ACCENT_ORANGE};
  padding-top: 14rem;
`;

export default function HeroSlide() {
  return (
    <Container className="w-full h-screen">
      <SimpleImage img="products/bbq-plated-1.png" sizes={[600, 300]} />
    </Container>
  );
}
