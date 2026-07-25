"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-300 font-semibold tracking-[5px] uppercase mb-4"
        >
          Cross Voyage Exports Private Limited
        </motion.h2>


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Connecting India
          <br />
          To The World
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-8"
        >
          Exporting premium agricultural products, processed foods,
          handicrafts, and textiles from India to customers worldwide with
          quality, reliability, and trust.
        </motion.p>



        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >


          <a
            href="#products"
            className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
          >
            Explore Products
            <ArrowRight size={20} />
          </a>



          <a
            href="/documents/Cross-Voyage-Exports-Company-Profile.pdf"
            download
            className="border border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
          >
            Download Company Profile
            <Download size={20} />
          </a>


        </motion.div>



        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >

          <div>
            <h3 className="text-4xl font-bold text-blue-300">
              7+
            </h3>
            <p className="text-gray-300 mt-2">
              Product Categories
            </p>
          </div>


          <div>
            <h3 className="text-4xl font-bold text-blue-300">
              100%
            </h3>
            <p className="text-gray-300 mt-2">
              Quality Assurance
            </p>
          </div>


          <div>
            <h3 className="text-4xl font-bold text-blue-300">
              IEC
            </h3>
            <p className="text-gray-300 mt-2">
              Certified Exporter
            </p>
          </div>


          <div>
            <h3 className="text-4xl font-bold text-blue-300">
              24/7
            </h3>
            <p className="text-gray-300 mt-2">
              Customer Support
            </p>
          </div>


        </motion.div>


      </div>

    </section>
  );
}