import { motion } from "framer-motion";
import React from "react";

const TechnologyHeader = () => {
  return (
    <div className="w-[1200px] mx-auto md:w-auto md:mx-0 ss:w-full">
      <motion.p
        className="text-white font-Barlow text-[28px] tracking-widest font-medium flex gap-7 ss:text-2xl "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <span className="text-darkGray">03</span>SPACE LAUNCH 101
      </motion.p>
    </div>
  );
};

export default TechnologyHeader;
