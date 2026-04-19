import Reveal from "./Reveal";

const Story = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="container max-w-4xl text-center space-y-8">
      <Reveal>
        <p className="text-xs tracking-[0.4em] uppercase text-gold">Our Philosophy</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
          More than beauty. <br />
          <em className="text-gradient-gold not-italic font-medium">It's a feeling.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="gold-divider w-32 mx-auto" />
      </Reveal>
      <Reveal delay={0.3}>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          We believe beauty isn't a transformation — it's a remembering. A quiet
          return to the version of yourself who feels held, soft, unhurried.
          Every brush stroke, every curl, every glow is a love letter to that
          woman.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Story;
