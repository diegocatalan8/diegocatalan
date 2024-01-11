import React from 'react';
import { IoIosDocument } from 'react-icons/io';
import { FaGithub, FaLinkedin, FaReact, FaBootstrap, FaGraduationCap, FaStar, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdVerified, MdEmail, MdOutlineWork } from "react-icons/md";
import { FiLink2, FiGithub } from 'react-icons/fi';
import { SiTailwindcss, SiNextdotjs, SiJavascript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export default function Icon({ name, ...props }) {
  const getIconName = (key) =>
    ({
      Document: <IoIosDocument className={`${props.className}`} />,
      Linkedin: <FaLinkedin className={`${props.className}`} />,
      Github: <FaGithub className={`${props.className}`} />,
      Education: <FaGraduationCap className={`${props.className}`} />,
      Work: <MdOutlineWork className={`${props.className}`} />,
      Skills: <MdVerified className={`${props.className}`} />,
      Projects: <FaStar className={`${props.className}`} />,
      Contact: <MdEmail className={`${props.className}`} />,
      Link: <FiLink2 className={`${props.className}`} />,
      Octocat: <FiGithub className={`${props.className}`} />,
      //Icons tech
      React: <FaReact className={`text-[#70cbff] ${props.className}`} />,
      Tailwind: <SiTailwindcss className={`text-[#17b6ba] ${props.className}`} />,
      Next: <SiNextdotjs className={`text-black ${props.className}`} />,
      Postgres:  <BiLogoPostgresql className={`text-[#32638e] ${props.className}`} />,
      Bootstrap: <FaBootstrap className={`text-[#7911f1] ${props.className}`} />,
      Html: <FaHtml5 className={`text-[#ea6429] ${props.className}`} />,
      Css: <FaCss3Alt className={`text-[#156eb0] ${props.className}`} />,
      Js: <SiJavascript className={`text-[#f7e018] ${props.className}`} />,



    }[key]);

  return getIconName(name);
}
