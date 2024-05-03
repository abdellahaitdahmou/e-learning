import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

function Nav() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full bg-white overflow-hidden">
      <div className="flex justify-between p-5 items-center">
        <h1 className="text-xl sm:text-3xl font-bold">
          <span className="text-blue-500">SK</span>
          <span className="text-orange-500">OO</span>
          <span className="text-blue-500">LUTION</span>
        </h1>
        <div className="hidden md:inline-flex gap-5 md:text-xl font-semibold text-gray-500">
          <div>
            <Link
              to="Section1"
              smooth={true}
              spy={true}
              activeClass="active"
              className="focus:font-bold cursor-pointer focus:text-black"
            >
              Accueil
            </Link>
          </div>
          <div>
            <Link
              to="Services"
              smooth={true}
              spy={true}
              activeClass="active"
              className="focus:font-bold cursor-pointer focus:text-black"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              to="Cours"
              smooth={true}
              spy={true}
              activeClass="active"
              className="focus:font-bold cursor-pointer focus:text-black"
            >
              Cours
            </Link>
          </div>
          <div>
            <Link
              to="Apropos"
              smooth={true}
              spy={true}
              activeClass="active"
              className="focus:font-bold cursor-pointer focus:text-black"
            >
              A propos
            </Link>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-blue-600 text-white hover:bg-blue-500 shadow-lg p-2 sm:p-3 rounded-lg text-sm md:text-xl"
          >
            connexion
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
