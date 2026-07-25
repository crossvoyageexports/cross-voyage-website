"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* Company */}

          <div>

            <h2 className="text-2xl font-bold">
              Cross Voyage Exports
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Connecting India to the World with quality agricultural
              products, textiles, handicrafts and global export solutions.
            </p>

          </div>



          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-white transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#certifications" className="hover:text-white transition">
                  Certifications
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>




          {/* Products */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Fresh Agricultural Products</li>
              <li>Rice & Cereals</li>
              <li>Dry Foods</li>
              <li>Textiles</li>
              <li>Handicrafts</li>

            </ul>

          </div>




          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>


            <div className="space-y-4 text-gray-400">


              <p className="flex gap-3 items-start">
                <Mail size={20} className="mt-1" />
                contact@crossvoyage.com
              </p>


              <p className="flex gap-3 items-start">
                <Phone size={20} className="mt-1" />
                +91 9985514972
              </p>


              <p className="flex gap-3 items-start">
                <MapPin size={20} className="mt-1" />
                India
              </p>


            </div>


          </div>


        </div>


      </div>



      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400">

          © {new Date().getFullYear()} Cross Voyage Exports Private Limited.
          All Rights Reserved.

        </div>

      </div>


    </footer>
  );
}