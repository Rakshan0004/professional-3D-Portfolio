import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt=""
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7 lg:gap-[clamp(14px,3vh,28px)] lg:max-w-[55%] xl:max-w-none">
            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-[0.2em] gap-1 pb-2 md:pb-[0.133em]"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          loading="lazy"
                          className="md:size-[0.8em] size-7 md:p-[0.13em] p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Secure Systems</h1>
              <h1>that Actually Ship</h1>
            </div>

            <p className="text-white-50 md:text-xl max-w-xl relative z-10 pointer-events-none">
              I'm Rakshan. I design and build secure, production-ready
              software. Open to full-time roles, freelance and contract work.
            </p>

            <div className="flex flex-nowrap items-center gap-2 md:gap-3 pointer-events-auto relative z-20">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="hero-cta group"
              >
                <span>Let's Work Together</span>
                <span className="hero-cta-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>

              <a
                href="/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>Resume</span>
              </a>
            </div>

            <p className="hidden md:block text-white/40 text-sm relative z-10 pointer-events-none">
              Worked with teams in Canada · USA · India
            </p>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>


      {/* Mobile Scroll Helper: Explicit track on the right to navigate past 3D model */}
      <div className="md:hidden absolute right-0 top-0 w-20 h-screen z-[100] pointer-events-auto flex flex-col justify-center items-center touch-pan-y">
        <div className="w-1.5 h-32 bg-white/5 rounded-full relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 rounded-full animate-scroll-slider" />
        </div>
        <p className="text-[10px] text-white/20 uppercase vertical-text mt-4">Scroll Area</p>
      </div>
    </section>
  );
};

export default Hero;
