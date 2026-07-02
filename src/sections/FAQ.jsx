import { useState } from "react";
import { faqData } from "../constants";
import TitleHeader from "../components/TitleHeader";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-medium pr-8">{question}</span>
        <span className="flex-shrink-0 w-8 h-8 flex-center rounded-full border border-white/20 text-white-50 transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white-50 text-base md:text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`flex-center section-padding reveal-container ${
        isVisible ? "reveal-active" : ""
      }`}
    >
      <div className="w-full max-w-5xl lg:max-w-6xl h-full md:px-10 px-5 mx-auto">
        <TitleHeader
          title="Frequently Asked Questions"
          sub="GOT QUESTIONS?"
        />

        <div className="mt-16 reveal-item">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
