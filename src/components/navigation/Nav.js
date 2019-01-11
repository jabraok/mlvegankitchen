import React, { useState, useEffect, useRef } from "react";

import { jsx, css } from "@emotion/core";

import { Link } from "@reach/router";
import { GREY } from "../../styles/color";
import MLVKLogo from "../identity/MLVKLogo";
// import styled from "@emotion/styled";
import TweenMax from "gsap";
import MobileNav from "./MobileNav";

const links = [
  { url: "/about", text: "About Us" },
  { url: "/contact", text: "Contact" },
  { url: "/products", text: "Products" }
];

const ContainerStyles = css`
  color: ${GREY};
  text-transform: uppercase;

  a {
    color: inherit;
  }
`;

const MenuToggleStyles = css`
  padding: 0.57rem 0;
  font-size: 0.857rem;
  letter-spacing: inherit;
  border-top: 2px solid ${GREY};
  border-bottom: 2px solid ${GREY};
  text-transform: inherit;
  z-index: 100;
`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const handleMenuToggleClick = () => setOpen(!open);

  useEffect(
    () => {
      const el = menuRef.current;
      const elHeight = el.clientHeight;

      if (open) {
        TweenMax.to(el, 0.25, { y: 0, autoAlpha: 1 });
      } else {
        TweenMax.to(el, 0.25, { y: -elHeight, autoAlpha: 0 });
      }
    },
    [open]
  );

  return (
    <nav css={ContainerStyles} className="flex flex-col absolute w-full">
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

        {/* <MenuToggle className="block lg:hidden" onClick={handleMenuToggleClick}>
          Menu
        </MenuToggle> */}
        <button
          css={MenuToggleStyles}
          className="block lg:hidden"
          onClick={handleMenuToggleClick}
        >
          Menu
        </button>
      </div>

      <div ref={menuRef} className="opacity-0">
        <MobileNav links={links} />
      </div>
    </nav>
  );
}
