"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-23">

          {/* Logo + Brand */}
          <nav className="flex justify-start">
  <Link
    href="/"
    className="flex items-center gap-1 text-2xl font-serif font-bold text-blue-600"
  >
    <Image
      src="/my.png"
      alt="M-Y Shawls Logo"
      width={90}
      height={80}
      priority
      unoptimized
    />
    <span className="hidden md:inline text-[20px]">
      M-Y SHAWLS
    </span>
  </Link>
</nav>


          {/* Desktop Navigation */}
          <div className="hidden text-[20px] md:flex space-x-8 font-bold">
            <Link
              href="/"
              className="text-gray-700  hover:text-rose-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shawls"
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Shawls
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                /* Close Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden text-black hover:to-blue-300 bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4 font-bold">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/shawls" onClick={() => setIsOpen(false)}>
              Shawls
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
