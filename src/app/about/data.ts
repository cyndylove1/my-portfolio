import { FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa6";
import { FaCss3Alt, FaNode, FaReact, FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";

export interface AboutMeData {
  title: string;
  description: string;
}

interface SkillItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

interface SkillData {
  title: string;
  skillList: SkillItem[];
}

const AboutMe: AboutMeData = {
  title: "About me",
  description:
    "I'm a passionate Frontend Developer with a deep love for building beautiful, responsive, and high-performing web applications. I specialize in turning design ideas into reality, combining clean code, innovative user experiences, and modern technologies to craft products that users love.With a strong foundation in HTML5, CSS3, JavaScript (ES6+), and React.js, I bring creativity and precision to every project. I’m also experienced in Tailwind CSS, Next.js, TypeScript, ReactQuery(tanstack) and state management libraries like Redux-toolkit.I have also worked with the shadcn/ui library and Material UI. I am currently learning how to use GSAP animations.I care about user experience just as much as code quality — ensuring every interaction feels smooth, intuitive, and accessible across all devices.When I’m not coding, you’ll find me refining my design sense, exploring new frameworks, or learning about the latest in web performance optimization.",
};

const skills: SkillData = {
  title: "My Skills",
  skillList: [
    {
      icon: FaHtml5,
      name: "HTML",
    },
    {
      icon: FaCss3Alt,
      name: "CSS",
    },
    {
      icon: FaSass,
      name: "Sass",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwindcss",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: TbBrandNextjs,
      name: "Nextjs",
    },
    {
      icon: IoLogoJavascript,
      name: "Javascript ",
    },
    {
      icon: SiTypescript,
      name: "Typescript",
    },
    {
      icon: FaNode,
      name: "Node",
    },
    {
      icon: FaGitAlt,
      name: "Git",
    },
    {
      icon: FaGithub,
      name: "Github",
    },
    {
      icon: TbBrandFramerMotion,
      name: "Framer Motion",
    },
    
  ],
};

export default AboutMe;
export { skills };
