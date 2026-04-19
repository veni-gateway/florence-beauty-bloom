import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-florence.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-blush grain">
      {/* Floating soft orbs */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blush blur-3xl opacity-70 animate-drift" />
      <div className="absolute top-1/3 -right-32 w-[34rem] h-[34rem] rounded-full bg-lavender blur-3xl opacity-60 animate-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full bg-nude blur-3xl opacity-60 animate-drift [animation-delay:-12s]" />

      <div className="relative container pt-40 md:pt-44 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div style={{ y, opacity }} className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 text-xs tracking-[0.2em] uppercase"
          >
            <span className="w-7 h-7 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            Florence Beauty Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.95] tracking-tight"
          >
            Where beauty <br />
            feels like <em className="text-gradient-gold not-italic font-medium">you.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Not just makeup. A moment you'll remember. A soft, slow ritual of
            confidence — crafted by hands that understand you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-gold-foreground shadow-gold hover:shadow-petal transition-all duration-500 hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 hover:bg-secondary transition-all duration-500 hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex items-center gap-6 pt-6"
          >
            <div className="flex -space-x-3">
              {[0,1,2,3].map(i => (
                <span key={i} className="w-9 h-9 rounded-full ring-2 ring-background"
                  style={{ background: `hsl(${340 + i*15} 60% ${85 - i*4}%)` }} />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-medium">2,400+ glowing clients</p>
              <p className="text-muted-foreground text-xs">★★★★★ ・ rated love</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-petal">
            <img src={hero} alt="Florence beauty editorial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 bottom-10 glass rounded-2xl p-4 w-56"
          >
            <p className="font-serif text-xl">Bridal glow</p>
            <p className="text-xs text-muted-foreground mt-1">For your forever moment.</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-12 glass rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <span className="w-9 h-9 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="text-xs">
              <p className="font-medium">Open today</p>
              <p className="text-muted-foreground">10am — 8pm</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
