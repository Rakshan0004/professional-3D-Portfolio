import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Handle success timeout
  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [success]);

  // Intersection Observer for lazy loading 3D scene
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "service_h80ngbw";
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "template_wjbwf2o";
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || "7PfPCTSnd4gZ-Mgkk";

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setSuccess(true);
      setForm({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Something went wrong sending your message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 max-w-7xl mx-auto">
        <TitleHeader
          title="Tell Me the Problem. I'll Design the System."
          sub="🚀 Start a Project"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
          <div>
            <div className="contact-form-card compact-form flex-center card-border rounded-2xl p-6 md:p-7 h-full relative overflow-hidden">
              {/* Form UI */}
              <div className={`w-full transition-all duration-500 ${success ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-3.5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="user_name">Your name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={form.user_name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email">Your Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={form.user_email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  </div>

                  <div>
                    <label htmlFor="message">What problem are you trying to solve?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's broken or missing today, who it affects, and your rough timeline & budget if you know them."
                      rows="4"
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm" role="alert">{error}</p>
                  )}

                  <button type="submit" className="w-full h-11 mt-1" disabled={loading}>
                    <div className="cta-button group">
                      <p className="text">
                        {loading ? "Sending..." : "Send Project Details"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              </div>

              {/* Success UI */}
              <div className={`absolute inset-0 flex-col-center gap-5 p-10 transition-all duration-500 ${success ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">Success!</h3>
                <p className="text-white-50 text-center">
                  Thanks! I'll read through your problem and get back to you with questions or a time for a quick call.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[320px] lg:h-[330px]">
            <div className="contact-3d-wrapper w-full h-full hover:cursor-grab rounded-3xl overflow-hidden relative">
              {isVisible ? (
                <ContactExperience />
              ) : (
                <div className="flex-center w-full h-full text-white">
                  Scroll to load 3D scene
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
