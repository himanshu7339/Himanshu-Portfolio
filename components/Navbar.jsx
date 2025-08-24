"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/Images/Logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font shadow">
      <div className="container mx-auto flex flex-row px-5 py-5 items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <Link href="/" className="flex title-font font-medium items-center text-gray-900">
          <Image
            className="object-cover object-center rounded"
            alt="Logo"
            src={Logo}
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Burger Menu Button (mobile only) */}
        <button
          className="inline-flex items-center md:hidden text-gray-900 border border-gray-400 rounded p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-col md:flex-row md:flex-wrap items-center text-base justify-center w-full md:w-auto transition-[max-height] duration-300 ease-in overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          } md:max-h-full`}
          aria-label="Primary Navigation"
        >
          <Link href="/" className="mr-5 hover:text-gray-900 py-2 md:py-0" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/pricing" className="mr-5 hover:text-gray-900 py-2 md:py-0" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900 py-2 md:py-0" onClick={() => setIsOpen(false)}>About us</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 py-2 md:py-0" onClick={() => setIsOpen(false)}>Contact us</Link>

          {/* Mobile-only GET FREE CALL button wrapped in Link */}
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`} onClick={() => setIsOpen(false)} className="w-full">
            <button 
              className="md:hidden mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded"
              type="button"
            >
              GET FREE CALL
            </button>
          </Link>
        </nav>

        {/* Desktop GET FREE CALL button wrapped in Link */}
        <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`} className="hidden md:inline-flex ml-auto cursor-pointer items-center bg-orange-600 hover:bg-orange-700 border-0 py-3 px-3 focus:outline-none rounded text-base text-white">
          GET FREE CALL
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
