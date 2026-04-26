import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 items-stretch">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index} hFull={true}>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10">
                  {testimonial.imgPath.startsWith("/") ? (
                    <img
                      src={testimonial.imgPath}
                      alt={testimonial.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">{testimonial.imgPath}</span>
                  )}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
