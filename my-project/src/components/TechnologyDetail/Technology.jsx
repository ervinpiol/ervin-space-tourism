import { motion } from "framer-motion";
import React, { useState } from "react";
import technology from "../../constants/content/technology";

import { useMediaQuery } from "@react-hook/media-query";

const TechnologyDetails = ({
  id,
  name,
  description,
  imagePortrait,
  imageLandscape,
  activeTechnology,
  setTechnology,
}) => {
  const isLandscape = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex items-center mr-auto ml-[140px] gap-28 md:flex-col md:gap-12 md:ml-0 ss:flex-col-reverse ss:ml-0 ss:gap-14 ss:h-[555px]">
      <div className="flex items-center gap-20 md:gap-10 ss:flex-col-reverse ss:gap-10">
        <div className="text-white flex flex-col gap-8 md:gap-14 ss:flex-row ss:gap-10">
          {Object.entries(technology).map(([key, value], index) => {
            // Extract the numeric part of the key
            const buttonNumber = key.split("technology")[1];
            const delay = index * 0.2;
            return (
              <motion.button
                key={key}
                className={`w-20 h-20 md:h-[65px] md:w-[65px] border rounded-full border-lightBlue hover:border-white hover:border-2 ss:w-12 ss:h-12 ${
                  value.id === activeTechnology
                    ? "bg-white text-darkGray"
                    : "bg-none"
                }`}
                onClick={() => setTechnology(value.id)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay, duration: 0.3 }}
              >
                {buttonNumber}
              </motion.button>
            );
          })}
        </div>

        <div className=" w-[470px] ss:flex ss:items-center ss:flex-col ss:w-full">
          <motion.h4
            className="text-lightBlue"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            THE TERMINOLOGY...
          </motion.h4>
          <motion.h2
            className="text-white text-[56px] md:text-5xl md:py-4 ss:text-3xl ss:py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-lightBlue text-lg pt-5 ss:text-center ss:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      <motion.img
        className="md:w-[350px] ss:w-full"
        src={isLandscape ? imagePortrait : imageLandscape}
        alt=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      />
    </div>
  );
};

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState("LAUNCH");

  const handleTechnologyChange = (technologyId) => {
    setActiveTechnology(technologyId);
  };

  return (
    <div>
      {Object.entries(technology).map(([key, value]) => {
        if (value.id !== activeTechnology) return null;

        return (
          <TechnologyDetails
            key={key}
            {...value}
            setTechnology={handleTechnologyChange}
            activeTechnology={activeTechnology}
          />
        );
      })}
    </div>
  );
};

export default Technology;
