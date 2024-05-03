import React,{useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Login() {
  const [user, setUser]=useState({
    email:"",
    password:"",
    checkbox:false

  })

  function handelChange(e){
    const {name, value}=e.target
    setUser({...user, [name]:value})

  }

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex">
        <div className="h-screen hidden w-1/2 bg-blue-500 sm:flex items-center justify-center">
          <Link to={"/"}>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white"
            >
              <h5 className="text-sm">Bienvenue à</h5>
              <h2 className="font-bold text-xl md:text-3xl">
                S K OO L U T I O N
              </h2>
              <p className="text-sm">La platefome d’éducation n°1 au Maroc.</p>
            </motion.div>
          </Link>
        </div>
        <div className="flex px-5 sm:p-0 bg-blue-500 sm:bg-white  h-screen w-full sm:w-1/2 items-center justify-center">
          <div>
            <Link to={"/"}>
              <motion.div
                variants={fadeIn("bottom", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white sm:hidden text-center mb-12"
              >
                <h5 className="text-sm">Bienvenue à</h5>
                <h2 className="font-bold text-xl md:text-3xl">
                  S K OO L U T I O N
                </h2>
                <p className="text-sm">
                  La platefome d’éducation n°1 au Maroc.
                </p>
              </motion.div>
            </Link>
            <motion.form
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full p-5 lg:p-24 bg-white rounded-xl shadow-lg sm:shadow-none sm:border-none border-[2px] border-gray-500"
            >
              <div className="mb-10">
                <h1 className="text-4xl font-bold">Se Connecter</h1>
                <p className="text-gray-500 text-sm">
                  Veuillez entrer vos informations!
                </p>
              </div>
              <div>
                <label htmlFor="Email" className="text-sm text-gray-400 px-2">
                  Adresse Email
                </label>
                <div className="bg-white border-[2px] mb-3 border-gray-300 rounded-lg py-2 flex gap-2 w-full">
                  <div className="flex justify-between gap-1 sm:gap-2 items-center ms-3">
                    <img
                      src="./assets/AssetsdeSKOOLUTION/Icones/Adresseemail.png"
                      alt=""
                      className="w-5"
                    />
                    <div className="border border-gray-400 h-6"></div>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="Email"
                    onChange={handelChange}
                    className=" focus:outline-none text-sm w-full"
                    placeholder="Ecrivez votre email içi..."
                    required
                  />
                </div>
                <label
                  htmlFor="Password"
                  className="text-sm text-gray-400 px-2"
                >
                  Mot de passe
                </label>
                <div className="bg-white border-[2px] mb-3 border-gray-300 rounded-lg py-2 flex gap-2">
                  <div className="flex justify-between gap-2 items-center ms-3">
                    <img
                      src="./assets/AssetsdeSKOOLUTION/Icones/Motdepasse.png"
                      alt=""
                      className="w-5 h-5"
                    />
                    <div className="border-l-2 border-gray-400 h-6 w-full"></div>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="Password"
                    onChange={handelChange}
                    className=" focus:outline-none text-sm w-full"
                    placeholder="Ecrivez votre mot de passe içi..."
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <input type="checkbox" value={user.checkbox} onChange={e=>setUser({...user,checkbox:e.target.checked})} required />
                  <p className="text-gray-400 text-[12px]">
                    Se souvenir de moi
                  </p>
                </div>
                <a href="#" className="text-blue-400 underline text-[12px]">
                  Mot de passe oublié ?
                </a>
              </div>
              <div className="mb-3">
                <button className="bg-blue-500 w-full text-white p-2 rounded-lg">
                  Se Connecter
                </button>
              </div>
              <div className="flex justify-between items-center mb-5">
                <hr className="border-[1px] border-gray-300 w-[40%]" />
                <p className="text-gray-400">Ou</p>
                <hr className="border-[1px] border-gray-300 w-[40%]" />
              </div>
              <div className="flex justify-center items-center gap-10 lg:gap-18">
                <a href="#">
                  <div className="rounded border-[1px] px-5 py-2">
                    <img
                      src="./assets/AssetsdeSKOOLUTION/Icones/Google.png"
                      alt=""
                      className="w-5"
                    />
                  </div>
                </a>
                <a href="#">
                  <div className="rounded border-[1px] px-5 py-2">
                    <img
                      src="./assets/AssetsdeSKOOLUTION/Icones/Facebook.png"
                      alt=""
                      className="w-5"
                    />
                  </div>
                </a>
                <a href="#">
                  <div className="rounded border-[1px] px-5 py-2">
                    <img
                      src="./assets/AssetsdeSKOOLUTION/Icones/TikTok.png"
                      alt=""
                      className="w-5"
                    />
                  </div>
                </a>
              </div>
              <div className="flex text-[12px] justify-between w-full mt-5 ">
                <p className="text-gray-400">Avez-vous déjà un compte?</p>
                <Link to={"/register"} className="text-blue-400 underline">
                  Cliquez içi!
                </Link>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
