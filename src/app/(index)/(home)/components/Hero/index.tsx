import React from "react";
import BrushSvg from "@/components/svgs/brush";
import CodeSvg from "@/components/svgs/code";
import MemojiSvg from "@/components/svgs/memoji";
import ToggleSvg from "@/components/svgs/toggle";

export default function Hero() {
  return (
    <div className="px-4 py-12 container mx-auto">
      <h1 className="text-primaryBlue font-medium text-[min(7vw,52px)]  text-center">
        Hi, I’m Ayo. Nice to meet you 👋🏼
      </h1>
      <p className="text-center px-6 mt-3 text-[min(4vw,24px)]">
        I design and code beautifully simple things, and I love what I do.
      </p>

      <div className="relative mt-12 w-[150px] h-[150px] rounded-full bg-primaryBlue mx-auto">
        <span className="absolute -top-10 md:top-0 transform w-full">
          <MemojiSvg />
        </span>
      </div>

      <h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center mt-12">
        Software Engineer
      </h2>
      <p className="text-center px-6 mt-3 text-[min(4vw,20px)] text-gray-400 font-normal">
        I'm a developer specializing in crafting elegant solutions to complex
        problems. Proficient in both front-end and back-end technologies, I
        enjoy turning ideas into user-friendly digital experiences. With
        expertise in React, Node.js, and responsive design, I create software
        that functions seamlessly and delights users. My commitment to
        continuous learning keeps me at the forefront of technology trends.
        Let's collaborate to build the next generation of digital innovations.
      </p>

      {/* We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily. */}

      <div className="mt-12 flex flex-col md:flex-row gap-6">
        {/* 
Absolutely, here's a 3-step tagline for a developer:

1. **"Design the Vision"**
   - *Explanation:* In the first step, "Design the Vision," you conceptualize and plan the project. You work closely with stakeholders to understand their goals and requirements. This phase involves creating wireframes, mockups, and architecture diagrams. It's about turning abstract ideas into a concrete plan.

2. **"Craft the Code"**
   - *Explanation:* In the second step, "Craft the Code," you bring the project to life. You write clean, efficient code, following best practices and coding standards. This is where you use your technical skills to turn the design into a functional application. Attention to detail and problem-solving are key during this phase.

3. **"Deploy with Precision"**
   - *Explanation:* The final step, "Deploy with Precision," involves taking your code from the development environment to a live, production system. It's about ensuring that everything works smoothly in the real world. You configure servers, databases, and infrastructure, and you handle any issues that arise during deployment. It's a critical phase where your expertise ensures a successful launch.

This tagline emphasizes the developer's role in the entire software development lifecycle, from conceptualization to deployment, and highlights the distinct skills and responsibilities at each stage.
*/}

        <div className="border border-gray-300 rounded-md px-3 py-6 space-y-3">
          <BrushSvg className="mx-auto" />
          <h3 className="text-primaryBlue font-normal text-xl text-center">
            New Design
          </h3>
          <p className="text-center px-6 mt-3 text-sm text-gray-400">
            Carefully crafted precise design, with harmonious typography and
            perfect padding around every component
          </p>
        </div>

        <div className="border border-gray-300 rounded-md px-3 py-6 space-y-3">
          <CodeSvg className="mx-auto" />
          <h3 className="text-primaryBlue font-normal text-xl text-center">
            New Code
          </h3>
          <p className="text-center px-6 mt-3 text-sm text-gray-400">
            Built with HTML, CSS and JS. Startup’s code is easy to under-stand
            and easy to change. No other frameworks needed.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md px-3 py-6 space-y-3">
          <ToggleSvg className="mx-auto" />
          <h3 className="text-primaryBlue font-normal text-xl text-center">
            New Character
          </h3>
          <p className="text-center px-6 mt-3 text-sm text-gray-400">
            Transform your ideas into reality and launch a beautiful site with
            minimal frustration.
          </p>
        </div>
      </div>
    </div>
  );
}
