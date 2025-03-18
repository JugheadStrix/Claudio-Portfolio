import { ForwardRefExoticComponent, PropsWithChildren, ReactNode } from "react";

export type ChildProps = PropsWithChildren;
export type Props = {
  childern: ReactNode;
};
// ! Header
export type LabLink = {
  href: string;
  labelKey: string;
};

// ! About
export type Competence = {
  id: number;
  competence: string;
  lists: string[];
};

export type Education = {
  id: number;
  annee: string;
  grade: string;
};

export type Experience = {
  id: number;
  date: string;
  lieu: string;
  titre: string;
  theme: string;
};

export type Project = {
  id: number;
  titre: string;
};

// ! Services
export type Service = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ReactNode | ForwardRefExoticComponent<any>;
  title: string;
  description: string;
  technologies: string[];
};

// ! Project
export interface ProjectData {
  id: number;
  titre: string;
  type: string;
  image: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

export interface ProjectBoxProps {
  id: number;
  titre: string;
  image: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    titre: string;
    image: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
  };
}

// ! Contact
// export type ContactItem = {
//   id: number;
//   icon: React.ReactNode; // Type pour les composants JSX
//   label: string;
//   href: string;
// };
