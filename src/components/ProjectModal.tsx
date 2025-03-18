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
            className="bg-white relative rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-neutral-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 bg-gray-100 text-gray-700 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="p-4 bg-slate-200">
              <img
                src={project.image}
                alt={project.titre}
                className="w-full h-72 rounded-md object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 border border-t-4 border-slate-400">
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
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
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
