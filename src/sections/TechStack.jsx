import TitleHeader from "../components/TitleHeader";
import { stackGroups } from "../constants";

const TechStack = () => {
  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 max-w-6xl mx-auto">
        <TitleHeader
          title="What I Build With"
          sub="🧰 Stack"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden border border-white/8 bg-white/8">
          {stackGroups.map((group) => (
            <div key={group.label} className="bg-black-100 p-5">
              <p className="text-[11px] uppercase tracking-widest text-blue-50 font-semibold mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/8 text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
