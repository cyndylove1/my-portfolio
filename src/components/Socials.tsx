import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/cyndylove1" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/cyndylove1" },
  { icon: <MdOutlineEmail />, path: "mailto:Nwekecynthia2015@gmail.com" },
];

export default function Socials({}) {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              target="blank"
              href={item.path}
              className="border-[1px] border-(--accent) rounded-full p-2 text-white hover:bg-(--accent) hover:text-white transition-all duration-500 ease-in-out shake-on-hover"
            >
              {item.icon}
            </a>
          );
        })}

      </div>
    </>
  );
}
