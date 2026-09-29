import { socialImgs } from "../constants";

const labels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "X",
  instagram: "Instagram",
  leetcode: "LeetCode",
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Rakshan Chintala
        </p>

        <nav aria-label="Social links" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socialImgs.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              {labels[social.name] ?? social.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
