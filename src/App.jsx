import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

// Eager load critical components
import Hero from "./sections/Hero";

// Lazy load all other sections
const Experience = lazy(() => import("./sections/Experience"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LiveProjects = lazy(() => import("./sections/LiveProjects"));
const TechStack = lazy(() => import("./sections/TechStack"));
const HowIWork = lazy(() => import("./sections/HowIWork"));
const Services = lazy(() => import("./sections/Services"));
const Contact = lazy(() => import("./sections/Contact"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Footer = lazy(() => import("./sections/Footer"));

// Lazy load pages
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const LiveProjectsPage = lazy(() => import("./pages/LiveProjectsPage"));
const LiveProjectDetailPage = lazy(() => import("./pages/LiveProjectDetailPage"));

// Simple loading component
const SectionLoader = () => (
  <div className="flex-center" style={{ minHeight: "50vh" }}>
    <div className="text-white-50 text-xl">Loading...</div>
  </div>
);

const HomePage = () => (
  <>
    {/* 1. Hero — positioning: problem → system → secure build */}
    <Hero />

    {/* 3. How I Work — the process, plus security evidence */}
    <Suspense fallback={<SectionLoader />}>
      <HowIWork />
    </Suspense>

    {/* 4. Case Studies — problem, constraint, decision, result */}
    <Suspense fallback={<SectionLoader />}>
      <ShowcaseSection />
    </Suspense>

    {/* 5. Experience — who I've built for */}
    <Suspense fallback={<SectionLoader />}>
      <Experience />
    </Suspense>

    {/* 6. Live Projects — "these are actually running in production" */}
    <Suspense fallback={<SectionLoader />}>
      <LiveProjects />
    </Suspense>

    {/* 7. Services — ways to work together */}
    <Suspense fallback={<SectionLoader />}>
      <Services />
    </Suspense>

    {/* 9. Tech Stack — skills that back up the work */}
    <Suspense fallback={<SectionLoader />}>
      <TechStack />
    </Suspense>

    {/* 10. FAQ — client questions and objections */}
    <Suspense fallback={<SectionLoader />}>
      <FAQ />
    </Suspense>

    {/* 11. Contact — CTA */}
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </>
);

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<SectionLoader />}>
            <ProjectsPage />
          </Suspense>
        }
      />
      <Route
        path="/projects/:id"
        element={
          <Suspense fallback={<SectionLoader />}>
            <ProjectDetailPage />
          </Suspense>
        }
      />
      <Route
        path="/live"
        element={
          <Suspense fallback={<SectionLoader />}>
            <LiveProjectsPage />
          </Suspense>
        }
      />
      <Route
        path="/live/:id"
        element={
          <Suspense fallback={<SectionLoader />}>
            <LiveProjectDetailPage />
          </Suspense>
        }
      />
    </Routes>
  </>
);

export default App;
