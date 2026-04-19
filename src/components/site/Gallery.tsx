import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const tones = [
  "linear-gradient(135deg, hsl(350 80% 90%), hsl(30 60% 92%))",
  "linear-gradient(135deg, hsl(270 50% 92%), hsl(350 70% 92%))",
  "linear-gradient(135deg, hsl(28 50% 90%), hsl(350 60% 92%))",
  "linear-gradient(135deg, hsl(350 70% 92%), hsl(38 60% 88%))",
  "linear-gradient(135deg, hsl(270 40% 90%), hsl(28 50% 92%))",
  "linear-gradient(135deg, hsl(38 60% 88%), hsl(350 80% 92%))",
  "linear-gradient(135deg, hsl(30 50% 94%), hsl(270 50% 90%))",
  "linear-gradient(135deg, hsl(350 80% 92%), hsl(30 50% 94%))",
];

const Gallery = () => (
  <section className="py-28 bg-gradient-soft">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12">
        <Reveal>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Gallery</p>
            <h2 className="font-serif text-5xl md:text-6xl">@florence.studio</h2>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <a href="#" className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" /> Follow our soft chaos
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {tones.map((bg, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-2xl overflow-hidden relative cursor-pointer shadow-soft"
              style={{ background: bg }}
            >
              <div className="absolute inset-0 grid place-items-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-primary/40">
                <Instagram className="w-7 h-7 text-ivory" />
              </div>
              <div className="absolute bottom-3 left-3 font-serif text-2xl text-primary/40">F</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
