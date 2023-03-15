import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="flex items-center justify-center gap-[300px] md:flex-col md:gap-12 ss:flex-col ss:gap-10">
      <div className="w-[560px] md:items-center ss:w-full flex flex-col ss:items-center ">
        <motion.p
          className="text-lightBlue font-Barlow text-[28px] tracking-[4.75px] font-medium ss:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          SO, YOU WANT TO TRAVEL TO
        </motion.p>
        <motion.h1
          className="text-white font-Bellefair text-[150px] font-bold ss:text-8xl ss:py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          SPACE
        </motion.h1>
        <motion.p
          className="text-lightBlue font-Bellefair text-lg leading-7 w-[450px] ss:text-center ss:w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </motion.p>
      </div>
      <Link to="/destinations">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="home_explorer text-darkGray w-[275px] h-[275px] md:w-64 md:h-64 ss:w-52 ss:h-52 bg-white flex justify-center items-center rounded-full text-[2rem] font-Bellefair ">
            EXPLORE
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default FrontPage;
