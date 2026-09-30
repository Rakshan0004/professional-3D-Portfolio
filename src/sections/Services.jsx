import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";
import { services } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Full class strings so Tailwind can see them
const accents = {
  blue: { line: "via-blue-400/70", glow: "bg-blue-500/15", pill: "bg-blue-500/10 text-blue-200 border-blue-500/25", hover: "hover:border-blue-500/30" },
  purple: { line: "via-purple-400/70", glow: "bg-purple-500/15", pill: "bg-purple-500/10 text-purple-200 border-purple-500/25", hover: "hover:border-purple-500/30" },
  cyan: { line: "via-cyan-400/70", glow: "bg-cyan-500/15", pill: "bg-cyan-500/10 text-cyan-200 border-cyan-500/25", hover: "hover:border-cyan-500/30" },
  emerald: { line: "via-emerald-400/70", glow: "bg-emerald-500/15", pill: "bg-emerald-500/10 text-emerald-200 border-emerald-500/25", hover: "hover:border-emerald-500/30" },
};

const Services = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, delay: 0.1 * index, ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top bottom-=60" },
      });
    });
  }, []);

  return (
    <section id="services" className="section-padding min-h-screen flex items-center py-16">
      <div className="w-full md:px-10 max-w-6xl mx-auto">
        <TitleHeader
          title="How I Can Help"
          sub="🛠️ Ways to Work With Me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {services.map((service, index) => {
            const a = accents[service.accent] ?? accents.blue;
            return (
              <div
                key={service.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0e0e10] p-6 md:px-7 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 ${a.hover}`}
              >
                <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent`} />
                <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${a.glow}`} />
                <span className="absolute top-4 right-6 text-6xl font-bold text-white/[0.04] select-none leading-none">
                  0{index + 1}
                </span>

                <h3 className="relative text-white text-xl md:text-2xl font-semibold pr-16">{service.title}</h3>
                <p className="relative text-white/60 text-sm md:text-base leading-relaxed">{service.desc}</p>
                <div className="relative flex flex-wrap gap-2 mt-auto pt-1">
                  {service.points.map((point) => (
                    <span key={point} className={`text-xs px-3 py-1 rounded-full border ${a.pill}`}>
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-white/8 bg-gradient-to-r from-white/[0.03] to-transparent p-5 md:px-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white text-lg font-semibold">Not sure which one fits?</p>
            <p className="text-white/50 text-sm">Tell me the problem and I&apos;ll tell you.</p>
          </div>
          <Button text="Start a Project" className="md:w-56 md:h-12 w-48 h-11" id="contact" />
        </div>
      </div>
    </section>
  );
};

export default Services;
