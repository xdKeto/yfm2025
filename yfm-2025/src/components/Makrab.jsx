import { MAKRAB_SECTION } from "../constants";
import headline from "../assets/makrab.png";
import tanggal from "../assets/tgl_makrab.png";
import { RiInformation2Fill, RiMapPin2Fill } from "@remixicon/react";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Makrab = () => {
  return (
    <section id="makrab" className="min-h-screen relative flex items-center justify-center overflow-hidden pb-4 md:p-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants} className="will-change-transform flex flex-col items-center justify-center space-y-4 relative z-10">
        <div className="will-change-transform text-shadow-lg text-shadow-red-600-500">
          <img src={headline} width={650} height={650} alt="" />
        </div>

        <a href={MAKRAB_SECTION.link} className="will-change-transform relative mt-6">
          <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-2xl font-bold text-black transition duration-100 hover:bg-yellow-200 hover:text-gray-900">Tekan untuk Daftar!</span>
        </a>

        <div className="will-change-transform flex flex-col md:flex-row mt-6 md:mt-8 gap-4 ">
          <div className="w-full md:w-1/2 px-8 py-2 justify-items-center">
            <img src={tanggal} alt="" className="w-[200px] md:w-[250px]" />
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="h-fit bg-white/80  rounded-lg  text-shadow-md text-shadow text-shadow-white px-6 py-2  ">
              <div className="flex flex-row gap-6">
                <RiMapPin2Fill></RiMapPin2Fill>
                <h3 className="font-semibold text-lg md:text-xl"> {MAKRAB_SECTION.lokasi} </h3>
              </div>
              <div className="flex flex-row gap-6">
                <RiInformation2Fill></RiInformation2Fill>
                <h3 className="font-semibold text-lg md:text-xl"> {MAKRAB_SECTION.usia} </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div class="custom-shape-divider-bottom-1751734920">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Makrab;
