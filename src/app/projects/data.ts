import { StaticImageData } from "next/image";
import flowapp from "../../assets/flow app1.png";
import chequemate from "../../assets/chequemate 2.png";
import suft from "../../assets/suft.png";
import suftAdmin from "../../assets/suft-admin1.png";

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
      { name: "react" },
      { name: "tailwindcss" },
      { name: "context" },

    ],
    image: suft,
    live: "https://getsuft.com/",
    github: "https://github.com/Cisco-A/suft",
  },
  {
    num: "02",
    title: "Suft-Admin",
    description:
      "Suft-Admin Dashboard is a web-based interface that provides administrators with tools to manage and monitor various aspects of a activities on the suft website.",
    stack: [{ name: "react" }, { name: "tailwindcss" }],
    image: suftAdmin,
    live: "https://getsuft.com/admin/login",
    github: "https://github.com/chequemate-org/suft-admin",
  },
  {
    num: "03",
    title: "ChequeMate",
    description:
      "Chequemate is an Ajo website that Manage and control multiple Ajo groups with Chequemate you earn up to 20% interest per annum.",
    stack: [{ name: "react" }, { name: "tailwindcss" }],
    image: chequemate,
    live: "https://chequemateapp.com/",
    github: "https://github.com/cyndylove1/chequie",
  },
  {
    num: "04",
    title: "Flow app",
    description:
      "Flow App is designed exclusively for making seamless payments.",
    stack: [{ name: "react" }, { name: "tailwindcss" }],
    image: flowapp,
    live: "https://flow-app-five.vercel.app/",
    github: "https://github.com/cyndylove1/Flow-app",
  },
];

export default work;
