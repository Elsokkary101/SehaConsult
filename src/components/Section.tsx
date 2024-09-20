"use client";

import { motion } from "framer-motion";
type SectionProps = {
  title: string;
  sub: string;
  subs: Service [];
  index: number;
};

type Service = {
  title: string;
  description: string;
};

export default function Section(props : SectionProps) {
    const arrPara : Service [] = props.subs;
  return (
    <motion.section
      id="services"
      className={`pt-16 pb-10 ${
        props.index % 2 == 0 ? "bg-gray-100 text-teal-500" : "bg-teal-500 text-white"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          {props.title}
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className={`w-4/5 text-lg md:text-lg mb-8 text-center ${props.index %2 == 0 ? "text-gray-500" : "text-white"}`}>
            {props.sub}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {arrPara.map((service : Service, index ) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-400">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
