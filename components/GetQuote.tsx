"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GetQuote() {
  return (
    <section id="quote" className="py-24 bg-blue-900 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">


        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
        >

          <p className="uppercase tracking-[4px] text-blue-200 font-semibold">
            Request Quote
          </p>


          <h2 className="text-5xl font-bold mt-4">
            Looking For Export Solutions?
          </h2>


          <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto">
            Share your requirements with us. Our export team will respond
            with product details, pricing and shipment options.
          </p>


          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Send Inquiry
            <ArrowRight size={20}/>
          </a>


        </motion.div>


      </div>

    </section>
  );
}