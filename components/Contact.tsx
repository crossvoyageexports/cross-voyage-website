"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.target;

    const data = {
      name: form.name.value,
      company: form.company.value,
      country: form.country.value,
      email: form.email.value,
      product: form.product.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Inquiry sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send inquiry. Please try again.");
      }

    } catch {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };


  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto px-6">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Looking for reliable Indian suppliers?
            Connect with Cross Voyage Exports for your global sourcing requirements.
          </p>

        </motion.div>



        <div className="grid md:grid-cols-2 gap-10">


          {/* Contact Information */}

          <div className="space-y-8">


            <div className="flex gap-4">

              <Mail className="w-8 h-8 text-green-700" />

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <a
                  href="mailto:contact@crossvoyage.com"
                  className="text-gray-600 hover:text-green-700"
                >
                  contact@crossvoyage.com
                </a>
              </div>

            </div>



            <div className="flex gap-4">

              <Phone className="w-8 h-8 text-green-700" />

              <div>
                <h3 className="font-semibold text-lg">
                  Phone / WhatsApp
                </h3>

                <a
                  href="tel:+919985514972"
                  className="text-gray-600 hover:text-green-700"
                >
                  +91 9985514972
                </a>

              </div>

            </div>



            <div className="flex gap-4">

              <MapPin className="w-8 h-8 text-green-700" />

              <div>
                <h3 className="font-semibold text-lg">
                  Location
                </h3>

                <p className="text-gray-600">
                  India
                </p>

              </div>

            </div>


          </div>




          {/* Contact Form */}

          <div className="bg-white p-8 rounded-2xl shadow-lg">


            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >


              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-lg"
              />


              <input
                name="company"
                placeholder="Company Name"
                required
                className="w-full border p-3 rounded-lg"
              />


              <input
                name="country"
                placeholder="Country"
                required
                className="w-full border p-3 rounded-lg"
              />


              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full border p-3 rounded-lg"
              />


              <input
                name="product"
                placeholder="Product Requirement"
                required
                className="w-full border p-3 rounded-lg"
              />


              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full border p-3 rounded-lg"
              />


              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-800 transition disabled:opacity-50"
              >

                <Send size={18} />

                {loading ? "Sending..." : "Send Inquiry"}

              </button>


              {status && (
                <p className="text-center text-sm mt-3">
                  {status}
                </p>
              )}


            </form>


          </div>


        </div>


      </div>


    </section>
  );
}