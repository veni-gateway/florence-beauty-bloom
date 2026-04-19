import { useRef, useState } from "react";
import Reveal from "./Reveal";

const Transformation = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(5, Math.min(95, p)));
  };

  return (
    <section className="py-28 relative">
      <div className="container">
        <Reveal>
          <div className="text-center mb-12 space-y-4">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">Transformations</p>
            <h2 className="font-serif text-5xl md:text-6xl">
              The same you, <em className="text-gradient-gold not-italic">just glowing</em>.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Drag to reveal. No filters. Just light, skin, and a little Florence magic.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            ref={ref}
            onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onClick={(e) => handleMove(e.clientX)}
            className="relative mx-auto max-w-5xl aspect-[16/9] rounded-[2rem] overflow-hidden shadow-petal cursor-ew-resize select-none"
          >
            {/* After */}
            <div className="absolute inset-0 bg-gradient-to-br from-blush via-ivory to-lavender">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center space-y-3 px-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold">After</p>
                  <p className="font-serif text-4xl md:text-5xl text-primary">Radiant. Held. Yours.</p>
                </div>
              </div>
            </div>
            {/* Before clipped */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-muted via-nude to-secondary"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center space-y-3 px-8" style={{ marginRight: `${100 - pos}%`, transform: `translateX(${(100 - pos) / 2}%)` }}>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Before</p>
                  <p className="font-serif text-4xl md:text-5xl text-foreground/70">Tired. Quiet.</p>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute top-0 bottom-0 w-px bg-gradient-gold pointer-events-none"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-gold shadow-gold grid place-items-center text-gold-foreground">
                <span className="text-xs">◂ ▸</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Transformation;
