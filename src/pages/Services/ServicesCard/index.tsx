import Image from "next/image";
import { title } from "process";
import React, { FC } from "react";
import { transform } from "typescript";
import map from "../../../assets/images/images/Group-15.png";
import { motion, AnimatePresence, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export interface servicesCardProps {
  svg: any | string;
  description: string;
  title: string;
  link?: string;
  index?: number;
}

const ServicesCard: FC<servicesCardProps> = ({
  svg,
  description,
  title,
  index,
}) => {
  return (
    // <AnimatePresence>
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="card-animation xl:px-[3rem] pb-4  md:pb-[8rem]  md:p-0  border-yellow-400  "
        variants={cardVariants}
      >
        <div className="flex justify-center  ">
          <h1 className="text-[back]">
            <Image className="w-[60px]" src={svg} alt="" />
          </h1>
        </div>
        <h1 className="text-white text-[25px]  font-normal text-center capitalize mt-0 mb-2.5">
          <a
            href="https://adison-reality-33c263.webflow.io/services#Real-Estate-Consulting"
            className="text-black text-2xl font-semibold no-underline pb-[80px]"
          >
            {title}
          </a>
        </h1>
        <p className="text-black text-base leading-6 font-normal text-center">
          {description}
        </p>
      </motion.div>
      <div data-w-id="c39414b0-edfc-1209-d18c-f9f381920ab5"></div>
    </motion.div>
    // </AnimatePresence>
  );
};

export default ServicesCard;
