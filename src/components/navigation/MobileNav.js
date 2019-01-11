import { css } from "@emotion/core";
import React from "react";
import { GREY_LIGHTEST } from "../../styles/color";
import { Link } from "@reach/router";

const MobileMenuRowStyles = css`
  border-bottom: 1px solid ${GREY_LIGHTEST};

  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenuStyles = css`
  background-color: #f7f5f2;
`;

export default function MobileNav({ links }) {
  return (
    <div
      css={MobileMenuStyles}
      className="flex flex-col w-full text-lg py-1 px-5 tracking-extra bg-white"
    >
      {links.map(({ url, text }) => (
        <Link
          css={MobileMenuRowStyles}
          key={url}
          to={url}
          className="py-6 menu-row"
        >
          {text}
        </Link>
      ))}
    </div>
  );
}
