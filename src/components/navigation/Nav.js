import React from "react";
import { Link } from "@reach/router";
import { GREY } from "../../styles/color";
import MLVKLogo from "../identity/MLVKLogo";
import styled from "@emotion/styled";

const Container = styled("nav")`
  color: ${GREY};
  text-transform: uppercase;

  a {
    text-align: right;
    color: inherit;
  }
`;

const MenuToggle = styled("button")`
  padding: 0.57rem 0;
  font-size: 0.857rem;
  letter-spacing: inherit;
  border-top: 2px solid ${GREY};
  border-bottom: 2px solid ${GREY};
  text-transform: inherit;
`;

export default function Nav() {
  return (
    <Container className="flex items-center justify-between absolute w-full px-5 lg:px-20 py-5">
      <Link to="/" className="">
        <MLVKLogo size={150} />
      </Link>
      <div className="hidden lg:block text-sm tracking-extra">
        <Link to="/about" className="px-4">
          About Us
        </Link>
        <Link to="/contact" className="px-4">
          Contact
        </Link>
        <Link to="/products" className="pl-4">
          Products
        </Link>
      </div>

      <MenuToggle className="block lg:hidden">Menu</MenuToggle>
    </Container>
  );
}
