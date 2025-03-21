import img from "../assets/images/photo.jpg";
import { motion } from "framer-motion";
import {
  BellRing,
  Braces,
  CloudCog,
  Code2Icon,
  Database,
  FileDown,
  Github,
  LayoutDashboard,
  PenTool,
  ScanQrCode,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Accueil = () => {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/Claudio-Portfolio/CV1.pdf";
    link.download = "CV RAKOTONDRABE_Kantoarimiora_Claudio.pdf";
    link.click();
  };

  const { t } = useTranslation();

  return (
    <div
      id="Accueil"
      className="px-4 sm:px-6 lg:px-8 pb-10 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative space-y-6 sm:space-y-8 text-center lg:text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 bg-none"
            >
              <h1
                style={{ lineHeight: "3.3rem" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] flex flex-wrap items-center font-bold text-slate-800 font-sans tracking-tight leading-tight"
              >
                <span className="text-center lg:text-left w-full">
                  RAKOTONDRABE
                </span>
                <span className="text-center lg:text-left w-full">
                  Kantoarimiora Claudio
                </span>
                <p
                  style={{ lineHeight: "3.3rem" }}
                  className="text-[#d7958c] m-auto text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] mt-2 hover:text-[#b36c64] transition-colors duration-300 leading-tight"
                >
                  {t("accueil.titre1")}
                  <br />
                  {t("accueil.titre2")}
                </p>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: -0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t("accueil.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                onClick={downloadCv}
                className="group flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FileDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
                <span
                  className="font-medium"
                  dangerouslySetInnerHTML={{ __html: t("accueil.bouton") }}
                />
              </button>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-4/6 sm:w-4/6 md:w-3/5 lg:w-1/2 relative mt-6"
          >
            <div className="relative">
              {/* 3D Background Decorative Layer */}
              <div className="absolute inset-0 -translate-x-2 -translate-y-3 bg-gradient-to-bl from-[#FFE46AFF]/70 to-[#CDFFB6FF]/20 custom-rounded1 shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_4px_8px_rgba(255,255,255,0.1)] transform rotate-6 scale-105" />

              <img
                src={img}
                alt="Photo de profil"
                className="relative custom-rounded shadow-[0_10px_30px_rgba(0,0,0,0.4),inset_0_4px_8px_rgba(255,255,255,0.1)] object-cover w-full aspect-square transform transition-transform duration-500"
              />
            </div>

            {/* 3D Badge */}
            <div className="opacity-0 absolute bottom-4 animate-bounce right-4 sm:bottom-6 sm:right-6">
              <div className="cube-wrapper-modern">
                <div className="cube-modern">
                  {/* Front Face */}
                  <div className="face-modern front-modern bg-gradient-to-br from-blue-500/30 to-indigo-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <Code2Icon className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="face-modern back-modern bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <Sparkles className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Left Face */}
                  <div className="face-modern left-modern bg-gradient-to-br from-green-500/30 to-teal-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <LayoutDashboard className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Right Face */}
                  <div className="face-modern right-modern bg-gradient-to-br from-yellow-500/30 to-orange-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <ScanQrCode className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Top Face */}
                  <div className="face-modern top-modern bg-gradient-to-br from-red-500/30 to-rose-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <Database className="-rotate-90 text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Bottom Face */}
                  <div className="face-modern bottom-modern bg-gradient-to-br from-cyan-500/30 to-sky-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <BellRing className="-rotate-90 text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 animate-bounce right-4 sm:bottom-6 sm:right-6">
              <div className="cube-wrapper-modern">
                <div className="cube-modern">
                  {/* Front Face: Coding */}
                  <div className="face-modern front-modern bg-gradient-to-br from-blue-500/30 to-indigo-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <Braces className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Back Face: Cloud & Deployment */}
                  <div className="face-modern back-modern bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <CloudCog className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Left Face: UX/UI Design */}
                  <div className="face-modern left-modern bg-gradient-to-br from-green-500/30 to-teal-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <Database className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Right Face: Networking */}
                  <div className="face-modern right-modern bg-gradient-to-br from-yellow-500/30 to-orange-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <PenTool className="text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Top Face: Databases */}
                  <div className="face-modern top-modern bg-gradient-to-br from-red-500/30 to-rose-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <BellRing className="-rotate-90 text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>

                  {/* Bottom Face: Frameworks & Layers */}
                  <div className="face-modern bottom-modern bg-gradient-to-br from-cyan-500/30 to-sky-500/30 backdrop-blur-md">
                    <div className="face-content">
                      <Github className="-rotate-90 text-white/80 w-8 h-8" />
                      <div className="face-shadow absolute inset-0 bg-black/10 opacity-30 blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Decorative Dots */}
            <div className="absolute -left-4 -bottom-0 w-24 h-24 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8E8EFF]/50 via-[#FFE6C3FF]/40 to-transparent backdrop-blur-sm rounded-full shadow-lg ring-1 ring-green-200/30 transition-all duration-300 transform">
                <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="absolute -right-12 top-8 w-16 h-16 bg-gradient-to-tr from-[#ffffff] via-slate-200 to-blue-200 backdrop-blur-md rounded-full shadow-[0_6px_12px_rgba(0,0,0,0.3)] hidden lg:block animate-spin-slow" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
