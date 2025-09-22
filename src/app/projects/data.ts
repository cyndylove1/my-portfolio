import { StaticImageData } from "next/image";
import flowapp from "../../assets/flow app1.png";
import suft from "../../assets/suft.png";
import suftAdmin from "../../assets/suft-admin1.png";
import lapo from "../../assets/dashboard 2.png";
import chequemate from "../../assets/chequemate 2.png";
import mental from "../../assets/mental.png";

interface WorkData {
  num?: string;
  title?: string;
  description?: string;
  stack?: { name: string }[];
  image?: StaticImageData;
  live?: string;
  github?: string;
}

const work: WorkData[] = [
  {
    num: "01",
    title: "Suft",
    description:
      "Suft website is an E-commerce platform that enables individuals to buy products and make payments online.",
    stack: [
      { name: "React js" },
      { name: "Tailwindcss" },
      { name: "Daisy UI" },
      { name: "Context-Api" },
      { name: "Typescript" },
      { name: "Restful-Apis" },
    ],
    image: suft,
    live: "https://suft-comfort.vercel.app/",
    github: "https://github.com/cyndylove1/suft",
  },
  {
    num: "02",
    title: "Suft-Admin",
    description:
      "Suft-Admin Dashboard is a web-based interface that provides administrators with tools to manage and monitor various aspects of a activities on the suft website.",
    stack: [
      { name: "React js" },
      { name: "Tailwindcss" },
      { name: "Javascript" },
      { name: "Restful-Apis" },
    ],
    image: suftAdmin,
    live: "https://getsuft.com/admin/login",
    github: "https://github.com/chequemate-org/suft-admin",
  },
  {
    num: "03",
    title: "Mental Health Assessment",
    description: "A Mental Health Assessment Form",
    stack: [
      { name: "Next js" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
      { name: "Daisy UI" },
      { name: "Material UI" },
      { name: "jest" },
    ],
    image: mental,
    live: "https://mental-health-form.vercel.app/",
    github: "https://github.com/cyndylove1/mental-health",
  },
  {
    num: "04",
    title: "ChequeMate",
    description:
      "Chequemate is an Ajo website that Manage and control multiple Ajo groups with Chequemate you earn up to 20% interest per annum.",
    stack: [
      { name: "React js" },
      { name: "Tailwindcss" },
      { name: "Javascript" },
    ],
    image: chequemate,
    live: "https://chequiemate.vercel.app/",
    github: "https://github.com/cyndylove1/chequie",
  },
  {
    num: "05",
    title: "Flow app",
    description:
      "Flow App is designed exclusively for making seamless payments.",
    stack: [
      { name: "React js" },
      { name: "Tailwindcss" },
      { name: "Javascript" },
    ],
    image: flowapp,
    live: "https://flow-app-five.vercel.app/",
    github: "https://github.com/cyndylove1/Flow-app",
  },
  {
    num: "06",
    title: "Lapo dashboard",
    description: "A simple admin dashboard.",
    stack: [
      { name: "React js" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
      { name: "Material UI" },
      { name: "react-chartjs-2" },
      { name: "recharts" },
    ],
    image: lapo,
    live: "https://lapo-psi.vercel.app/dashboard",
    github: "https://github.com/cyndylove1/Lapo",
  },
];

export default work;
