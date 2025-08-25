"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[--color-light-100]/95 backdrop-blur border-b border-[--color-light-300]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Primary Navigation"
      >
        <div className="flex items-center gap-3">
          <Link href="#" className="flex items-center" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
              className="invert-0"
            />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus:ring-2 focus:ring-[--color-dark-900] sm:hidden"
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        <ul className="hidden gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[--color-dark-900] text-[length:--text-body] leading-[--text-body--line-height] font-[--text-body--font-weight] hover:text-[--color-dark-700] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900] underline-offset-8 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-md px-3 py-2 text-[--color-dark-900] hover:bg-[--color-light-200] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]">
            Search
          </button>
          <button className="rounded-md px-3 py-2 text-[--color-light-100] bg-[--color-dark-900] hover:bg-[--color-dark-700] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]">
            My Cart (2)
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="primary-menu"
          className="sm:hidden border-t border-[--color-light-300]"
        >
          <ul className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-[--color-dark-900] hover:bg-[--color-light-200]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between px-2">
              <button className="text-[--color-dark-900]">Search</button>
              <button className="text-[--color-dark-900]">My Cart (2)</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
