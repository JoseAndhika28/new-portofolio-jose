"use client";

import Link from "next/link";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-gray-400 backdrop-blur-xl text-white">
      <div className="flex items-center justify-between px-4 py-3 md:justify-center">
        {/* Logo atau Judul (Opsional) */}
        <div className="text-lg font-bold md:hidden"></div>

        {/* Menu utama (desktop) */}
        <ul className="hidden md:flex space-x-10 font-semibold">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/portofolio" className="hover:underline">
              Portofolio
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Resume
            </Link>
          </li>
        </ul>

        {/* Burger button (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Popup menu (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95">
          <ul className="flex flex-col items-center py-4 space-y-4 font-semibold">
            <li>
              <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline" onClick={() => setIsOpen(false)}>
                Portofolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
