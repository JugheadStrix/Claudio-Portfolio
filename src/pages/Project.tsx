import React from "react";
import ProjectBox from "../components/ProjectBox";
import { projectData } from "../data/ProjectData";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Project: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24" id="Projets">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
            {t("project.titre")}
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#d7958c]/60 rounded-sm"></span>
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectBox
              key={project.id}
              id={project.id}
              titre={t(project.titre)}
              image={project.image}
              description={t(project.description)}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white shadow-lg p-6 flex flex-col items-center text-center gap-4 overflow-hidden rounded-xl"
          >
            <div className="relative z-10 m-auto">
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  {t("project.sous_titre1")}
                </h3>
                <p className="text-gray-600 mt-6 mb-4">
                  {t("project.sous_titre2")}
                </p>
                <a
                  href="#Contact"
                  className="inline-flex mt-4 items-center bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  {t("project.btn")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
