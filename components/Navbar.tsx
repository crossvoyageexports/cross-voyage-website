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
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3">

          <div className="relative w-[60px] h-[60px]">

            <Image
              src="/logo.jpeg"
              alt="Cross Voyage Exports"
              fill
              priority
              sizes="60px"
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

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 hover:text-blue-900 transition"
            >
              {item.name}
            </a>

          ))}


          <a
            href="#contact"
            className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Get Quote
          </a>

        </nav>


        {/* Mobile Menu Button */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>


      </div>


      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col gap-5 p-6">

            {navLinks.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-900 transition"
              >
                {item.name}
              </a>

            ))}


            <a
              href="#contact"
              className="bg-blue-900 text-white rounded-lg py-3 text-center"
            >
              Get Quote
            </a>

          </div>

        </div>

      )}

    </header>
  );
}