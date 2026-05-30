import { logoIconsList } from "../constants";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img 
        src={icon.imgPath} 
        alt={icon.name} 
        loading="lazy"
        decoding="async"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};

const LogoShowcase = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`md:my-10 my-5 relative reveal-element ${
        isVisible ? "reveal-active" : ""
      }`}
    >
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-24">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;

