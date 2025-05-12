"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      <nav className="flex gap-8 items-center">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathName &&
                "text-(--accent) border-b-2 border-(--accent) "
              } font-medium hover:text-(--accent) transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
