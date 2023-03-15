import { motion } from "framer-motion";
import React, { useState } from "react";
import crew from "../../constants/content/crew";

const CrewDetails = ({
  position,
  name,
  description,
  image,
  setCrew,
  activeCrew,
}) => {
  return (
    <div className="flex items-center justify-between relative gap-10 md:flex-col ss:flex-col ss:w-full">
      <div className="flex flex-col md:items-center ss:items-center">
        <motion.h3
          className="text-white text-[32px] md:text-2xl ss:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {position}
        </motion.h3>
        <motion.h2
          className="text-white text-[56px] w-[540px] md:text-5xl md:w-auto md:pb-3 md:pt-5 ss:text-center ss:text-3xl ss:w-full"
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
          className="text-lightBlue text-lg pt-6 w-[450px] md:w-4/6 md:text-center  ss:text-center ss:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex gap-4 absolute bottom-16 md:bottom-0 md:left-0 ss:bottom-[-10px]"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {Object.entries(crew).map(([key, value]) => (
            <button
              key={key}
              className={`w-4 h-4 rounded-full ${
                value.id === activeCrew
                  ? "bg-white"
                  : "bg-darkGray hover:opacity-50 hover:bg-white"
              }`}
              onClick={() => setCrew(value.id)}
            ></button>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img
          src={image}
          alt={name}
          className="h-[712px] md:w-96 md:h-[530px] ss:pb-16 ss:h-[450px]"
        />
      </motion.div>
    </div>
  );
};

const Crew = () => {
  const [activeCrew, setActiveCrew] = useState("DOUGLAS");

  const handleCrewChange = (crewId) => {
    setActiveCrew(crewId);
  };

  return (
    <div>
      {Object.entries(crew).map(([key, value]) => {
        if (value.id !== activeCrew) return null;

        return (
          <CrewDetails
            key={key}
            {...value}
            setCrew={handleCrewChange}
            activeCrew={activeCrew}
          />
        );
      })}
    </div>
  );
};

export default Crew;
