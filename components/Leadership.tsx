"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Abhinav Bhumireddy",
    role: "Director",
    image: "/Abhinav.jpeg",
    position: "object-[center_60%]",
    description:
      "Driving the vision of Cross Voyage Exports Private Limited by building trusted global partnerships and connecting quality Indian products with international markets.",
  },
  {
    name: "Vamsi",
    role: "Director",
    image: "/vamsi.jpeg",
    position: "object-[center_5%]",
    description:
      "Supporting business operations, strategic growth, and ensuring smooth coordination across sourcing, exports, and customer relationships.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-24 py-16 bg-slate-50"
    >

      <div className="max-w-6xl mx-auto px-6">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Leadership
          </p>


          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Driven By Vision & Trust
          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines business vision, export expertise,
            and commitment to building long-term relationships with global buyers.
          </p>

        </motion.div>



        {/* Leaders */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">


          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 max-w-md mx-auto w-full"
            >


              {/* Image */}
              <div className="relative h-[320px] w-full bg-gray-100">

                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={`object-cover ${leader.position}`}
                />

              </div>



              {/* Details */}
              <div className="p-6 text-center">


                <h3 className="text-2xl font-bold text-slate-900">
                  {leader.name}
                </h3>


                <p className="text-blue-700 font-semibold mt-1">
                  {leader.role}
                </p>


                <p className="mt-4 text-gray-600 leading-7 text-sm">
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