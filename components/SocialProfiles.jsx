import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link"; 
import { cn } from "@/lib/utils";
const SocialProfiles = ({className}) => {
  const socialLinks = [
    {
      id: crypto.randomUUID(),
      name: "Facebook",
      icon: <FaFacebook/>,
      link: "https://www.facebook.com",
    },
    {
      id: crypto.randomUUID(),
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    {
      id: crypto.randomUUID(),
      name: "Twitter",
      icon: <FaTwitter/>,
      link: "https://www.x.com",
    },
    {
      id: crypto.randomUUID(),
      name: "LinkedIn",
      icon: <FaLinkedin/>,
      link: "https://www.linkedIn.com",
    },
  ];
  return (
    <ul className={cn(`flex justify-center items-center gap-3 lg:gap-4 ${className}`)}>
      {socialLinks.map((item) => (
        <li key={item?.id}>
          <Link className="hover:text-primary text-2xl lg:text-3xl" href={item?.link}>
          {item?.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialProfiles;
