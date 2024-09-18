"use client";

import Image from "next/image";
import Logo from "../app/images/Logo.png"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="bg-gradient-to-r from-teal-500 to-orange-400 text-white py-20 md:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center justify-between p-2">
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src={Logo}
              alt="SEHACON Logo"
              width={500}
              height={200}
              className="w-[80%] h-auto"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Innovating Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              we specialize in providing expert health consulting services
              tailored to the evolving needs of the healthcare industry. Our
              focus is on delivering innovative, evidence-based solutions that
              enhance patient outcomes, streamline operations, and ensure the
              highest standards of care.
            </p>
            <Button className="bg-white text-teal-500 hover:bg-teal-50 transition-colors">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
