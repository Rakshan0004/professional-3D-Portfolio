import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer pb-10">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="socials flex items-center justify-center gap-5">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon"
            >
              <img 
                src={socialImg.imgPath} 
                alt={socialImg.name} 
                loading="lazy"
                decoding="async"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          ))}
        </div>
        <p className="text-white-50 text-center">
          © {new Date().getFullYear()} Rakshan Chintala
        </p>
      </div>
    </footer>
  );
};

export default Footer;
