import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaCode, FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-8 relative"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-primary relative inline-block">
            Marius
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Front End Web Developer with a passion for creating beautiful and
          functional websites. Focused on delivering modern and user-friendly
          experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="projects"
            className="
              group
              bg-primary hover:bg-white
              text-white hover:text-primary
              transition-all duration-300 ease-in-out
              px-8 py-4 rounded-full
              font-medium text-lg
              flex items-center gap-3
              transform hover:scale-105
              shadow-lg hover:shadow-primary/50
              cursor-pointer
              w-full sm:w-auto
              justify-center
            "
          >
            View Projects
            <motion.span className="inline-block" whileHover={{ x: 5 }}>
              <FaCode />
            </motion.span>
          </Link>

          <Link
            to="contact"
            className="
              group
              border-2 border-primary hover:border-white
              text-white
              transition-all duration-300 ease-in-out
              px-8 py-4 rounded-full
              font-medium text-lg
              flex items-center gap-3
              transform hover:scale-105
              cursor-pointer
              w-full sm:w-auto
              justify-center
            "
          >
            Get in touch
            <motion.span className="inline-block" whileHover={{ x: 5 }}>
              <FaPaperPlane />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      {/* Scroll Indicator */}
      {!hasScrolled ? (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
