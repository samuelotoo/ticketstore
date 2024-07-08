import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./SVG_Logo.svg.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="sam help desk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h2>Sam's Helpdesk</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
