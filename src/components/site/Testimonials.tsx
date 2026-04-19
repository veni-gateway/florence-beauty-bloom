import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const data = [
  { name: "Aarohi S.", role: "Bride, 2024", text: "I cried when I saw myself. Not because of the makeup — because I finally looked like the version of me I'd been imagining since I was sixteen." },
  { name: "Meher K.", role: "Skin client", text: "I came in tired. I left feeling like I'd been on a holiday. Florence isn't a salon, it's a soft place to land." },
  { name: "Ishita R.", role: "Engagement glam", text: "He said 'wow' three times. Three. I'm keeping count and so should you." },
  { name: "Tara M.", role: "Hair colour", text: "They asked what I wanted my hair to feel like. I've never been asked that. I'll never go anywhere else." },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % data.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 bg-gradient-soft overflow-hidden">
      <div className="container max-w-4xl text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Soft Words</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
            Loved by women who <em className="text-gradient-gold not-italic">know</em>.
          </h2>
        </Reveal>

        <div className="relative h-72 md:h-56">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 glass rounded-3xl p-8 md:p-12 flex flex-col justify-center"
            >
              <Quote className="w-8 h-8 text-gold mx-auto mb-4 opacity-60" />
              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed">
                "{data[i].text}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{data[i].name}</span>
                <span className="text-muted-foreground"> — {data[i].role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-gradient-gold" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
