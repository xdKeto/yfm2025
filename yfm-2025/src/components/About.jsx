import logo from "../assets/logo.png";
import { ABOUT_SECTION } from "../constants";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="relative justify-items-center pb-8 md:p-16">
      <div class="custom-shape-divider-top-1751734882">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      <div className="flex flex-col-reverse max-w-7xl md:flex-row items-center justify-center will-change-transform px-4 md:px-8 md:mt-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          className="w-full md:w-5/6 px-6 py-4 md:py-6 will-change-transform bg-white/80  rounded-lg  text-shadow-sm text-shadow text-shadow-white"
        >
          <h2 className="text-3xl md:text-4xl font-semibold pb-2">
            Apa itu <span className="font-black text-purple-950 text-shadow-fuchsia-300 text-shadow-2xs">Youth Festival Month?</span>
          </h2>
          <p className="md:text-xl text-lg pb-6">{ABOUT_SECTION.about}</p>
          <h2 className="text-3xl md:text-4xl  font-semibold pb-2">
            YFM 2025 bertema <span className="font-black text-red-700 text-shadow-red-950 text-shadow-2xs"> Community of Love </span>
          </h2>
          <p className="md:text-xl text-lg">{ABOUT_SECTION.tema}</p>
        </motion.div>
        <div className="w-full md:w-3/6 px-6 md:px-8 py-2 md:py-8 will-change-transform flex justify-center">
          <motion.img initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants} src={logo} width={500} height={650} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
