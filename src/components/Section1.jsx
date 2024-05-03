import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";

function Section1() {
  const navigate = useNavigate();

  return (
    <section id="Section1" className="flex justify-center sm:mt-20 mt-0 lg:mt-0">
      <div className=" sm:flex sm:items-center md:justify-around px-20">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="sm:hidden pt-14"
        >
          <img
            src="./assets/Vectors/Herosectionvector.jpg"
            alt="Hero section vector"
            className="w-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="lg:max-w-[550px] text-center sm:text-left">
            <h2 className="font-bold text-3xl mb-3 md:mb-4">
              Commencer votre Test Diagnostique!
            </h2>
            <p className="mb-3 md:mb-4 text-gray-400">
              Bienvenue sur SKOOLUTION, la plateforme d’évaluation en ligne pour
              les lycéens au Maroc.
            </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-orange-500 hover:bg-orange-600 shadow-xl  text-white px-3 py-2 rounded-lg text-sm font-Poppins"
            >
              Commencer Maintenant!
            </button>
          </div>
        </motion.div>
        <div className="hidden sm:inline py-16">
          <motion.img
            src="./assets/Vectors/Herosectionvector.jpg"
            alt="Hero section vector"
            className="w-full md:w-[644px]"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
