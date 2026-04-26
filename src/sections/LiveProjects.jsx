import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { liveProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// Icon components inline to avoid dependencies
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AdminIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const AndroidIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm-11 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zM3.513 9.81l-1.8-3.117a.5.5 0 0 1 .866-.5l1.823 3.155A10.9 10.9 0 0 1 12 7.5c2.91 0 5.547 1.135 7.597 2.99l1.824-3.156a.5.5 0 0 1 .866.5L20.487 10.8C22.6 12.64 24 15.257 24 18.22c0 .166-.006.33-.017.493H.017A8.57 8.57 0 0 1 0 18.22c0-2.963 1.4-5.58 3.513-7.41z"/>
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

const getIcon = (type) => {
  switch (type) {
    case "globe": return <GlobeIcon />;
    case "admin": return <AdminIcon />;
    case "android": return <AndroidIcon />;
    case "apple": return <AppleIcon />;
    default: return <GlobeIcon />;
  }
};

// Tag color palette cycling
const tagColors = [
  "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "bg-rose-500/15 text-rose-300 border-rose-500/30",
];

const LiveBadge = () => (
  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 w-fit">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Live</span>
  </div>
);

const ProjectCard = ({ project, cardRef, featured }) => (
  <div
    ref={cardRef}
    className={`card group relative rounded-2xl overflow-hidden border border-white/5 bg-black-100 transition-all duration-500 hover:border-white/10 hover:-translate-y-1 ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    {/* Screenshot */}
    <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-52 md:h-60"}`}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/20 to-transparent" />

      {/* Live badge floating on image */}
      <div className="absolute top-4 left-4">
        <LiveBadge />
      </div>
    </div>

    {/* Card Content */}
    <div className="p-6 flex flex-col gap-4">
      <div>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{project.tagline}</p>
        <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-white-50 text-sm md:text-base leading-relaxed">{project.description}</p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link Buttons */}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm text-white/80 hover:text-white"
          >
            <span className="text-white/60 group-hover/btn:text-white transition-colors">{getIcon(link.icon)}</span>
            <span>{link.label}</span>
            {link.note && (
              <span className="text-[10px] text-white/30 hidden md:inline">({link.note})</span>
            )}
            <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity text-white/50">
              <ExternalIcon />
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const LiveProjects = () => {
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
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
        },
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
          delay: 0.12 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        }
      );
    });
  }, []);

  return (
    <section id="live-projects" ref={sectionRef} className="section-padding">
      {/* Section Header */}
      <div ref={titleRef} className="text-center mb-14">
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Live in Production</span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
          Projects You Can Visit{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Right Now
          </span>
        </h2>
        <p className="mt-4 text-white-50 text-base md:text-lg max-w-xl mx-auto">
          Real products, real users — click any link below and explore them live.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {liveProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={project.featured}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;
