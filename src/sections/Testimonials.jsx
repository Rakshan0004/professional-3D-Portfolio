import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Testimonials = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`flex-center section-padding reveal-container ${
        isVisible ? "reveal-active" : ""
      }`}
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-stretch">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <GlowCard card={testimonial} index={index} hFull={true}>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-white/5 border border-white/10">
                    {testimonial.imgPath.startsWith("/") ? (
                      <img
                        src={testimonial.imgPath}
                        alt={testimonial.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl">{testimonial.imgPath}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-white-50 text-xs md:text-sm">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

