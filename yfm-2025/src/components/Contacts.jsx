import { CONTACT_SECTION } from "../constants";
import societyLogo from "../assets/society_logo.png";
import ptiLogo from "../assets/pti_logo.png";
import join from "../assets/join.png";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  }),
};

const Contacts = () => {
  return (
    <section id="contact" className="relative flex flex-col justify-items-center px-4 md:px-32">
      <div class="custom-shape-divider-top-1751734882">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      <motion.div initial="hidden" whileInView="visible" custom={0.4} variants={textVariants} viewport={{ once: true, amount: 0.3 }} className="flex flex-col px-2 md:px-8 mt-12 md:mt-32 items-center">
        <img src={join} alt="" className="w-[500px] md:w-[400px]" />
        <p className="text-white font-semibold text-sm md:text-2xl mt-6 max-w-3xl will-change-transform"> {CONTACT_SECTION.sub} </p>
      </motion.div>

      <div className="flex space-x-6 mt-8 px-2 md:px-8 justify-center">
        {CONTACT_SECTION.socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
              aria-label={link.ariaLabel}
              className="will-change-transform text-white hover:text-gray-300 transition-colors duration-300"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      {/* Footer with logos */}
      <footer className="w-full flex flex-col items-center mt-16 mb-4">
        <div className="flex flex-row items-center justify-center space-x-8">
          <img src={societyLogo} alt="Youth Society Logo" className="h-10 md:h-14 w-auto" />
          <img src={ptiLogo} alt="GKI PTI Logo" className="h-10 md:h-16 w-auto" />
        </div>
      </footer>
    </section>
  );
};

export default Contacts;
