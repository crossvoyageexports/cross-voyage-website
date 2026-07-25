"use client";

import { motion } from "framer-motion";
import { Globe2, Ship, Handshake, MapPin } from "lucide-react";

const regions = [
  {
    icon: Globe2,
    title: "Global Markets",
    text: "Connecting Indian products with buyers across international markets.",
  },
  {
    icon: Ship,
    title: "Export Logistics",
    text: "Reliable shipping solutions with proper documentation and compliance.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    text: "Building long-term relationships with importers and distributors.",
  },
  {
    icon: MapPin,
    title: "Worldwide Reach",
    text: "Serving customers across Asia, Middle East, Europe and Africa.",
  },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Our Global Presence
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cross Voyage Exports connects quality Indian products
            with global buyers through reliable sourcing and export solutions.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-4 gap-6">

          {regions.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >

                <Icon className="w-10 h-10 mx-auto mb-4 text-green-700" />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}