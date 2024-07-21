import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h2>Sam's Helpdesk</h2>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
