import React, { useRef, useEffect } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { motion, Variants } from "framer-motion";
import about from "../../public/images/about.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const skills = [
    'Reactjs',
    'Nextjs',
    'TypeScript',
    'Redux',
    'Tailwind CSS',
    'Framer Motion',


   
  ]

  return (
    <section
      id="about"
      style={{
        backgroundImage: "url(/images/about.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="about-poster relative py-10 max-w-6xl w-full mx-auto"
    >
      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Heading headingNumber={1} headingText="About Me" />
          </motion.div>
          <div className="">
            <div className="flex flex-col gap-5 my-5 text-Slate md:text-base text-sm leading-normal ">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
               Growing up, I was captivated by the possibilities of technology, dreaming of one day creating software that could change the world, just like Bill Gates. That childhood fascination with computer science eventually led me to pursue a degree in the field. However, the path wasn't always straightforward - there were moments of distraction and uncertainty along the way. <br/><br/>It wasn't until I enrolled in a coding bootcamp that the spark was reignited, and I found myself immersed in the thrill of building dynamic, impactful web applications. Since then, I've had the privilege of collaborating with talented teams within fast-paced environments, developing responsive, user-friendly solutions that cater to diverse client needs.
<br/><br/>Now, my focus is on harnessing the latest technologies to craft scalable, high-performance web applications that push the boundaries of what's possible. I'm driven by the power of technology to transform the digital landscape and create meaningful experiences for users. My goal is to apply my skills and passion within a standard organization, where I can continue to grow and contribute to the development of innovative, industry-leading products.
                Here are a few technologies I’ve been working with recently:

                <div className="grid md:grid-cols-3 grid-cols-2 mt-5">
                  {skills?.map((name, index) => <div key={index} className="flex items-center gap-2">
                    <Icon
                      icon="mdi:arrow-compass"
                      className="pt-1.5 transorm rotate-90 text-[15px] text-primary "
                    />
                    {name}
                  </div>)}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
