import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { ProjectModalProps } from "../utils/type";

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative rounded-2xl backdrop-blur-md shadow-xl max-w-2xl w-full max-h-[80vh] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-neutral-300"
            style={{
              backgroundImage: `linear-gradient(to bottom, #ffffffdb, #ddddddd1), url(${project.image})`,
              backgroundColor: "black",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 bg-[#ff7474] rounded-md shadow-md text-white hover:bg-red-500 transition-color duration-300 transform"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            {/* <div className="p- bg-slate-200">
              <img
                src={project.image}
                alt={project.titre}
                className="w-full h-72 rounded-md object-cover"
              />
            </div> */}

            {/* Modal Content */}
            <div className="p-6 space-y-6 border-slate-400">
              <h3 className="text-2xl font-bold text-slate-800">
                {project.titre}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100 border border-gray-200 shadow text-slate-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {/* Bouton Code */}
                <a
                  href={project.githubLink || "#"}
                  target={project.githubLink ? "_blank" : undefined}
                  rel={project.githubLink ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    project.githubLink
                      ? "bg-slate-800 text-white hover:bg-slate-700"
                      : "bg-slate-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>

                {/* Bouton Demo */}
                <a
                  href={project.demoLink || "#"}
                  target={project.demoLink ? "_blank" : undefined}
                  rel={project.demoLink ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 transition-colors ${
                    project.demoLink
                      ? "border border-slate-200 text-black hover:bg-slate-50"
                      : "border border-slate-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
