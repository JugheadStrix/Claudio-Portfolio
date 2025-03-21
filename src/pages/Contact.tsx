import { Phone, Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const contactData = [
    {
      id: 1,
      icon: <Phone className="w-5 h-5" />,
      label: "+261 34 30 684 78",
      href: "https://wa.me/261343068478",
    },
    {
      id: 2,
      icon: <Mail className="w-5 h-5" />,
      label: "claudio.kantoarimiora@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=claudio.kantoarimiora@gmail.com",
    },
    {
      id: 3,
      icon: <Github className="w-5 h-5" />,
      label: "Github Profile",
      href: "https://github.com/JugheadStrix",
    },
    {
      id: 4,
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/rakotondrabe-kantoarimiora-442426342",
    },
    {
      id: 5,
      icon: <MapPin className="w-5 h-5" />,
      label: "Fianarantsoa Madagascar",
      href: "#",
    },
  ];

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_jvo9vnd",
          "template_7ai0rrz",
          formRef.current,
          "nZQKoygzl1SVVwO0z"
        )
        .then(
          () => {
            console.log("SUCCESS");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is not defined.");
    }
  };

  const { t } = useTranslation();

  return (
    <section className="" id="Contact">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-800 relative inline-block">
            {t("contact.titre")}
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#d7958c]/60 rounded-sm"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("contact.desc")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative p-8 rounded-2xl shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gray-200 overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-indigo-100 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl -z-10" />

            {/* Ligne décorative */}
            <div className="absolute top-4 right-4 w-16 h-[1px] bg-gradient-to-l from-neutral-400 to-transparent" />
            <div className="absolute top-4 right-4 w-[1px] h-16 bg-gradient-to-b from-neutral-400 to-transparent" />

            {/* Points décoratifs */}
            <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-green-500" />
            <div className="absolute bottom-6 right-10 w-1 h-1 rounded-full bg-red-500" />
            <div className="absolute bottom-10 right-6 w-1 h-1 rounded-full bg-yellow-500" />

            {/* Contenu principal */}
            <div className="relative">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                {t("contact.coordonnees")}
              </h2>
              <div className="space-y-6">
                {contactData.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#d7958c]/20 transition-colors duration-300">
                      <div className="text-gray-600 group-hover:text-[#d7958c] transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-gray-600 group-hover:text-[#d7958c] transition-colors duration-300">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative p-8 rounded-2xl shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#b36c64]/10 to-[#d7958c]/10 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#d7958c]/10 to-[#b36c64]/10 blur-3xl -z-10" />

            {/* Lignes décoratives */}
            <div className="absolute top-4 left-4 w-[1px] h-16 bg-gradient-to-b from-neutral-400 to-transparent" />
            <div className="absolute top-4 left-4 w-16 h-[1px] bg-gradient-to-r from-neutral-400 to-transparent" />

            {/* Points décoratifs */}
            <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-blue-500" />
            <div className="absolute top-10 right-6 w-1 h-1 rounded-full bg-green-500" />
            <div className="absolute top-8 right-10 w-1 h-1 rounded-full bg-orange-500" />

            {/* Contenu principal */}
            <div className="relative">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                {t("contact.envoyer_message")}
              </h2>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    name="user_name"
                    placeholder={t("contact.holderName")}
                    className="w-full py-2.5 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#b36c64]/70 focus:border-transparent transition-all outline-none group-hover:bg-gray-50/80"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b36c64]/5 to-[#d7958c]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <div className="relative group">
                  <input
                    required
                    type="email"
                    name="user_email"
                    placeholder={t("contact.holderEmail")}
                    className="w-full py-2.5 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#b36c64]/70 focus:border-transparent transition-all outline-none group-hover:bg-gray-50/80"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b36c64]/5 to-[#d7958c]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <div className="relative group">
                  <textarea
                    required
                    placeholder={t("contact.holderMess")}
                    name="message"
                    rows={4}
                    className="w-full py-2.5 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#b36c64]/70 focus:border-transparent transition-all outline-none resize-none group-hover:bg-gray-50/80"
                  />

                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#b36c64]/5 to-[#d7958c]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-[#b36c64]/60 text-slate-800 to-[#d7958c]/60 font-medium py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b36c64]/20 to-[#d7958c]/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative">{t("contact.send_mess")}</span>
                  <Send className="w-4 h-4 group-hover:scale-125 transition-all relative" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
