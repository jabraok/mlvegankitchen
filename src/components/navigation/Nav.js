/*

1. Should be able to collapse
2. Should be able to change base color

*/

import React from "react";
import { Link } from "@reach/router";
import { GREY } from "../../styles/color";
import MLVKLogo from "../identity/MLVKLogo";
import styled from "@emotion/styled";

const Container = styled("nav")`
  padding: 1.14rem 4.92rem;
  color: ${GREY};
  letter-spacing: 0.19rem;
  text-transform: uppercase;

  a {
    text-align: right;
    color: inherit;
    padding: 1.42rem;
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
    <Container className="flex items-center justify-between">
      <MLVKLogo size={150} />
      <div className="md:hidden lg:show">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <MenuToggle className="lg:hidden">Menu</MenuToggle>
    </Container>
  );
}

// <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
//   <div className="flex items-center flex-no-shrink text-white mr-6">
//     <svg
//       className="fill-current h-8 w-8 mr-2"
//       width="54"
//       height="54"
//       viewBox="0 0 54 54"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
//     </svg>
//     <span className="font-semibold text-xl tracking-tight">
//       Tailwind CSS
//     </span>
//   </div>
//   <div className="block lg:hidden">
//     <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
//       <svg
//         className="fill-current h-3 w-3"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Menu</title>
//         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//       </svg>
//     </button>
//   </div>
//   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//     <div className="text-sm lg:flex-grow">
//       <a
//         href="#responsive-header"
//         className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
//       >
//         Docs
//       </a>
//       <a
//         href="#responsive-header"
//         className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
//       >
//         Examples
//       </a>
//       <a
//         href="#responsive-header"
//         className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
//       >
//         Blog
//       </a>
//     </div>
//     <div>
//       <a
//         href="#"
//         className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
//       >
//         Download
//       </a>
//     </div>
//   </div>
// </nav>