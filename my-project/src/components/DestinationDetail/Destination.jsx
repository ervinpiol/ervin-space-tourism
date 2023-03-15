import { motion } from "framer-motion";
import React, { useState } from "react";
import destination from "../../constants/content/destination";

const DestinationDetails = ({
  name,
  description,
  avgDistance,
  estTravelTime,
  image,
  setDestination,
  activeDestination,
}) => {
  return (
    <div className="flex gap-40 items-center md:flex-col md:gap-20 ss:flex-col ss:gap-14">
      <motion.img
        src={image}
        alt="Moon"
        className="pl-20 w-[525px] h-[445px] md:pl-0 md:w-96 md:h-96 ss:w-80 ss:h-80 ss:p-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="w-[460px] flex flex-col md:items-center md:w-[500px] ss:w-full ss:items-center">
        <motion.div
          id="destination_link"
          className="text-lightBlue text-lg flex gap-8 font-Barlow pb-4 ss:pb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["MOON", "MARS", "EUROPA", "TITAN"].map((destination) => (
            <button
              key={destination}
              className={` ${
                activeDestination === destination ? "active text-white" : ""
              } `}
              onClick={() => setDestination(destination)}
            >
              {destination}
            </button>
          ))}
        </motion.div>

        <motion.h2
          className="text-white text-[56px] md:text-6xl md:py-8 ss:text-5xl ss:pb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {name}
        </motion.h2>
        <motion.p
          className="text-lightBlue text-lg md:text-center ss:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {description}
        </motion.p>
        <div className="w-full h-[1px] bg-lightBlue my-7" />
        <div className="flex gap-20 ss:flex-col ss:gap-8">
          <div className="flex flex-col gap-3 ss:items-center">
            <motion.span
              className="text-lightBlue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              AVG. DISTANCE
            </motion.span>
            <motion.h3
              className="text-white text-[28px] ss:text-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {avgDistance}
            </motion.h3>
          </div>
          <div className="flex flex-col gap-3 ss:items-center">
            <motion.span
              className="text-lightBlue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              EST. TRAVEL TIME
            </motion.span>
            <motion.h3
              className="text-white text-[28px] ss:text-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {estTravelTime}
            </motion.h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Destination = () => {
  const [currentDestination, setDestination] = useState("MOON");

  return (
    <div>
      {Object.entries(destination).map(([key, value]) => {
        if (value.name !== currentDestination) return null;

        return (
          <DestinationDetails
            key={key}
            {...value}
            setDestination={setDestination}
            activeDestination={currentDestination}
          />
        );
      })}
    </div>
  );
};

export default Destination;
