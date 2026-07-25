"use client";

import { Globe, Award, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connecting Indian products with international buyers through reliable export solutions.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every product is sourced and inspected to meet international quality standards.",
  },
  {
    icon: ShieldCheck,
    title: "Government Registered",
    description:
      "Private Limited Company with GST Registration and Import Export Code (IEC).",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Efficient documentation, packaging and worldwide shipment support.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-700 font-semibold uppercase tracking-[3px]">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
            Cross Voyage Exports Private Limited
          </h2>

          <p className="mt-6 text-gray-600 max-w-4xl mx-auto leading-8 text-lg">
            Cross Voyage Exports Private Limited is committed to delivering
            premium-quality agricultural products, processed foods,
            handicrafts, and textiles from India to customers across the world.
            Our mission is to build long-term partnerships through quality,
            transparency, competitive pricing, and dependable export services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <item.icon className="text-blue-700 w-12 h-12 mb-6" />

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}