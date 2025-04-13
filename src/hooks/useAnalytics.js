// hooks/useAnalytics.js
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function useAnalytics() {
  useEffect(() => {
    ReactGA.initialize("G-4XDLL8YMBL");

    // Track initial page view
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Example of tracking certain scroll-depth events
    const trackEvent = (category, action) => {
      ReactGA.event({
        category,
        action,
      });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / height) * 100;

      if (scrollPercent > 25) trackEvent("Scroll", "25%");
      if (scrollPercent > 50) trackEvent("Scroll", "50%");
      if (scrollPercent > 75) trackEvent("Scroll", "75%");
      if (scrollPercent > 90) trackEvent("Scroll", "90%");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
