import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const CTA = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="container">
      <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-20 text-center bg-gradient-blush grain shadow-petal">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-blush blur-3xl animate-drift" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-lavender blur-3xl animate-drift [animation-delay:-8s]" />

        <div className="relative space-y-7 max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold">A soft invitation</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.02]">
              Ready to feel like your <em className="text-gradient-gold not-italic">best self?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Slide into the chair. Exhale. Let us handle the rest.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-9 py-5 text-gold-foreground shadow-gold hover:shadow-petal transition-all duration-500 hover:-translate-y-1"
            >
              Book Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
