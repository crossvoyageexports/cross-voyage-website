"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Certifications", href: "#certifications" },
  { name: "Leadership", href: "#leadership" },
  { name: "Get Quote", href: "#quote" },
  { name: "Contact", href: "#contact" },
];


function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
      />

      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

      <line
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
      />
    </svg>
  );
}



export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">


      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}

        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >

          <div className="relative w-[55px] h-[55px]">

            <Image
              src="/logo.jpeg"
              alt="Cross Voyage Exports"
              fill
              priority
              sizes="55px"
              className="rounded-full object-cover"
            />

          </div>


          <div>

            <h1 className="text-lg font-bold text-blue-900">
              Cross Voyage Exports
            </h1>

            <p className="text-xs text-gray-500">
              Connecting India to the World
            </p>

          </div>

        </a>




        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-7">


          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 hover:text-blue-900 transition"
            >
              {item.name}
            </a>

          ))}



          {/* Instagram */}

          <a
            href="https://www.instagram.com/cross_voyage_exports/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600 transition"
            aria-label="Instagram"
          >

            <InstagramIcon />

          </a>


        </nav>




        {/* Mobile Menu Button */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >

          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}

        </button>


      </div>





      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t shadow-lg">


          <nav className="flex flex-col gap-5 px-6 py-6">


            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-900 transition"
              >
                {item.name}
              </a>

            ))}



            <a
              href="https://www.instagram.com/cross_voyage_exports/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 font-medium hover:text-pink-600 transition"
            >

              <InstagramIcon />

              Instagram

            </a>


          </nav>


        </div>

      )}


    </header>

  );
}