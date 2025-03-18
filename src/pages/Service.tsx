import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { servicesData } from "../data/ProjectData";
import { useTranslation } from "react-i18next";
import React from "react";

const Service = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24" id="Services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
            {t("service.titre")}
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#d7958c]/60 rounded-sm"></span>
          </h2>
          <p className="text-lg text-slate-600 mt-8 max-w-3xl mx-auto">
            {t("service.desc")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon as React.ComponentType<{
              className: string;
            }>;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <IconComponent className="w-12 h-12 text-[#b36c64] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {t(service.title)}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {t(service.description)}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-slate-50 text-slate-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-white to-[#F0A79DFF]/40 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              {t("service.sub_title")}
            </h3>
            <p className="text-slate-600 mb-6">{t("service.desc_title")}</p>
            <a
              href="#Contact"
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300"
            >
              {t("service.btn")}
            </a>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
            <Code className="w-full h-full text-slate-800" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
