"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Abhinav Bhumireddy",
    role: "Director",
    image: "/Abhinav.jpeg",
    position: "object-[center_25%]",
    description:
      "Driving the vision of Cross Voyage Exports Private Limited by building trusted global partnerships and connecting quality Indian products with international markets.",
  },
  {
    name: "Vamsi",
    role: "Director",
    image: "/vamsi.jpeg",
    position: "object-[center_25%]",
    description:
      "Supporting business operations, strategic growth, and ensuring smooth coordination across sourcing, exports, and customer relationships.",
  },
];

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
            Our leadership team combines business vision, export expertise,
            and commitment to building long-term relationships with global buyers.
          </p>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              {/* Image */}
              <div className="relative h-[500px] bg-gray-100">

                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${leader.position}`}
                />

              </div>


              {/* Content */}
              <div className="p-8 text-center">

                <h3 className="text-3xl font-bold text-slate-900">
                  {leader.name}
                </h3>

                <p className="text-blue-700 font-semibold mt-2">
                  {leader.role}
                </p>

                <p className="mt-5 text-gray-600 leading-8">
                  {leader.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}