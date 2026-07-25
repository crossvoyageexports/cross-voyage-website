"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Fresh Mangoes",
    image: "/images/products/mango.jpg",
    description:
      "Premium Indian mangoes including Alphonso, Banganapalli, Totapuri, Badami, Neelam and Malgova.",
  },
  {
    name: "Fresh Bananas",
    image: "/images/products/banana.jpg",
    description:
      "Export-quality green and yellow bananas packed for international markets.",
  },
  {
    name: "Fresh Onions",
    image: "/images/products/onion.jpg",
    description:
      "Premium Indian red onions with excellent shelf life.",
  },
  {
    name: "Rice & Cereals",
    image: "/images/products/rice.jpg",
    description:
      "Premium rice and cereals sourced from trusted Indian producers.",
  },
  {
    name: "Dry Red Chilli",
    image: "/images/products/red-chilli.jpg",
    description:
      "High-quality dry red chillies with rich colour and aroma.",
  },
  {
    name: "Cashew Nuts",
    image: "/images/products/cashew.jpg",
    description:
      "Premium Indian cashew nuts available in multiple grades.",
  },
  {
    name: "Cotton",
    image: "/images/products/cotton.jpg",
    description:
      "High-grade Indian cotton for textile and industrial applications.",
  },
  {
    name: "Textiles",
    image: "/images/products/textiles.jpg",
    description:
      "Quality textile products manufactured to international standards.",
  },
  {
    name: "Handicrafts",
    image: "/images/products/handicrafts.jpg",
    description:
      "Authentic handcrafted products showcasing India's rich heritage.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Our Export Portfolio
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Products We Export
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We supply premium-quality agricultural products, textiles,
            handicrafts and natural commodities to customers across global
            markets.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {products.map((product, index) => (

            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

              </div>


              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {product.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition">
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>

          ))}


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-blue-900 text-white p-8 flex flex-col justify-center shadow-xl"
          >

            <h3 className="text-3xl font-bold">
              Other Products on Request
            </h3>


            <p className="mt-6 leading-8 text-blue-100">
              Looking for a product not listed? Our extensive supplier network
              across India enables us to source and export a wide range of
              agricultural products, textiles, handicrafts and customized
              solutions based on your business requirements.
            </p>


            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold w-fit hover:bg-gray-100 transition"
            >
              Send Inquiry
              <ArrowRight size={18} />
            </a>

          </motion.div>


        </div>

      </div>
    </section>
  );
}