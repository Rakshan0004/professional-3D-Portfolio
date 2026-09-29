import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";
import { services } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

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
    <section id="services" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 max-w-7xl mx-auto">
        <TitleHeader
          title="How I Can Help"
          sub="🛠️ Ways to Work With Me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="card-border rounded-xl p-5 flex flex-col gap-3 hover:border-white/15 transition-colors duration-300"
            >
              <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              <p className="text-white-50 text-sm">{service.desc}</p>
              <ul className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-white/8">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="text-emerald-400"><CheckIcon /></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <p className="text-white/50 text-center">
            Not sure which one fits? Tell me the problem and I&apos;ll tell you.
          </p>
          <Button text="Start a Project" className="md:w-56 md:h-12 w-48 h-11" id="contact" />
        </div>
      </div>
    </section>
  );
};

export default Services;
