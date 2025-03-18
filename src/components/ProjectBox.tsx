import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ProjectBoxProps } from "../utils/type";

const ProjectBox: React.FC<ProjectBoxProps> = ({
  id,
  titre,
  image,
  description,
  technologies,
  githubLink,
  demoLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={titre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent to-black/40"></div>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-lg text-slate-800 mb-2 truncate">
            {titre}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 2).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 2 && (
              <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                . . .
              </span>
            )}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 w-fit text-slate-600 hover:text-slate-900 hover:gap-2 transition-all duration-300"
          >
            Voir détails
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          id,
          titre,
          image,
          description,
          technologies,
          githubLink,
          demoLink,
        }}
      />
    </>
  );
};

export default ProjectBox;
