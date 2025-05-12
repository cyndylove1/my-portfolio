import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/cyndylove1" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/cyndylove1" },
  // { icon: <MdOutlineEmail />, path: "mailto:Nwekecynthia2015@gmail.com" },
];

export default function Socials({}) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              target="blank"
              href={item.path}
              className="border-[1px] border-(--accent) rounded-full p-2 text-(--accent) hover:bg-(--accent) hover:text-(--primary)  transition-all duration-500 ease-in-out shake-on-hover"
            >
              {item.icon}
            </a>
          );
        })}
        <a
          href="mailto:Nwekecynthia2015@gmail.com"
          className="border-[1px] border-(--accent) rounded-full p-2 text-(--accent) hover:bg-(--accent) hover:text-(--primary)  transition-all duration-500 ease-in-out shake-on-hover"
        >
          <MdOutlineEmail />
        </a>
      </div>
    </>
  );
}
