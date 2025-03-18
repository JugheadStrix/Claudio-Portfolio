import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinksData, socialLinksData } from "../data/ProjectData";
import logo from "../assets/images/logo.png";
// import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import fr from "../assets/images/icons8_france.png";
import en from "../assets/images/icons8_great_britain.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const { i18n, t } = useTranslation();

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
  ];

  const drawerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <header
      className={
        "fixed max-w-5xl w-full top-0 z-50 transition-all duration-300 bg-[#eeeeee] md:bg-slate-50 shadow-sm"
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ rotate: -40 }}
            animate={{ rotate: 0 }}
            className="text-rose-400 text-3xl"
          >
            <img src={logo} className="object-contain h-8 scale-[1.6]" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinksData.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinksData.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
                aria-label={label}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Hello world!"
                data-tooltip-place="bottom"
              >
                <Icon className="w-5 h-5" />
                {/* <Tooltip /> */}
              </a>
            ))}

            <div>&nbsp;&nbsp;&nbsp;</div>

            <div className="relative">
              <div
                className="flex px-3 py-1 border border-slate-800/20 w-24 rounded-md items-center justify-between bg-white/5 backdrop-blur-sm hover:border-slate-800/40 transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpenDrop(!isOpenDrop)}
              >
                <img
                  src={selectedLanguage === "fr" ? fr : en}
                  width={18}
                  alt="logo_lng"
                  className="object-contain scale-125 border-gray-500 rounded-full"
                />
                <div className="flex gap-2 items-center text-slate-800">
                  <span className="font-medium">{selectedLanguage}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {isOpenDrop && (
                  <motion.div
                    className="absolute top-full mt-2 w-full bg-white/10 backdrop-blur-lg border border-slate-800/10 rounded-md shadow-lg overflow-hidden z-50"
                    variants={drawerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {languages.map((lang) => (
                      <motion.div
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setSelectedLanguage(lang.code);
                          setIsOpenDrop(false);
                        }}
                        variants={itemVariants}
                        className={`px-3 py-2 flex justify-between items-center hover:bg-slate-800/10 transition-colors cursor-pointer ${
                          selectedLanguage === lang.code ? "bg-slate-800/5" : ""
                        }`}
                      >
                        <span>{lang.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-500 hover:text-slate-900 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white/80 backdrop-blur-sm absolute left-0 right-0 shadow-lg rounded-b-lg"
            >
              <nav className="px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navLinksData.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    >
                      {t(link.labelKey)}
                    </a>
                  ))}
                </div>
                <div className="flex space-x-6 items-center py-4 border-t border-gray-400 mt-4">
                  {socialLinksData.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}

                  <div className="relative">
                    <div
                      className="flex px-3 py-1 border border-slate-800/20 w-24 rounded-md items-center justify-between bg-white/5 backdrop-blur-sm hover:border-slate-800/40 transition-all duration-300 cursor-pointer"
                      onClick={() => setIsOpenDrop(!isOpenDrop)}
                    >
                      <img
                        src={selectedLanguage === "fr" ? fr : en}
                        width={18}
                        alt="logo_lng"
                        className="object-contain scale-125 border-gray-500 rounded-full"
                      />
                      <div className="flex gap-2 items-center text-slate-800">
                        <span className="font-medium">{selectedLanguage}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpenDrop && (
                        <motion.div
                          className="absolute top-full mt-2 w-full bg-white backdrop-blur-lg border border-slate-800/10 rounded-md shadow-lg overflow-hidden z-50"
                          variants={drawerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {languages.map((lang) => (
                            <motion.div
                              key={lang.code}
                              onClick={() => {
                                i18n.changeLanguage(lang.code);
                                setSelectedLanguage(lang.code);
                                setIsOpenDrop(false);
                                setIsOpen(false);
                              }}
                              variants={itemVariants}
                              className={`px-3 py-2 flex justify-between items-center hover:bg-slate-800/10 transition-colors cursor-pointer ${
                                selectedLanguage === lang.code
                                  ? "bg-slate-800/5"
                                  : ""
                              }`}
                            >
                              <span>{lang.name}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
