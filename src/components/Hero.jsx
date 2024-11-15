import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Rinsaf.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleClick = () => {
    window.location.href =
      "https://drive.google.com/drive/folders/10RU2E3E2avRbkZPRvvx1_9tePaaUSafJ?usp=sharing";
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="mb-6 flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
            >
              Ririn Safitri
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              dragConstraints={{ left: -100, right: 100 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer | Mapper
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <button
              onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition transform hover:scale-105"
            >
              Download My CV
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ririn Safitri"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
