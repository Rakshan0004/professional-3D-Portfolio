import { Link } from "react-router-dom";

import TitleHeader from "../components/TitleHeader";
import { caseStudies } from "../constants";

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CaseStudyCard = ({ study }) => {
  const Wrapper = study.link ? "a" : "article";
  const linkProps = study.link
    ? { href: study.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group flex flex-col rounded-xl border border-white/10 p-5 hover:border-white/30 transition-colors duration-300"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-widest text-white/40">{study.label}</p>
        {study.link && (
          <span className="text-white/40 group-hover:text-white group-hover:-rotate-45 transition-all duration-300">
            <Arrow />
          </span>
        )}
      </div>

      <h3 className="text-white text-2xl font-semibold mt-3">{study.title}</h3>
      <p className="text-white/80 mt-2">{study.problem}</p>
      <p className="text-white/45 text-sm mt-2 flex-1">{study.built}</p>

      <p className="text-white/35 text-xs mt-5 pt-4 border-t border-white/10">
        {study.tags.join("  ·  ")}
      </p>
    </Wrapper>
  );
};

const ShowcaseSection = () => {
  return (
    <section id="work" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 max-w-6xl mx-auto">
        <TitleHeader title="Problems I've Solved" sub="Case Studies" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
          >
            View all projects
            <span className="group-hover:translate-x-0.5 transition-transform duration-300"><Arrow /></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
