import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import Reveal from "@/components/site/Reveal";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import { SEOHead } from "@/components/SEOHead";
import { pageMetadata } from "@/lib/seo";
import { link } from "fs";

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

    // Extract form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Create formatted message for WhatsApp
    const whatsappMessage = `Hello Florence! 🤍

I'm interested in booking your services.

*Personal Details:*
Name: ${name}
Phone: ${phone}
Email: ${email}

*Service Interested:* ${service}

*Message:*
${message}

Looking forward to hearing from you!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917600788388?text=${encodedMessage}`;

    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp. We'll be in touch within 24 hours. 🤍");
    }, 1100);
  };

  return (
    <main className="min-h-screen bg-background">
      <SEOHead
        title={pageMetadata.contact.title}
        description={pageMetadata.contact.description}
        keywords={pageMetadata.contact.keywords}
        canonicalUrl={pageMetadata.contact.canonicalUrl}
      />
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
                  <input required name="name" placeholder="Enter your name" className={inputCls} />
                </Field>
                <Field label="Phone">
                  <input required name="phone" type="tel" placeholder="Enter your mobile number" className={inputCls} />
                </Field>
              </div>
              <Field label="Email">
                <input required name="email" type="email" placeholder="Enter your email" className={inputCls} />
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
                { Icon: MapPin, t: "The Studio", d: "Shivranjani Park, beside Atulyam Angan 1, near Morbi OverBridge, Vrindavan Society, Madhapar, Rajkot, Gujarat 360006", link : "https://share.google/Vth38o2n6a2NQu6Os" },
                { Icon: Phone, t: "Call or text", d: "+91 7600788388" , link: "tel:+917600788388"},
                { Icon: Mail, t: "Email", d: "florencebeautystudio08@gmail.com", link: "mailto:florencebeautystudio08@gmail.com" },
                { Icon: Clock, t: "Hours", d: "Mon — Sun ・ 8am to 10pm" },
                { Icon: Instagram, t: "Instagram", d: "@__florence__beauty__", link: "https://www.instagram.com/__florence__beauty__?igsh=c3huMnRlbTJjbTUw" },
              ].map(({ Icon, t, d, link }) => (
                <a key={t} href={link} target={link?.startsWith("http") ? "_blank" : undefined} rel={link?.startsWith("http") ? "noopener noreferrer" : undefined} className={`glass rounded-2xl p-5 flex gap-4 items-start hover:shadow-soft transition-shadow duration-500 ${link ? "cursor-pointer" : ""}`}>
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-gradient-gold text-gold-foreground shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{t}</p>
                    <p className="font-serif text-lg mt-0.5">{d}</p>
                  </div>
                </a>
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
                title="Florence Beauty Studio location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.523281136142!2d70.7718361!3d22.3338621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c976b8d9d149%3A0x63a135a8e8d6c7cb!2sFlorence%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1778755928227!5m2!1sen!2sin"
                className="w-full h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
