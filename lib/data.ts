import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { CiVideoOn } from "react-icons/ci";
import { CgCardHearts } from "react-icons/cg";
import mslt from "@/public/mslt.png";
import casecobra from "@/public/casecobra.png";
import dealer from "@/public/dealer.png";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ChargeFuze",
    location: "Los Angeles, CA",
    description:
      "I worked at ChargeFuze as a marketing and business development intern, where I was responsible for initializing 500+ rentals for the company. I also worked as a mandarin translator for the company in the meantime.",
    icon: React.createElement(BsLightningCharge),
    date: "2021-2024",
  },
  {
    title: "Lindamood-Bell Learning Process",
    location: "Pacific Palisades, CA",
    description:
      "I worked at Lindamood-Bell as an educational therapist, where I taught reading comprehension, spelling, math, and learning strategies to students with dyslexia, autism spectrum disorder, and other learning disabilities.",
    icon: React.createElement(LiaChalkboardTeacherSolid),
    date: "2022",
  },
  {
    title: "BC 142434",
    location: "Vancouver, BC, Canada",
    description:
      "I worked as a full stack developer at the Canadian company, designing and building a responsive and efficient UI using React, TypeScript, Bootstrap, and WebRTC for a video chat web application. I also Implemented Redis to streamline database architecture. Increased scalability and efficiency in logging, statistics keeping, system data recording and data persistence.",
    icon: React.createElement(CiVideoOn),
    date: "2023-2024",
  },
  {
    title: "Extreme Intelligence Networking LTD",
    location: "Beijing, China",
    description:
      "I worked as a compiler engineer intern. Created a prototype transpiler for a custom programming language used for statistics tracking for the card game of Bridge. Implemented static variable mapping, keyword parsing, and intermediate code generation.",
    icon: React.createElement(CgCardHearts),
    date: "2024-Present",
  },
  {
    title: "UC Santa Cruz",
    location: "Santa Cruz, CA",
    description:
      "I graduated from UC Santa Cruz in 2025 with a Computer Science BS degree. During my time there, I became very familiar with software and compiler development.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Secret Chamber",
    description:
      "I developed the front-end UI for a four-way end-to-end encrypted video chat app, and implemented Redis for logging, stats keeping, system data recording and data persistence. Also included localized language based on the user's browser settings",
    tags: ["React", "Vite", "Redis", "Bootstrap", "WebRTC"],
    imageUrl: mslt,
    url: "https://mslt.online",
  },
  {
    title: "CaseCobra",
    description:
      "Full-stack e-commerce store where users can upload pictures for customized phone cases. Implemented auth with Kinde and payment system with Stripe.",
    tags: ["React", "Next.js", "Tailwind", "Stripe", "Kinde"],
    imageUrl: casecobra,
    url: "https://case.in1859.com",
  },
  {
    title: "Bridge Dealer Transpiler",
    description:
      "Transpiler for a custom Bridge dealer programming language. Implemented lexical, syntactic, and semantic analysis, as well as intermediate code generation.",
    tags: ["Compiler", "Intermediate Code Generation", "JavaScript"],
    imageUrl: dealer,
    url: "https://bridge.in1859.com",
  }
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Compiler Theory",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "Systematic Engineering",
  "Python",
  "Reinforcement Learning",
  "Machine Learning",
  "Tailwind CSS",
  "Bootstrap",
  "HTML5",
] as const;
