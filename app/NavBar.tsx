import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issue", label: "Issues" },
  ];
  return (
    <nav className="flex h-14 items-center px-5 border-b space-x-6 mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              href={href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
