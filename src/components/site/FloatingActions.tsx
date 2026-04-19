import { MessageCircle, Phone } from "lucide-react";

const FloatingActions = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="group w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-petal hover:scale-110 transition-transform duration-500"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
    </a>
    <a
      href="tel:+919876543210"
      className="w-14 h-14 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold hover:scale-110 transition-transform duration-500"
      aria-label="Call"
    >
      <Phone className="w-5 h-5" />
    </a>
  </div>
);

export default FloatingActions;
