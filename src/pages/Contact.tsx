import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import Reveal from "@/components/site/Reveal";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

const services = ["Hair", "Skin", "Makeup", "Bridal Makeup", "Not sure yet"];

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block group">
    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground group-focus-within:text-primary transition-colors">{label}</span>
    <div className="mt-2">{children}</div>
  </label>
);

const inputCls = "w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/60";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Sent with love. We'll be in touch within 24 hours. 🤍");
    }, 1100);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-blush grain">
        <div className="absolute top-10 -right-20 w-96 h-96 rounded-full bg-blush blur-3xl opacity-70 animate-drift" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-lavender blur-3xl opacity-60 animate-drift [animation-delay:-6s]" />
        <div className="container relative text-center max-w-3xl space-y-5">
          <Reveal><p className="text-xs tracking-[0.4em] uppercase text-gold">Say hello</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.02]">
              Let's plan your <em className="text-gradient-gold not-italic">soft</em> moment.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-lg">Tell us a little about you. We'll write back within 24 hours.</p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="glass rounded-[2rem] p-8 md:p-12 space-y-7 shadow-soft">
              <div className="grid md:grid-cols-2 gap-7">
                <Field label="Your name">
                  <input required name="name" placeholder="Florence" className={inputCls} />
                </Field>
                <Field label="Phone">
                  <input required name="phone" type="tel" placeholder="+91 98765 43210" className={inputCls} />
                </Field>
              </div>
              <Field label="Email">
                <input required name="email" type="email" placeholder="you@florence.studio" className={inputCls} />
              </Field>
              <Field label="Service">
                <div className="flex flex-wrap gap-2 mt-1">
                  {services.map((s) => (
                    <label key={s} className="cursor-pointer">
                      <input type="radio" name="service" value={s} className="peer sr-only" defaultChecked={s === "Hair"} />
                      <span className="inline-block px-4 py-2 rounded-full text-sm border border-border peer-checked:bg-gradient-gold peer-checked:text-gold-foreground peer-checked:border-transparent transition-all duration-300 hover:border-gold/50">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Tell us your story">
                <textarea required name="message" rows={4} placeholder="What's the moment? What's the mood?" className={inputCls + " resize-none"} />
              </Field>
              <button
                disabled={loading}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-gold-foreground shadow-gold hover:shadow-petal transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send your note"}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-5">
              {[
                { Icon: MapPin, t: "The Studio", d: "12 Rose Lane, Bandra West, Mumbai 400050" },
                { Icon: Phone, t: "Call or text", d: "+91 98765 43210" },
                { Icon: Mail, t: "Email", d: "hello@florence.studio" },
                { Icon: Clock, t: "Hours", d: "Mon — Sun ・ 10am to 8pm" },
                { Icon: Instagram, t: "Instagram", d: "@florence.studio" },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="glass rounded-2xl p-5 flex gap-4 items-start hover:shadow-soft transition-shadow duration-500">
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{t}</p>
                    <p className="font-serif text-lg mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container">
          <Reveal>
            <div className="rounded-[2rem] overflow-hidden shadow-soft border border-border">
              <iframe
                title="Florence Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C19.05%2C72.85%2C19.07&layer=mapnik"
                className="w-full h-[420px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Contact;
