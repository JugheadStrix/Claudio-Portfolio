import {
  ClipboardCheck,
  Code,
  Database,
  Github,
  Globe,
  Layout,
  Linkedin,
  Mail,
  Phone,
  Smartphone,
} from "lucide-react";
import {
  Competence,
  Education,
  Experience,
  LabLink,
  ProjectData,
  Service,
} from "../utils/type";
import smart from "../assets/images/smart.webp";
import serviceTaxi from "../assets/images/service-taxi.jpg";
import dashboard from "../assets/images/dashboard.svg";
import samplePortal from "../assets/images/Sample_Captive_Portal_splash_page.png";
import portfolio from "../assets/images/portfolio.webp";

//! HEADER
export const navLinksData: LabLink[] = [
  { href: "#Accueil", labelKey: "nav.home" },
  { href: "#A_propos", labelKey: "nav.about" },
  { href: "#Services", labelKey: "nav.services" },
  { href: "#Projets", labelKey: "nav.projects" },
  { href: "#Contact", labelKey: "nav.contact" },
];

export const socialLinksData = [
  { Icon: Phone, href: "https://wa.me/261343068478", label: "WhatsApp" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/rakotondrabe-kantoarimiora-442426342",
    label: "LinkedIn",
  },
  {
    Icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=claudio.kantoarimiora@gmail.com",
    label: "Email",
  },
  {
    Icon: Github,
    href: "https://github.com/JugheadStrix",
    label: "GitHub",
  },
];

//! ABOUT
export const educationsData: Education[] = [
  { id: 1, annee: "2025", grade: "Master en Développement Web" },
  { id: 2, annee: "2023", grade: "License en Informatique" },
  {
    id: 3,
    annee: "2020",
    grade: "Obtention du baccalaureat scientifique",
  },
  // Ajoutez vos données d'éducation ici
];

export const experienceData: Experience[] = [
  {
    id: 1,
    date: "Déc 2024 - Fev 2025",
    lieu: "A.I.M Madagascar",
    titre: "Developpeur web et mobile",
    theme:
      "Système de gestion des paiements avec interface web pour l'administration et application mobile pour les caissiers. Paiements sécurisés via QR code unique, avec synchronisation des données sur le serveur central.",
  },
  {
    id: 2,
    date: "Nov 2024 - Déc 2024 ",
    lieu: "Tech-zone Fianarantsoa",
    titre: "Developpeur web et mobile",
    theme:
      "Concevoir et réaliser un site web de gestion des vouchers pour l’accès à internet avec le système portail captif et une application mobile dédiée à la vente des vouchers.",
  },
  {
    id: 3,
    date: "Jun 2024-Oct 2024 ",
    lieu: "Natik Coorporation Fianarantsoa",
    titre: "Developpeur full stack, stagiaire",
    theme:
      "Conception et realisation d'une application web de gestion de reservation de taxi en ligne.",
  },
  {
    id: 4,
    date: "20 - 21 Octobre 2023",
    lieu: "Hackathon inter-universitaire de Fianarantsoa",
    titre: "Hack-IT : 48 heures d'innovation !",
    theme:
      "Energie verte : creér des solutions intelligentes pour un avenir durable.",
  },
];

export const competancesData: Competence[] = [
  {
    id: 1,
    competence: "Frontend",
    lists: [
      "React (TS)",
      "Vue",
      "VueTify",
      "HTML/CSS/JS",
      "Tailwind css",
      "Framer motion",
    ],
  },
  {
    id: 2,
    competence: "Backend",
    lists: ["Node.js (TS)", "Express", "SpringBoot", "NextJS"],
  },
  {
    id: 3,
    competence: "Mobile",
    lists: ["Dart/Flutter", "SQFlite", "Firebase"],
  },
  {
    id: 4,
    competence: "Outils",
    lists: ["GitHub", "Trello", "VsCode", "Postman"],
  },
  // Ajoutez vos compétences ici
];

//! SERVICES
export const servicesData: Service[] = [
  {
    icon: Code,
    title: "service.titre-service.1",
    description: "service.description.1",
    technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "service.titre-service.2",
    description: "service.description.2",
    technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "service.titre-service.3",
    description: "service.description.3",
    technologies: ["Mobile First", "PWAs", "Cross-browser"],
  },
  {
    icon: Globe,
    title: "service.titre-service.4",
    description: "service.description.4",
    technologies: ["Stripe", "API RESTful", "SEO", "Performance"],
  },
  {
    icon: Layout,
    title: "service.titre-service.5",
    description: "service.description.5",
    technologies: ["React Native", "Flutter", "GraphQL", "Firebase"],
  },
  {
    icon: ClipboardCheck,
    title: "service.titre-service.6",
    description: "service.description.6",
    technologies: ["Jira", "Trello", "Slack", "Asana"],
  },
];

//! PROJECT
export const projectData: ProjectData[] = [
  {
    id: 1,
    titre: "project.title.1",
    type: "Application Web",
    image: smart,
    description: "project.detail.1",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    githubLink: "",
    demoLink: "",
  },
  {
    id: 2,
    titre: "project.title.2",
    type: "Application Web",
    image: serviceTaxi,
    description: "project.detail.2",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    githubLink: "",
    demoLink: "",
  },
  {
    id: 3,
    titre: "project.title.3",
    type: "Tableau de Bord",
    image: dashboard,
    description: "project.detail.3",
    technologies: ["Angular", "D3.js", "Express", "PostgreSQL"],
    githubLink: "",
    demoLink: "",
  },
  {
    id: 4,
    titre: "project.title.4",
    type: "Solution Réseau",
    image: samplePortal,
    description: "project.detail.4",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    githubLink: "",
    demoLink: "",
  },
  {
    id: 5,
    titre: "project.title.5",
    type: "Site Web Personnel",
    image: portfolio,
    description: "project.detail.5",
    technologies: ["React (TypeScript)", "Framer Motion", "Tailwind CSS"],
    githubLink: "",
    demoLink: "",
  },
];
