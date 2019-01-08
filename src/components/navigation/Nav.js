import React, { useState, useEffect, useRef } from "react";
import { Link } from "@reach/router";
import { GREY, GREY_LIGHTEST } from "../../styles/color";
import MLVKLogo from "../identity/MLVKLogo";
import styled from "@emotion/styled";
import TweenMax from "gsap";

const links = [
  { url: "/about", text: "About Us" },
  { url: "/contact", text: "Contact" },
  { url: "/products", text: "Products" }
];

const Container = styled("nav")`
  color: ${GREY};
  text-transform: uppercase;

  a {
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

const MobileMenuRow = styled(Link)`
  border-bottom: 1px solid ${GREY_LIGHTEST};

  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenu = styled("div")`
    border-top: 2px solid ${GREY_LIGHTEST};
    /* ${open ? "margin-left:300px" : "margin-left:500px"}; */
    `;

export default function Nav() {
  const [open, setOpen] = useState(true);
  const handleMenuToggleClick = () => setOpen(!open);

  const el = useRef(null);
  const menuTestEl = useRef(null);

  // Study this a little bit - youtube. GSAP and hooke api
  useEffect(
    () => {
      if (open) {
        TweenMax.to(el.current, 0.25, { opacity: 1, x: 0 });
        TweenMax.staggerTo(
          ".menu-row",
          0.25,
          {
            opacity: 1,
            startAt: { opacity: 0 }
          },
          0.2
        );
      } else {
        TweenMax.to(el.current, 0.1, { opacity: 0.5, x: 1000 });
      }
    },
    [open]
  );

  return (
    <Container className="flex flex-col absolute w-full">
      <div className="flex w-full items-center justify-between px-5 lg:px-20 py-5">
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

        <MenuToggle className="block lg:hidden" onClick={handleMenuToggleClick}>
          Menu
        </MenuToggle>
      </div>

      {/* {open ? (
        <MobileMenu className="flex flex-col w-full text-lg py-1 px-5 tracking-extra bg-white">
          {links.map(({ url, text }) => (
            <MobileMenuRow key={url} to={url} className="py-6">
              {text}
            </MobileMenuRow>
          ))}
        </MobileMenu>
      ) : null} */}

      <div ref={el}>
        <MobileMenu className="flex flex-col w-full text-lg py-1 px-5 tracking-extra bg-white">
          {links.map(({ url, text }) => (
            <MobileMenuRow key={url} to={url} className="py-6 menu-row">
              {text}
            </MobileMenuRow>
          ))}
        </MobileMenu>
      </div>
    </Container>
  );
}
