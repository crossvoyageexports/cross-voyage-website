"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919985514972"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        bg-green-600
        text-white
        px-5
        py-3
        rounded-full
        shadow-xl
        hover:bg-green-700
        transition
        duration-300
      "
    >

      <FaWhatsapp size={28} />

      <span className="font-semibold hidden sm:block">
        Chat With Us
      </span>

    </a>
  );
}