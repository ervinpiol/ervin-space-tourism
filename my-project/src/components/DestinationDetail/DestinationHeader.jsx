import { motion } from "framer-motion";
import React from "react";

const DestinationHeader = () => {
  return (
    <motion.div
      className="text-white font-Barlow text-[28px] tracking-widest font-medium flex gap-7 ss:text-2xl w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <span className="text-darkGray">01</span>PICK YOUR DESTINATION
    </motion.div>
  );
};

export default DestinationHeader;
