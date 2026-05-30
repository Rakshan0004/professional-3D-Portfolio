import { abilities } from "../constants";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FeatureCards = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full padding-x-lg reveal-container ${
        isVisible ? "reveal-active" : ""
      }`}
    >
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            className="card-border rounded-xl p-6 flex flex-col gap-4 reveal-item"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="size-12 flex items-center justify-center rounded-full">
              <img 
                src={imgPath} 
                alt={title} 
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-white text-xl font-semibold mt-1">{title}</h3>
            <p className="text-white-50 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;