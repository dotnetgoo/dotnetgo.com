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

import Logo from "./images/logo.png";

import HeroLight from "./images/ww.jpg";
import HeroDark from "./images/dark2.webp";
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
    name: "UNI SOLVE ",
    link: "https://www.ubuy.uz/en/brand/uni-solve"
  },
  {
    id: 2,
    skill: <BsMicrosoft className="display-4" />,
    name: "UZCARD payment system",
    link: "https://uzcard.uz/ru"
  },
  {
    id: 3,
    skill: <BsMicrosoft className="display-4" />,
    name: "TechCells ",
    link: "https://techcells.com/"
  },
  {
    id: 4,
    skill: <BsMicrosoft className="display-4" />,
    name: "Najot Ta'lim",
    link: "https://najottalim.uz/"
  },
  {
    id: 5,
    skill: <BsMicrosoft className="display-4" />,
    name: "BARQ App",
    link: "https://barqapp.com/"
  },
  {
    id: 6,
    skill: <BsMicrosoft className="display-4" />,
    name: "Microsoft",
    link: "https://www.microsoft.com/ru-ru"
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
