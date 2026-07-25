"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Truck,
  BadgeCheck,
  DollarSign,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Export Network",
    description:
      "Connecting Indian products with buyers across international markets through reliable export solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Products sourced from trusted farmers and manufacturers while maintaining high quality standards.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Efficient documentation, packaging and timely shipment support for worldwide deliveries.",
  },
  {
    icon: BadgeCheck,
    title: "Government Registered",
    description:
      "Private Limited Company with GST Registration and Import Export Code (IEC).",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Offering quality products at competitive prices with transparent business practices.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Service",
    description:
      "Building long-term relationships through trust, communication and dependable service.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Your Trusted Export Partner
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            At Cross Voyage Exports Private Limited, we focus on quality,
            transparency and customer satisfaction, delivering premium Indian
            products with professionalism and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}