"use client";
import Image from 'next/image'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";


const cards = [
  {
    title: "Projects",
    description:
      "My personal projects portfolio.",
    link: "/projects",
  },
  {
    title: "Experience",
    description:
      "My detailed work experience.",
    link: "/experience",
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Hey there! My name is {" "}
          <Highlight className="text-black dark:text-white">
            Jian Ming
          </Highlight>
          .
          <br />
          Passionate about all things Data Science.
          <small className="text-sm font-medium leading-none mt-4 flex justify-center">
            Powered by: Nextjs | Shadcn | Aceternity UI | Typescript
          </small>
        </motion.h1>
      </HeroHighlight>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="p-20 grid grid-cols-2 gap-4"
      >
        <div className='col-span-2 sm:col-span-1'>
          <Image
            width={0}
            height={0}
            src="/ng_jian_ming_profile_pic.jpg"
            alt="Picture of the Ng Jian Ming"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              About
          </h1>
          <p className="leading-7 mt-2">
            I discovered my passion in the realm of data science towards the end
            of my undergraduate program after being exposed to it through
            business analytics modules.

            Taking the leap of faith, I have decided to pursue my career in this field.
            To build up on the relevant and required skills needed, I took up various
            online MOOCs to learn skills like SQL, Python, R, Tableau etc.
            I also explored the area of machine learning and deep learning from
            these online courses which solidified my goal to pursue a career in data science. <br /><br />

            With the goal of doing a career in the area of data science, I strongly believe in any setting,
            there is a need to present and communicate findings in a manner that is easy to understand. Hence,
            I took up an internship at Hewlett Packard under the InkJet Division as a Data Analyst Intern where
            I helped to analyze data, automate reports through Python scripts and also create dashboard visualizations
            through Python and R. The skills gained from this experience greatly helped me to learn ways to present
            findings in an informative and concise manner.<br /><br />

            I further my development through MOOCs and even attempting different data science competitions locally
            (Shopee National Data Science Competition) and internationally on Kaggle. I have also taken up a
            Part-Time Masters of IT in Business (Artificial Intelligence) in SMU along with an apprenticeship in AI Singapore.<br /><br />

            My journey thus far has led me to realize my belief in continuous learning and also my love for any quantitative
            subjects. I strongly believe numerical and quantitative solutions play a big role in many organizations
            and there are many avenues to leverage such solutions creatively to solve a problem.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container w-full"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Navigation
        </h1>
        <HoverEffect items={cards}/>
      </motion.div>
    </main>
  );
}
