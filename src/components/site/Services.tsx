import { motion } from "framer-motion";
import Reveal from "./Reveal";
import hair from "@/assets/service-hair.jpg";
import skin from "@/assets/service-skin.jpg";
import makeup from "@/assets/service-makeup.jpg";
import bridal from "@/assets/service-bridal.jpg";

const services = [
  { title: "Hair", tagline: "Good hair day? Every day.", img: hair, items: ["Cuts & styling", "Colour & highlights", "Keratin & smoothening", "Bridal hairdos"] },
  { title: "Skin", tagline: "Glow like you mean it.", img: skin, items: ["Signature facials", "Hydra glow", "Brightening", "Anti-ageing rituals"] },
  { title: "Makeup", tagline: "Soft glam, all yours.", img: makeup, items: ["Party looks", "Engagement", "HD makeup", "Editorial"] },
  { title: "Bridal", tagline: "For your forever moment.", img: bridal, items: ["Bridal trials", "Wedding day", "Sangeet & mehendi", "Reception glam"] },
];

const Services = () => (
  <section id="services" className="relative py-28 bg-gradient-soft">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <Reveal>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Services</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              Crafted rituals,<br /> for every <em className="text-gradient-gold not-italic">you</em>.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-muted-foreground max-w-sm">
            Four signature pillars. Endless ways to feel like yourself again.
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-petal transition-shadow duration-700"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-ivory/20" />
                <div className="absolute top-4 left-4 right-4 flex justify-between text-ivory/90 text-xs tracking-[0.3em] uppercase">
                  <span>0{i + 1}</span>
                  <span>Florence</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-serif text-3xl text-ivory">{s.title}</h3>
                  <p className="text-ivory/80 text-sm italic mt-1">{s.tagline}</p>
                </div>
              </div>
              <div className="p-6 space-y-2">
                {s.items.map((it) => (
                  <div key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {it}
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-gold/40 transition-all duration-500 pointer-events-none" />
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
