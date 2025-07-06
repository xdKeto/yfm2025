import headline from "../assets/mancing.png";
import tanggal from "../assets/tgl_mancing.png";
import { MANCING_SECTION } from "../constants";
import { RiInformation2Fill, RiMapPin2Fill } from "@remixicon/react";
import fishing from "../assets/fishing.png";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Mancing = () => {
  return (
    <section id="mancing" className="min-h-screen relative flex items-center justify-center overflow-hidden pb-4 md:p-8">
      <img
        src={fishing}
        style={{
          position: "absolute",

          pointerEvents: "none",
          opacity: 0.85,
          zIndex: 3,
          width: 200,
          height: 200,
          top: "80%",
          left: "70%",
        }}
        alt=""
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={textVariants} className="will-change-transform flex flex-col items-center justify-center space-y-4 relative z-10">
        <div className="will-change-transform text-shadow-lg text-shadow-blue-500">
          <img src={headline} width={650} height={650} alt="" />
        </div>

        <a href={MANCING_SECTION.link} className="will-change-transform relative mt-6">
          <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-2xl font-bold text-black transition duration-100 hover:bg-yellow-200 hover:text-gray-900">Daftar Sekarang!</span>
        </a>

        <div className="will-change-transform flex flex-col md:flex-row mt-6 md:mt-8 gap-4 ">
          <div className="w-full md:w-1/2 px-8 py-2 justify-items-center">
            <img src={tanggal} alt="" className="w-[200px] md:w-[250px]" />
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="h-fit bg-white/80  rounded-lg  text-shadow-md text-shadow text-shadow-white px-6 py-2  ">
              <div className="flex flex-row gap-6">
                <RiMapPin2Fill></RiMapPin2Fill>
                <h3 className="font-semibold text-lg md:text-xl"> {MANCING_SECTION.lokasi} </h3>
              </div>
              <div className="flex flex-row gap-6">
                <RiInformation2Fill></RiInformation2Fill>
                <h3 className="font-semibold text-lg md:text-xl"> {MANCING_SECTION.usia} </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mancing;
