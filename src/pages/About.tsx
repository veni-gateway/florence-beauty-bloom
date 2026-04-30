import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import Reveal from "@/components/site/Reveal";
import { motion } from "framer-motion";
import founder from "@/assets/founder.jpg";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { pageMetadata } from "@/lib/seo";

const timeline = [
  { year: "2016", t: "A small chair, a big dream", d: "Florence began as a one-chair studio in Bandra. Word travelled in whispers." },
  { year: "2018", t: "The Bridal Atelier opens", d: "We were called for our first wedding morning. We never stopped showing up." },
  { year: "2021", t: "A new home", d: "We moved to our flagship — pink walls, gold mirrors, a softer kind of luxury." },
  { year: "2024", t: "2,400 women later", d: "Each one walked in different. Each one walked out feeling held." },
];

const team = [
  { name: "Florence Mary", role: "Founder & Beauty Director", grad: "linear-gradient(135deg, hsl(350 70% 88%), hsl(38 60% 88%))" },
  { name: "Anika R.", role: "Bridal Lead", grad: "linear-gradient(135deg, hsl(270 50% 90%), hsl(350 70% 90%))" },
  { name: "Sana K.", role: "Master Hair Stylist", grad: "linear-gradient(135deg, hsl(28 50% 90%), hsl(350 60% 92%))" },
  { name: "Riya M.", role: "Skin Therapist", grad: "linear-gradient(135deg, hsl(38 60% 88%), hsl(270 40% 90%))" },
];

const About = () => (
  <main className="min-h-screen bg-background">
    <SEOHead
      title={pageMetadata.about.title}
      description={pageMetadata.about.description}
      keywords={pageMetadata.about.keywords}
      canonicalUrl={pageMetadata.about.canonicalUrl}
    />
    <Navbar />

    {/* Hero */}
    <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-blush grain">
      <div className="absolute -top-20 right-10 w-96 h-96 rounded-full bg-blush blur-3xl opacity-70 animate-drift" />
      <div className="absolute bottom-0 -left-20 w-[28rem] h-[28rem] rounded-full bg-lavender blur-3xl opacity-60 animate-drift [animation-delay:-8s]" />
      <div className="container relative text-center max-w-3xl space-y-6">
        <Reveal><p className="text-xs tracking-[0.4em] uppercase text-gold">Our Story</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[1.02]">
            A studio built on <em className="text-gradient-gold not-italic">soft hands</em> and softer mornings.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Florence isn't a salon. It's a feeling we wanted to give every woman
            who's ever felt rushed, unseen, or like beauty was a performance.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Founder */}
    <section className="py-28">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.8 }} className="relative rounded-[2.5rem] overflow-hidden shadow-petal aspect-[4/5]">
            <img src={founder} alt="Founder Florence Mary" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="space-y-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">The Founder</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              "I wanted a place where women could just <em className="text-gradient-gold not-italic">exhale</em>."
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I grew up watching my mother get ready for weddings — the rush, the
              borrowed lipsticks, the quiet hope that today she'd feel beautiful.
              Florence is the studio I wish she'd had. A slow morning. A warm
              mirror. Someone who saw her.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every chair in our studio is built on that promise. You'll never be
              rushed. You'll never be a number. You'll always be the bride of
              your own life.
            </p>
            <p className="font-serif text-2xl pt-2">— Florence Mary</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24 bg-gradient-soft">
      <div className="container max-w-5xl">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold text-center mb-3">Our Philosophy</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-14">
            Three quiet promises.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Slow beauty", d: "No rushed appointments. Ever. Beauty needs breath." },
            { t: "Honest mirrors", d: "We tell you what suits you, even when it isn't what's trending." },
            { t: "Soft luxury", d: "Premium products, gentle hands, an atmosphere that exhales." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 h-full hover:shadow-petal transition-shadow duration-700">
                <div className="w-10 h-10 rounded-full bg-gradient-gold mb-5" />
                <h3 className="font-serif text-3xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-28">
      <div className="container max-w-4xl">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold text-center mb-3">The Journey</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-16">A soft little timeline.</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1}>
                <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <p className="font-serif text-5xl text-gradient-gold mb-2">{item.year}</p>
                    <h3 className="font-serif text-2xl mb-2">{item.t}</h3>
                    <p className="text-muted-foreground">{item.d}</p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-gold shadow-gold" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-28 bg-gradient-soft">
      <div className="container">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold text-center mb-3">The Hands</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-14">Meet the women behind the magic.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.5 }} className="group">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-soft group-hover:shadow-petal transition-shadow duration-700" style={{ background: m.grad }}>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-serif text-8xl text-primary/30">{m.name[0]}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/60 to-transparent text-ivory translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-serif text-2xl">{m.name}</p>
                    <p className="text-xs opacity-90">{m.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container text-center space-y-6">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-6xl">Come sit with us.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="inline-flex rounded-full bg-gradient-gold px-8 py-4 text-gold-foreground shadow-gold hover:-translate-y-0.5 transition-all duration-500">
            Book your visit
          </Link>
        </Reveal>
      </div>
    </section>

    <Footer />
    <FloatingActions />
  </main>
);

export default About;
