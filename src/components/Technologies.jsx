import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import ArcGISLogo from "../assets/ArcGIS_logo.png";
import ArcGISPro from "../assets/ArcgisPro.jpeg";
import googleEarth from "../assets/google_earth.jpeg";
import erMapper from "../assets/Ermapper.jpeg";
import sasPlanet from "../assets/sasplanet.jpeg";
import seadas from "../assets/seadas.jpeg";
import landsat from "../assets/landsat.png";
import agisoft from "../assets/agisoft.jpeg";
import faststone from "../assets/faststone.jpeg";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={ArcGISLogo}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={ArcGISPro}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={googleEarth}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={erMapper}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={sasPlanet}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={seadas} alt="ArcGIS Logo" className="bg-white w-16 h-16 " />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={landsat}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={agisoft}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={faststone}
            alt="ArcGIS Logo"
            className="bg-white w-16 h-16 "
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJsSquare className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPhp className="text-7xl text-[#474a8a]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsLine className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaLaravel className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiCodeigniter className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaSass className="text-7xl text-pink-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoFirebase className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaFigma className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
