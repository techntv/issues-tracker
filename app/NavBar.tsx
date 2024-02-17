"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
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
              className={classNames({
                "text-zinc-900": currentPath === href,
                "text-zinc-500": currentPath !== href,
                "hover:text-zinc-800 transition-colors": true,
              })}
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
