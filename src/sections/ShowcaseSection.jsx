import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const tagColors = [
  "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "bg-amber-500/15 text-amber-300 border-amber-500/30",
];

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, index, cardRef, featured }) => (
  <div
    ref={cardRef}
    id={project.id}
    className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-black-100 transition-all duration-500 hover:border-white/15 hover:-translate-y-1 ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    {/* Image */}
    <div className={`relative overflow-hidden ${featured ? "h-72 md:h-96" : "h-52 md:h-60"}`}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/30 to-transparent" />

      {/* Project number */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1">
        <span className="text-white/50 text-xs font-mono font-bold tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Hover overlay with CTA */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200"
          >
            <GithubIcon />
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
          >
            <ArrowUpRight />
            Live Demo
          </a>
        )}
      </div>
    </div>

    {/* Card Content */}
    <div className="p-6 flex flex-col gap-3">
      <h3 className={`font-bold text-white ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
        {project.title}
      </h3>
      <p className="text-white-50 text-sm md:text-base leading-relaxed">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom link row */}
      <div className="flex items-center gap-3 mt-2 pt-3 border-t border-white/5">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            <GithubIcon />
            <span>View Code</span>
          </a>
        )}
        {project.demoUrl && (
          <>
            <span className="text-white/20">·</span>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>Live</span>
              <ArrowUpRight />
            </a>
          </>
        )}
      </div>
    </div>
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top bottom-=100" },
      }
    );

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1 * (index % 2),
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top bottom-=80" },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      {/* Section Header */}
      <div ref={titleRef} className="mb-14">
        <p className="text-white-50 text-base md:text-lg mb-3 uppercase tracking-widest font-medium">
          Selected Work
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
            Projects I&apos;ve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Built
            </span>
          </h2>
          <p className="text-white-50 text-sm md:text-base max-w-sm">
            A mix of real-world client work, company projects, and personal builds.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-blue-500/50 via-purple-500/30 to-transparent" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            featured={project.featured}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
