import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";

// Eager load critical components
import Hero from "./sections/Hero";

// Lazy load all other sections
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LiveProjects = lazy(() => import("./sections/LiveProjects"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Education = lazy(() => import("./sections/Education"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Simple loading component
const SectionLoader = () => (
  <div className="flex-center" style={{ minHeight: "50vh" }}>
    <div className="text-white-50 text-xl">Loading...</div>
  </div>
);

const App = () => (
  <>
    <Navbar />

    {/* 1. Hero — first impression */}
    <Hero />

    {/* 2. What I Do — immediately answer "who is this?" */}
    <Suspense fallback={<SectionLoader />}>
      <FeatureCards />
    </Suspense>

    {/* 3. Experience — strongest credential up front */}
    <Suspense fallback={<SectionLoader />}>
      <Experience />
    </Suspense>

    {/* 4. Projects — "here's what I built" */}
    <Suspense fallback={<SectionLoader />}>
      <ShowcaseSection />
    </Suspense>

    {/* 5. Live Projects — "these are actually running in production" */}
    <Suspense fallback={<SectionLoader />}>
      <LiveProjects />
    </Suspense>

    {/* 6. Logo Showcase — social proof after seeing the work */}
    <Suspense fallback={<SectionLoader />}>
      <LogoShowcase />
    </Suspense>

    {/* 7. Tech Stack — skills that back up the work */}
    <Suspense fallback={<SectionLoader />}>
      <TechStack />
    </Suspense>

    {/* 8. Education — supporting credential */}
    <Suspense fallback={<SectionLoader />}>
      <Education />
    </Suspense>

    {/* 9. Testimonials — final social proof before CTA */}
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>

    {/* 10. Contact + Footer — CTA */}
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>

    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </>
);

export default App;
