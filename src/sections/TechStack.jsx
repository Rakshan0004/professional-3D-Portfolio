import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { stackGroups } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons";

// Bento layout by position: first tile is the tall feature tile
const tileLayout = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
];

// Full class strings so Tailwind can see them
const accents = {
  purple: { dot: "bg-purple-400", text: "text-purple-300", glow: "bg-purple-500/15", hover: "hover:border-purple-500/35" },
  blue: { dot: "bg-blue-400", text: "text-blue-300", glow: "bg-blue-500/15", hover: "hover:border-blue-500/35" },
  amber: { dot: "bg-amber-400", text: "text-amber-300", glow: "bg-amber-500/15", hover: "hover:border-amber-500/35" },
  cyan: { dot: "bg-cyan-400", text: "text-cyan-300", glow: "bg-cyan-500/15", hover: "hover:border-cyan-500/35" },
  emerald: { dot: "bg-emerald-400", text: "text-emerald-300", glow: "bg-emerald-500/15", hover: "hover:border-emerald-500/35" },
  rose: { dot: "bg-rose-400", text: "text-rose-300", glow: "bg-rose-500/15", hover: "hover:border-rose-500/35" },
};

const TechChip = ({ item, dot, large }) => (
  <span
    className={`flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/8 text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors duration-200 ${
      large ? "px-4 py-2 text-sm md:text-base" : "px-3 py-1.5 text-sm"
    }`}
  >
    {item.icon ? (
      <img
        src={`${DEVICON}/${item.icon}.svg`}
        alt=""
        loading="lazy"
        className={`${large ? "w-5 h-5" : "w-4 h-4"} object-contain ${item.invert ? "invert brightness-90" : ""}`}
      />
    ) : (
      <span className={`${large ? "w-2 h-2" : "w-1.5 h-1.5"} rounded-full ${dot}`} />
    )}
    {item.name}
  </span>
);

const TechStack = () => {
  const tileRefs = useRef([]);

  useGSAP(() => {
    tileRefs.current.forEach((tile, index) => {
      if (!tile) return;
      gsap.fromTo(tile, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, delay: 0.06 * index, ease: "power3.out",
        scrollTrigger: { trigger: tile, start: "top bottom-=40" },
      });
    });
  }, []);

  return (
    <section id="skills" className="section-padding min-h-screen flex items-center py-16">
      <div className="w-full md:px-10 max-w-6xl mx-auto">
        <TitleHeader
          title="What I Build With"
          sub="🧰 Stack"
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {stackGroups.map((group, index) => {
            const a = accents[group.accent] ?? accents.blue;
            const large = index === 0;
            return (
              <div
                key={group.label}
                ref={(el) => (tileRefs.current[index] = el)}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0e0e10] p-5 flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-1 ${a.hover} ${tileLayout[index] ?? ""} ${large ? "sm:col-span-2" : ""}`}
              >
                <div className={`absolute -bottom-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-40 group-hover:opacity-90 transition-opacity duration-500 ${a.glow}`} />

                <div className="relative flex items-center justify-between">
                  <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${a.text}`}>
                    <span className={`w-2 h-2 rounded-full ${a.dot}`} />
                    {group.label}
                  </p>
                  <span className="text-xs text-white/25">{group.items.length} tools</span>
                </div>

                <p className={`relative text-white/55 ${large ? "text-base md:text-lg" : "text-sm"}`}>{group.note}</p>

                <div className={`relative ${large ? "flex-1 grid auto-rows-fr gap-2 mt-1" : "flex flex-wrap gap-2 mt-1"}`}>
                  {group.items.map((item) => (
                    <TechChip key={item.name} item={item} dot={a.dot} large={large} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
