import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/florence-logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-blush" />
      <div className="absolute inset-x-0 top-0 gold-divider" />

      <div className="relative container py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/40">
              <img src={logo} alt="Florence" className="w-full h-full object-cover" />
            </span>
            <span className="font-serif text-3xl">Florence</span>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A soft, slow kind of luxury. Florence is where confidence is shaped,
            beauty is felt, and every moment is yours to keep.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-gradient-gold hover:text-gold-foreground transition-all duration-500 hover:-translate-y-0.5"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a 
                href="https://share.google/6uZ1PfA32ixJNm9Ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /> Shivranjani Park, Madhapar Circle, Rajkot
              </a>
            </li>
            <li>
              <a 
                href="tel:+917600788388"
                className="flex gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /> +91 7600788388
              </a>
            </li>
            <li>
              <a 
                href="mailto:florencebeautystudio08@gmail.com"
                className="flex gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" /> florencebeautystudio08@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Book Now</Link></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
          </ul>
        </div>
      </div>

      <div className="relative container pb-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Florence Beauty Studio. Crafted with care.</p>
        <p className="font-serif italic text-sm">Where beauty feels like you.</p>
      </div>
    </footer>
  );
};

export default Footer;
