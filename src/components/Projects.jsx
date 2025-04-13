import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import s2Design from "../assets/images/projects/InteriorDesign.webp";
import MTRadio from "../assets/images/projects/MTRadio.webp";

const projects = [
  {
    title: "Interior Design Concept",
    description:
      "S2Design is a project I created with my touch of creativity and vision. Its made as a project to evolve my skillset in design, making it the perfect platform to learn and grow.",
    image: s2Design,
    github: "https://github.com/MariusTanase/S2Design-GiG",
    live: "https://interiordesignmt.netlify.app",
  },
  {
    title: "MTRadio",
    description:
      "I created MTRadio as a personal project to enhance my skills with a project that can take many directions. There are many features that are going to be added or changed in the future.",
    image: MTRadio,
    github: "https://github.com/MariusTanase/Radio-Marius-Tanase",
    live: "https://radio-mt.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-primary mb-12">Projects</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                {project.title}
              </h3>
              <p className="text-lg">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-white hover:text-primary transition-colors px-6 py-2 rounded-lg inline-flex items-center gap-2"
                >
                  <FaCode />
                  Github
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-white hover:text-primary transition-colors px-6 py-2 rounded-lg inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Visit
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
