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


    } catch (error) {

      setStatus("Something went wrong. Please try again.");

    }


    setLoading(false);

  };



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
            Get In Touch
          </h2>


          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">

            Looking for reliable Indian suppliers?
            Contact Cross Voyage Exports for your requirements.

          </p>


        </motion.div>



        <div className="grid md:grid-cols-2 gap-10">



          {/* Contact Details */}

          <div className="space-y-6">


            <div className="flex items-start gap-4">

              <Mail className="w-8 h-8 text-green-700" />

              <div>

                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-gray-600">
                  contact@crossvoyage.com
                </p>

              </div>

            </div>



            <div className="flex items-start gap-4">

              <Phone className="w-8 h-8 text-green-700" />

              <div>

                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 9985514972
                </p>

              </div>

            </div>



            <div className="flex items-start gap-4">

              <MapPin className="w-8 h-8 text-green-700" />

              <div>

                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-600">
                  India
                </p>

              </div>

            </div>


          </div>




          {/* Inquiry Form */}

          <div className="bg-white p-8 rounded-xl shadow-md">


            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >


              <input

                name="name"

                type="text"

                placeholder="Your Name"

                required

                className="w-full border p-3 rounded-lg"

              />



              <input

                name="company"

                type="text"

                placeholder="Company Name"

                required

                className="w-full border p-3 rounded-lg"

              />



              <input

                name="country"

                type="text"

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

                type="text"

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

                className="w-full bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"

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