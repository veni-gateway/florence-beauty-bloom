import { motion } from "framer-motion";
import Reveal from "./Reveal";

const items = [
  { t: "Last-minute event panic?", s: "We got you. Walk-ins welcome (with a hug)." },
  { t: "Bad hair day emergency?", s: "Fixed. Coffee on us while we work magic." },
  { t: "First-date jitters?", s: "Confidence in 45 minutes. Promise." },
  { t: "Mom of three, no time?", s: "Express glow rituals, designed for real life." },
  { t: "Don't know what suits you?", s: "We'll figure it out together. No judgement." },
  { t: "Bride with 200 questions?", s: "Bring all 200. We have answers and chai." },
];

const Relatable = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="container">
      <div className="text-center mb-14 space-y-4">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Real Talk</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl">
            We get you <span className="inline-block animate-float">💅</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Because beauty isn't always planned. Sometimes it's a Tuesday at 6pm.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-7 h-full hover:shadow-petal transition-shadow duration-700 group"
            >
              <p className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{it.t}</p>
              <p className="text-muted-foreground">{it.s}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Relatable;
