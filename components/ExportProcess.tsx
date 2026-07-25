"use client";

import { motion } from "framer-motion";
import {
  Search,
  CheckCircle,
  Package,
  FileText,
  Ship,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Product Sourcing",
    description:
      "We source premium quality products from trusted Indian suppliers and farmers.",
  },
  {
    icon: CheckCircle,
    title: "Quality Inspection",
    description:
      "Every product undergoes quality checks to meet international standards.",
  },
  {
    icon: Package,
    title: "Packaging & Preparation",
    description:
      "Products are carefully packed according to buyer requirements and export standards.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "We manage export documentation, certifications, and compliance requirements.",
  },
  {
    icon: Ship,
    title: "International Shipping",
    description:
      "Reliable logistics solutions ensure smooth delivery to global destinations.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Continuous communication and support throughout the export process.",
  },
];

export default function ExportProcess() {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Our Export Process
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From sourcing to shipment, we ensure a smooth and reliable
            export experience for our international buyers.
          </p>

        </motion.div>


        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border shadow-sm hover:shadow-md transition"
              >

                <Icon className="w-10 h-10 text-green-700 mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}