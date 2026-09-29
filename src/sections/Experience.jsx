import { useState } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import ResumeButton from "../components/ResumeButton";

// Tabbed layout: one role visible at a time keeps the section within a single screen
const Experience = () => {
  const [active, setActive] = useState(0);
  const card = expCards[active];

  return (
    <section id="experience" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 max-w-6xl mx-auto">
        <TitleHeader
          title="Where I've Built"
          sub="💼 Startups, Clients & Teams"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Company list */}
          <div
            role="tablist"
            aria-label="Companies"
            className="lg:col-span-4 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-white/10"
          >
            {expCards.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={`${item.company}-${item.date}`}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(index)}
                  className={`text-left flex-shrink-0 px-4 py-3 transition-colors duration-200 border-b-2 lg:border-b-0 lg:border-l-2 lg:-ml-px ${
                    selected
                      ? "border-purple-400 bg-white/[0.04] text-white"
                      : "border-transparent text-white/45 hover:text-white/80 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className="flex items-center gap-2 font-medium whitespace-nowrap">
                    {item.company}
                    {index === 0 && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                    )}
                  </span>
                  <span className="hidden lg:block text-xs text-white/35 mt-0.5">{item.date}</span>
                </button>
              );
            })}
          </div>

          {/* Selected role */}
          <div role="tabpanel" key={active} className="lg:col-span-8 exp-panel-enter">
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              {card.title} <span className="text-purple-300">· {card.company}</span>
            </h3>
            <p className="text-white/40 text-sm mt-1">
              {card.date} · {card.location}
            </p>

            <p className="text-white/80 mt-4">{card.summary}</p>

            <ul className="mt-4 space-y-2.5">
              {card.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                  <span className="mt-2 size-1 rounded-full bg-purple-300 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {card.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <ResumeButton className="md:w-36 md:h-12 w-28 h-11" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
