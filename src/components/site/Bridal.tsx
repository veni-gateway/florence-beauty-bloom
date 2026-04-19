import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import bridal from "@/assets/bridal.jpg";

const Bridal = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-blush rounded-[3rem] -z-10 blur-2xl opacity-70" />
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-petal aspect-[4/5]"
          >
            <img src={bridal} alt="Bridal beauty" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <p className="font-serif text-2xl">For her forever day.</p>
              <p className="text-xs text-muted-foreground mt-1">Trial → Mehendi → Sangeet → Wedding → Reception</p>
            </div>
          </motion.div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="space-y-7">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">Bridal Atelier</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
            Your big day deserves more than <em className="text-gradient-gold not-italic">ordinary</em>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A team that listens before it lifts a brush. Months of trials,
            tender mornings, soft music. We don't just do your bridal look —
            we hold the entire morning of it.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {["Personal beauty director","Skin prep, weeks before","On-location team","Touch-ups till the last dance"].map(t => (
              <li key={t} className="glass rounded-2xl px-4 py-3 text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-gold" /> {t}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-gold-foreground shadow-gold hover:-translate-y-0.5 transition-all duration-500"
          >
            Plan your bridal journey
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Bridal;
