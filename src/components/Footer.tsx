import { Heart } from "lucide-react";
import { navLinksData } from "../data/ProjectData";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-gray-200 bg-slate-100 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
          {/* Copyright section */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start lg:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-600 text-sm sm:text-base">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="hidden sm:inline">|</span>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              </div>
              <span>by</span>
              <span className="font-medium font-[poppins] text-center sm:text-left bg-gradient-to-r from-[#d8958c] via-[#424242] to-[#d8958c] bg-clip-text text-transparent">
                RAKOTONDRABE Kantoarimiora Claudio
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinksData.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-black transition-colors duration-300 text-sm sm:text-base relative group"
              >
                {t(link.labelKey)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#393c4b] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
