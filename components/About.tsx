"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView(0.75, "About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading text="About me" />
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from{" "}
        <span className="font-medium">UC Santa Cruz</span>, I decided to pursue
        my passion for programming, especially in front-end development.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am familiar
        with{" "}
        <span className="font-medium">React, Next.js, Node.js, and Vite</span>.
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        Outside of work, I am a certified private pilot, and I love flying along
        the Pacific coast. I also a huge fan of music and I dj very often.
      </p>
    </motion.section>
  );
};

export default About;
