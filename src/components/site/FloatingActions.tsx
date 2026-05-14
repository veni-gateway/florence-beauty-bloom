import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    
    <a
      href="https://wa.me/917600788388"
      target="_blank"
      rel="noreferrer"
      className="relative w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />

      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
    </a>

    <a
      href="tel:+917600788388"
      className="w-14 h-14 grid place-items-center rounded-full bg-yellow-600 text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Call"
    >
      <Phone className="w-5 h-5" />
    </a>
  </div>
);

export default FloatingActions;