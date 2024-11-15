import { TRAINING } from "../constants";
import { motion } from "framer-motion";

const Training = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Training
      </motion.h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING.map((training, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mb-6 flex justify-center"
              >
                <img
                  src={training.image}
                  width={150}
                  height={150}
                  alt={training.title}
                  className="rounded w-64 cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full text-center"
              >
                <h6 className="font-semibold">{training.title}</h6>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
