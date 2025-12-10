import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for Intersection Observer
 * Used to lazy load components when they enter the viewport
 * 
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of visibility (0-1)
 * @param {string} options.rootMargin - Margin around root (e.g., "100px")
 * @returns {Object} { ref, isVisible }
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  const {
    threshold = 0.1,
    rootMargin = "100px",
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: elementRef, isVisible };
};

export default useIntersectionObserver;


