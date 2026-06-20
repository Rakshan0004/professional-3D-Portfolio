import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Throttle scroll event for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Rakshan CH
        </a>

        <nav className="desktop">
          <ul>
          {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a 
                  href={link} 
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = link.replace('#', '');
                    const target = document.getElementById(targetId);
                    if (target) {
                      const offset = window.innerHeight * 0.15;
                      const top = target.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-1.5"
                >
                  {name === "Live" && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("contact");
            if (target) {
              const offset = window.innerHeight * 0.15;
              const top = target.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          className="contact-btn group"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
