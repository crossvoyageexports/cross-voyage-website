"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Leadership
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Driven By Vision & Trust
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Cross Voyage Exports Private Limited is led by a team committed
            to connecting quality Indian products with global markets through
            reliability, transparency and long-term partnerships.
          </p>

        </motion.div>


        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">


          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/Abhinav.jpeg"
              alt="Director Cross Voyage Exports"
              fill
              className="object-cover"
            />

          </div>


          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Abhinav Bhumireddy
            </h3>

            <p className="text-blue-700 font-semibold mt-2">
              Director
            </p>


            <p className="mt-6 text-gray-600 leading-8">
              With a vision to promote Indian agricultural products,
              handicrafts and textiles globally, Cross Voyage Exports focuses
              on quality sourcing, professional export practices and trusted
              relationships with international buyers.
            </p>


            <p className="mt-4 text-gray-600 leading-8">
              Our mission is to create seamless global trade opportunities
              while maintaining excellence in every shipment.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}