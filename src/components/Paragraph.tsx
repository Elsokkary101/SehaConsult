"use client";

import { motion } from "framer-motion";

export default function Paragraph() {
  const dotsVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="services"
      className="pt-6 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-7xl font-bold text-center text-teal-500">
          WE PROVIDE
          <motion.span className="inline-block ml-2">
            <motion.span
              variants={dotsVariants}
              animate="animate"
              style={{ display: "inline-block" }}
            >
              .
            </motion.span>
            <motion.span
              variants={dotsVariants}
              animate="animate"
              transition={{ delay: 1 }}
              style={{ display: "inline-block" }}
            >
              .
            </motion.span>
            <motion.span
              variants={dotsVariants}
              animate="animate"
              transition={{ delay: 2 }}
              style={{ display: "inline-block" }}
            >
              .
            </motion.span>
          </motion.span>
        </h1>
      </div>
    </motion.section>
  );
}
