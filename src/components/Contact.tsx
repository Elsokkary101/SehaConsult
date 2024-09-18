"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-teal-500 text-white "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Contact Information
            </h3>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6  mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">info@sehacon.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6  mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6  mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  123 Innovation St, Wellness City, HC 12345
                </p>
              </div>
            </div>
          </motion.div>
          <motion.form
            className="space-y-6 "
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold  mb-4">
              Send us a Message
            </h3>
            <Input
              placeholder="Your Name"
              className="bg-gray-50 border-gray-300 text-black"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-gray-50 border-gray-300 text-black"
            />
            <Input
              placeholder="Subject"
              className="bg-gray-50 border-gray-300 text-black"
            />
            <Textarea
              placeholder="Your Message"
              className="h-32 bg-gray-50 border-gray-300 text-black"
            />
            <Button className="w-full bg-gray-500 hover:bg-gray-600 transition-colors">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
