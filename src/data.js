import {
  // FaHtml5,
  // FaCss3Alt,
  // FaBootstrap,
  // FaReact,
  // FaGitAlt,
  // FaGithubSquare,
  FaLink,
} from "react-icons/fa";
// import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";
import { BsMicrosoft } from 'react-icons/bs';

import Logo from "./images/logo.svg";

import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "dotnetgoo";

export const Blog = <FaLink />;
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";


export const skillData = [
  {
    id: 1,
    skill: <BsMicrosoft className="display-4" />,
    name: "Microsoft ",
  },
  {
    id: 2,
    skill: <BsMicrosoft className="display-4" />,
    name: "Company 2",
  },
  {
    id: 3,
    skill: <BsMicrosoft className="display-4" />,
    name: "Company 3",
  },
  {
    id: 4,
    skill: <BsMicrosoft className="display-4" />,
    name: "Company 4",
  },
  {
    id: 5,
    skill: <BsMicrosoft className="display-4" />,
    name: "Company 5",
  },
  {
    id: 6,
    skill: <BsMicrosoft className="display-4" />,
    name: "Company 6",
  },
  // {
  //   id: 7,
  //   skill: <SiRedux className="display-4" />,
  //   name: "Redux",
  // },
  // {
  //   id: 8,
  //   skill: <FaGitAlt className="display-4" />,
  //   name: "Git",
  // },
  // {
  //   id: 9,
  //   skill: <FaGithubSquare className="display-4" />,
  //   name: "GitHub",
  // },
];

export const resume = null;

export const filteredProjects = ["example-1", "example-2", "example-3"];

export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
