"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: <Award className="w-12 h-12 text-orange-400" />,
    title: "Expertise",
    description: "Seasoned professionals with deep industry knowledge",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-orange-400" />,
    title: "Innovation",
    description: "Cutting-edge solutions for modern healthcare challenges",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-orange-400" />,
    title: "Long-term Success",
    description: "Strategies that position you for sustained growth",
  },
  {
    icon: <Users className="w-12 h-12 text-orange-400" />,
    title: "Customized Approach",
    description: "Tailored solutions that meet your unique needs",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          With a team of seasoned professionals and a commitment to excellence,
          SehaConsilt is your trusted partner in navigating the complexities of
          modern healthcare. We offer customized solutions that not only meet
          your immediate needs but also position your organization for long-term
          success.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-teal-500">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
