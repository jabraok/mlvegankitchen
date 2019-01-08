import React from "react";
import HeroSlide from "../slides/products/HeroSlide";
import styled from "@emotion/styled";

const Container = styled("div")``;

export default function Products() {
  return (
    <Container className="w-full h-screen">
      <HeroSlide />
    </Container>
  );
}
