import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";
// SiMysql, SiWebpack
import { FaGitAlt } from "react-icons/fa6";
// FaXTwitter, FaDribbble
import { MdGroup } from "react-icons/md";

// images for projects
import Notes_Img from "../assets/Images/Notes_pic.png";
import Ecommerce_Img from "../assets/Images/E-commerce_pic.png";

// Images expote here

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -100, to: "skills" },
  { id: "03", label: "About Me", offset: -100, to: "about" },
  { id: "04", label: "Projects", offset: -100, to: "projects" },
  { id: "05", label: "Contact Me", offset: -100, to: "conatct" },
];

export const STATS = [
  { id: "01", count: "1", label: `Years of \nExperience` },
  { id: "02", count: "2", label: `Certifications \nEarned` },
  { id: "03", count: "15", label: `Projects \nCompleted` },
  { id: "04", count: "0", label: `Happy \nClients` },
];

export const Skill_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "A JavaScript library for building user interfaces that allows developers to create single-page applications. It promotes reusable components and efficient rendering through a virtual DOM.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: " HTML5",
    progress: 90,
    type: "frontend",
    description:
      "The standard markup language for documents designed to be displayed in a web browser. It provides the structure for web pages.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS3",
    progress: 65,
    type: "frontend",
    description:
      " A style sheet language used for describing the presentation of a document written in HTML or XML. It enables the separation of content from design.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "Javascript",
    progress: 80,
    type: "frontend",
    description:
      "A programming language that enables interactive web features and dynamic content on web pages.",
  },
  {
    id: "05",
    icon: BiLogoTailwindCss,
    skill: "Tailwind Css",
    progress: 75,
    type: "frontend",
    description:
      " A utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It allows for rapid design and customization without leaving your HTML.",
  },
  {
    id: "06",
    icon: FaGitAlt,
    skill: "Git & GitHUB",
    progress: 80,
    type: "tools",
    description:
      "A platform for version control and collaboration, allowing developers to manage and store their code repositories.",
  },
  {
    id: "07",
    icon: VscVscode,
    skill: "Vs Code",
    progress: 80,
    type: "tools",
    description:
      " A popular source-code editor developed by Microsoft, featuring support for various programming languages and extensions.",
  },
  {
    id: "08",
    icon: VscCommentUnresolved,
    skill: "Problem-Solving",
    progress: 85,
    type: "soft-skills",
    description:
      " Ability to analyze problems and develop effective solutions. It involves identifying the root cause of issues and implementing effective strategies to overcome challenges.",
  },
  {
    id: "09",
    icon: VscTerminalPowershell,
    skill: "Attention to Detail",
    progress: 80,
    type: "soft-skills",
    description:
      " Demonstrating a meticulous approach to tasks and ensuring accuracy in all aspects of work. It involves thorough examination of work for errors and inconsistencies, ensuring high-quality output.",
  },
  {
    id: "10",
    icon: MdGroup,
    skill: "Collaboration",
    progress: 70,
    type: "soft-skills",
    description:
      " Ability to work effectively with others to achieve common goals and foster a positive team environment. It involves sharing ideas, providing feedback, and contributing to team projects to achieve shared objectives.",
  },
  {
    id: "11",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 85,
    type: "backend",
    description:
      " A NoSQL database program that uses JSON-like documents with optional schemas. It is designed for scalability and flexibility, making it suitable for handling large volumes of data.",
  },
  {
    id: "12",
    icon: SiExpress,
    skill: "Express.JS",
    progress: 60,
    type: "backend",
    description:
      " A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
  },
];

export const ABOUT_ME = {
  content: `I'm a passionate Frontend Developer with strong foundation in building responsive,
 user-friendly web applications using modern
 JavaScript frameworks and libraries such as
 React.`,

  socialLinks: [
    { id: "01", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "02", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    { id: "03", label: "GitHUB", icon: FaGithub, link: "#" },
  ],
  email: "dharmikmodi8002@gmail.com",
  phone: "+91 8128490336",
  website:"https://dharmikmodidevloper.com"
};

export const PROJECTS = [
  {
    id: "01",
    title:
      "Full Stack Notes App using MERN | MongoDB, Express, React Js, Node JS",
    image: Notes_Img,
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
  },
  {
    id: "02",
    title: "E-commerce Website using React and Node.js",
    image: Ecommerce_Img,
    tags: ["React", "Node.js"],
  },
  {
    id: "03",
    title: "E-commerce Website using React and Node.js",
    image: Ecommerce_Img,
    tags: ["React", "Node.js"],
  },
  {
    id: "04",
    title: "E-commerce Website using React and Node.js",
    image: Ecommerce_Img,
    tags: ["React", "Node.js"],
  },
  {
    id: "05",
    title: "E-commerce Website using React and Node.js",
    image: Ecommerce_Img,
    tags: ["React", "Node.js"],
  },
];
