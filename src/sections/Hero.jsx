import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import ResumeButton from "../components/ResumeButton";
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
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          loading="lazy"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Rakshan, a Software Developer based in India with a passion for
              building innovative solutions.
            </p>

            <div className="flex flex-row items-center gap-3 md:gap-6 pointer-events-auto">
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-44 h-12"
                id="counter"
              />

              <ResumeButton
                className="md:w-48 md:h-16 w-32 h-12"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />

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
