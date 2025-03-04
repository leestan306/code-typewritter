import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3,
} from "react-icons/fa";
import { DiPhp, DiRuby, DiSwift, DiGo } from "react-icons/di";
import { SiTypescript, SiKotlin, SiRust, SiDjango } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillLightningFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoAngular } from "react-icons/io";
import { MdOutlineFlutterDash } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { PiFileCSharpThin } from "react-icons/pi";
import { SiGnubash } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

const languages: {
  title: string;
  icon: React.ComponentType;
  iconColor?: string;
}[] = [
  {
    title: "JavaScript",
    icon: FaJs,
    iconColor: "text-yellow-500",
  },
  {
    title: "React",
    icon: FaReact,
    iconColor: "text-blue-500",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    iconColor: "text-green-500",
  },
  {
    title: "Python",
    icon: FaPython,
    iconColor: "text-yellow-400",
  },
  {
    title: "Java",
    icon: FaJava,
    iconColor: "text-orange-500",
  },
  {
    title: "PHP",
    icon: DiPhp,
    iconColor: "text-purple-700",
  },
  {
    title: "Ruby",
    icon: DiRuby,
    iconColor: "text-red-600",
  },
  {
    title: "Swift",
    icon: DiSwift,
    iconColor: "text-orange-400",
  },
  {
    title: "Go",
    icon: DiGo,
    iconColor: "text-blue-600",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-blue-700",
  },
  {
    title: "C#",
    icon: PiFileCSharpThin,
    iconColor: "text-purple-700",
  },
  {
    title: "Kotlin",
    icon: SiKotlin,
    iconColor: "text-yellow-600",
  },
  {
    title: "Rust",
    icon: SiRust,
    iconColor: "text-orange-500",
  },
  {
    title: "Next.js",
    icon: TbBrandNextjs,
    iconColor: "text-white",
  },
  {
    title: "Svelte",
    icon: BsFillLightningFill,
    iconColor: "text-orange-400",
  },
  {
    title: "HTML",
    icon: AiFillHtml5,
    iconColor: "text-orange-600",
  },
  {
    title: "CSS",
    icon: FaCss3,
    iconColor: "text-blue-500",
  },
  {
    title: "Angular",
    icon: IoLogoAngular,
    iconColor: "text-red-500",
  },
  {
    title: "Flutter",
    icon: MdOutlineFlutterDash,
    iconColor: "text-green-500",
  },
  {
    title: "MySQL",
    icon: GrMysql,
    iconColor: "text-blue-500",
  },
  {
    title: "Django",
    icon: SiDjango,
    iconColor: "text-green-700",
  },
  {
    title: "Prisma",
    icon: SiPrisma,
    iconColor: "text-white",
  },
  {
    title: "Bash",
    icon: SiGnubash,
    iconColor: "text-white",
  },
];

export default languages;
