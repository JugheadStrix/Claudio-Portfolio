import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  BriefcaseBusiness,
  BarChartBigIcon,
  UserCircle,
} from "lucide-react";
import {
  competancesData,
  educationsData,
  experienceData,
} from "../data/ProjectData";
import { useTranslation } from "react-i18next";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const { t } = useTranslation();

  return (
    <section className="pt-24 lg:py-24" id="A_propos">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
          {t("about.titre")}
          <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#d7958c]/60 rounded-sm"></span>
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        {/* Experiance Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
        >
          {/* //! Profil */}
          <div className="flex items-center gap-3 mb-8">
            <UserCircle className="text-slate-700 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-slate-800">
              {t("about.profil")}
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 text-lg">{t("about.bio")}</p>
          </div>
          <div className="border-b mt-8"></div>
          {/* //! Experiance */}
          <div className="flex items-center gap-3 my-8">
            <BriefcaseBusiness className="text-slate-700 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-slate-800">
              {t("about.xp")}
            </h3>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <motion.div
                key={exp.id}
                variants={item}
                className="flex items-start gap-4"
              >
                <div className="flex flex-wrap gap-2 text-lg">
                  <span className="font-medium text-slate-800">
                    {exp.titre}
                  </span>
                  <i className="text-slate-800 font-thin">
                    {exp.lieu}, {exp.date}
                  </i>
                  <span className="text-slate-600 text-base ">{exp.theme}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 lg:order-2"
        >
          {/* //! Education */}
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-slate-700 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-slate-800">
              {t("about.boss")}
            </h3>
          </div>

          <div className="space-y-6">
            {educationsData.map((edu) => (
              <motion.div
                key={edu.id}
                variants={item}
                className="flex items-start gap-4"
              >
                <Sparkles className="text-blue-400 w-5 mt-1 h-5 flex-shrink-0" />
                <div className="flex flex-wrap gap-2 text-lg">
                  <span className="font-medium text-slate-800">
                    {edu.annee} :
                  </span>
                  <span className="text-slate-600">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="border-b mt-8"></div>
          {/* //! Competence */}
          <div className="flex items-center gap-3 my-8">
            <BarChartBigIcon className="text-slate-700 w-8 h-8" />
            <h3 className="text-2xl font-semibold text-slate-800">
              {t("about.competence")}
            </h3>
          </div>

          <div className="space-y-6">
            {competancesData.map((comp) => (
              <motion.div
                key={comp.id}
                variants={item}
                className="flex items-start gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-slate-800 text-lg">
                    {comp.competence} :
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {comp.lists.map((skill, index) => (
                      <span
                        key={index}
                        className="text-slate-600 bg-green-50 shadow-md px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
