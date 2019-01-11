import React, { useState, useEffect, useRef } from "react";

import { css } from "@emotion/core";

import { Link } from "@reach/router";
import { GREY } from "../../styles/color";
import MLVKLogo from "../identity/MLVKLogo";
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

        <button
          className="block lg:hidden p-2 text-sm z-50 text-grey border-b-2 border-t-2 border-grey uppercase tracking-extra"
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
