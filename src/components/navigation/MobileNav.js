import React from "react";
import { GREY_LIGHTEST } from "../../styles/color";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

const MobileMenuRow = styled(Link)`
  border-bottom: 1px solid ${GREY_LIGHTEST};

  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenu = styled("div")`
  background-color: #f7f5f2;
  /* opacity: 0; */
`;

export default function MobileNav({ links }) {
  return (
    <MobileMenu className="flex flex-col w-full text-lg py-1 px-5 tracking-extra bg-white">
      {links.map(({ url, text }) => (
        <MobileMenuRow key={url} to={url} className="py-6 menu-row">
          {text}
        </MobileMenuRow>
      ))}
    </MobileMenu>
  );
}
