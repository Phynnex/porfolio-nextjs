import React, { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import FeatureProjectCard from "./FeatureProjectCard";
import ProjectCard from "./ProjectCard";
import { motion, Variants } from "framer-motion";
import { featuredProjects, projects } from '@/constants/projects'
import Button from "./Button";

const Project = () => {
  const productVariants: Variants = {
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

  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <section id="project" className="py-6 text-Slate">
      <Container>
        <div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={productVariants}
          >
            <Heading headingNumber={3} headingText="Some Things I’ve Built" />
          </motion.div>

          {/*      FEATURED PROJECTS      */}

          <div className="flex flex-col lg:gap-28 md:gap-52 gap-10 lg:my-14 md:my-32 my-14">
            {featuredProjects.map((data, index) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={productVariants}
                key={index}
              >
                <FeatureProjectCard project={data} index={index} />
              </motion.div>
            ))}
          </div>

        
        </div>
      </Container>
    </section>
  );
};

export default Project;
