import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";

// Eager load critical components
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";

// Lazy load non-critical components
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const Education = lazy(() => import("./sections/Education"));
const TechStack = lazy(() => import("./sections/TechStack"));
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
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    
    <Suspense fallback={<SectionLoader />}>
      <FeatureCards />
    </Suspense>
    
    <Suspense fallback={<SectionLoader />}>
      <Experience />
    </Suspense>
    
    <Suspense fallback={<SectionLoader />}>
      <Education />
    </Suspense>
    
    <Suspense fallback={<SectionLoader />}>
      <TechStack />
    </Suspense>
    
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>
    
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>
    
    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </>
);

export default App;
