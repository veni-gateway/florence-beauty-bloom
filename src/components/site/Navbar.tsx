import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/florence-logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between rounded-full px-5 transition-all duration-500",
          scrolled ? "glass py-2.5" : "py-3"
        )}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-gold/40 shadow-gold transition-transform group-hover:scale-105">
            <img src={logo} alt="Florence Beauty Studio" className="w-full h-full object-cover" />
          </span>
          <span className="font-serif text-2xl tracking-wide text-foreground">
            Florence
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative px-4 py-2 text-sm tracking-wide transition-colors",
                  "after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:bg-gradient-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-500",
                  "hover:after:scale-x-100",
                  isActive ? "text-primary after:scale-x-100" : "text-foreground/70 hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm text-gold-foreground shadow-gold hover:shadow-petal transition-all duration-500 hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-full glass"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden container overflow-hidden transition-all duration-500",
          open ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass rounded-3xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 rounded-2xl text-base transition-colors",
                  isActive ? "bg-blush text-primary" : "hover:bg-secondary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 text-center rounded-full bg-gradient-gold py-3 text-gold-foreground shadow-gold"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
