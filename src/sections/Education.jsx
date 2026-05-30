import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationData } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    // Animate education cards as they come into view
    gsap.utils.toArray(".education-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  });

  return (
    <section id="education" className="flex-center section-padding">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Educational Background"
          sub="🎓 My Academic Journey"
        />
        <div className="mt-10 grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-border rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-base md:text-lg text-white-50 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right md:text-right text-left">
                    <p className="text-white-50 mb-1 text-sm md:text-base">📅 {edu.period}</p>
                    <p className="text-white-50 text-sm md:text-base">📊 GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
