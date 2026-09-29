import { processSteps, securityPractices } from "../constants";

// Full-screen section: content is vertically centred within one viewport (minus the navbar)
const HowIWork = () => {
  return (
    <section id="process" className="flex-center section-padding">
      <div className="w-full md:px-10 max-w-6xl mx-auto flex flex-col justify-center py-10 lg:min-h-[calc(100dvh-6rem)]">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">How I Work</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] mt-4">
              From problem
              <br />
              to production.
            </h2>
          </div>
          <p className="text-white/50 md:text-lg max-w-sm lg:ml-auto lg:text-right">
            Most projects fail because the wrong thing gets built. So I start with the
            problem, not the code.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className={`pt-8 pb-2 pr-6 ${index > 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""} ${
                index % 2 === 1 ? "border-l border-white/10 pl-6 lg:pl-6" : ""
              }`}
            >
              <p className="text-5xl md:text-6xl font-semibold text-white/15 leading-none">{item.step}</p>
              <h3 className="text-white text-2xl font-semibold mt-5">{item.title}</h3>
              <p className="text-white/50 mt-2">{item.desc}</p>
            </li>
          ))}
        </ol>

        {/* Secure by default */}
        <div className="mt-12 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 border border-white/10 rounded-xl px-5 py-4">
          <p className="text-white text-sm font-semibold whitespace-nowrap">Secure by default</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            {securityPractices.map((practice) => (
              <li key={practice} className="text-white/50 text-sm flex items-center gap-2">
                <span className="size-1 rounded-full bg-white/40" />
                {practice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
