"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

const certificates = [
  {
    title: "Certificate of Incorporation",
    image: "/certificates/incorporation.jpg",
  },
  {
    title: "GST Registration",
    image: "/certificates/gst.jpg",
  },
  {
    title: "Import Export Code (IEC)",
    image: "/certificates/iec.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Certifications
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Trusted & Government Registered
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Cross Voyage Exports Private Limited operates with complete legal
            compliance, ensuring transparency and confidence for our
            international clients.
          </p>
        </motion.div>


        {/* Certificate Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border hover:shadow-2xl transition duration-500"
            >

              {/* Certificate Image */}
              <div className="relative h-80 bg-gray-50">

                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-5"
                />

              </div>


              {/* Certificate Details */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-center text-slate-900">
                  {certificate.title}
                </h3>


                {/* Actions */}
                <div className="flex justify-center gap-4 mt-6">

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
                  >
                    <Eye size={18} />
                    View
                  </a>


                  <a
                    href={certificate.image}
                    download
                    className="flex items-center gap-2 border border-blue-900 text-blue-900 px-5 py-2 rounded-xl hover:bg-blue-50 transition"
                  >
                    <Download size={18} />
                    Download
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}