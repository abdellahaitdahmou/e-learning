import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
function Register() {
  const [valid, setValid] = useState({
    item1: {
      page: 1,
      val: false,
      divClassName: "hidden p-5 w-4 rounded-full bg-gray-300",
      divIcone: "inline w-10",
    },
    item2: {
      page: 1,
      val: false,
      divIcone: " hidden",
      divClassName: " p-5 w-4 rounded-full bg-gray-300",
      borderClassName: "border-[2px] mx-2 w-[50px] rounded",
    },
    item3: {
      page: 1,
      val: false,
      divIcone: " hidden",
      divClassName: " p-5 w-4 rounded-full bg-gray-300",
      borderClassName: "border-[2px] mx-2 w-[50px] rounded",
    },
    page: 1,
    counter:1,
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./lycée.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData); // Mettre à jour l'état avec les données récupérées
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Appel de la fonction fetchData pour récupérer les données
  }, []);

  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    lycée: "",
    niveau: "",
    email: "",
    password: "",
  });

  

  function HandelChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const [error, setErrors] = useState({
    nomError: "",
    prenomError: "",
    lycéeError: "",
    niveauError: "",
  });

  function error1() {
    if (!user.nom.length) {
      setErrors((prevState) => ({ ...prevState, nomError: "Merci d'entrer ton nom ... !" }));
    } else {
      setErrors((prevState) => ({ ...prevState, nomError: "" }));
    }
    if (!user.prenom.length) {
      setErrors((prevState) => ({ ...prevState, prenomError: "Merci d'entrer ton prenom ... !" }));
    } else {
      setErrors((prevState) => ({ ...prevState, prenomError: "" }));
    }
  }
  
  function error2() {
    if (!user.lycée.length) {
      setErrors((prevState) => ({ ...prevState, lycéeError: "Merci d'entrer ton lycée ... !" }));
    } else {
      setErrors((prevState) => ({ ...prevState, lycéeError: "" }));
    }
    if (!user.niveau.length) {
      setErrors((prevState) => ({ ...prevState, niveauError: "Merci d'entrer ton niveau scolaire ... !" }));
    } else {
      setErrors((prevState) => ({ ...prevState, niveauError: "" }));
    }
  }
  

  useEffect(() => {
    if (valid.page > 1 && valid.page < 3) {
      
      setValid((prevState) => ({
        ...prevState,
        item2: {
          ...prevState.item2,
          divClassName: "hidden p-5 w-4 rounded-full bg-gray-300",
          divIcone: "inline w-10",
          borderClassName: "border-[2px] w-[50px] mx-2 rounded border-blue-300",
        },
      }));
    }
    if (valid.page == 3) {

      setValid((prevState) => ({
        ...prevState,
        item3: {
          ...prevState.item3,
          divClassName: "hidden p-5 w-4 rounded-full bg-gray-300",
          divIcone: "inline w-10",
          borderClassName: "border-[2px] w-[50px] mx-2 rounded border-blue-300",
        },
      }));
    }
  }, [valid.page]);

  function validation(e) {
    e.preventDefault();
    if (valid.page == 1 && user.nom.length > 0 && user.prenom.length > 0) {
      setValid((prevState) => ({ ...prevState, page: valid.page + 1 }));
    }else{
      error1()
    }
    if(valid.page == 2){
      if (user.lycée.length > 0 && user.niveau.length > 0) {
        setValid((prevState) => ({ ...prevState, page: valid.page + 1 }));
      }else{
        setValid((prevState) => ({ ...prevState, counter: valid.counter + 1 }));
        if(valid.counter>=1){
          error2()
        }
      }
    }
  }

  function affichage() {
    
    if (valid.page == 1) {
      return (
        <div>
          <div>
            <label htmlFor="Nom" className="text-sm text-gray-400 px-2">
              Nom
            </label>
            <div className="mb-3">
            <div className="bg-white border-[2px] border-gray-300 rounded-lg py-2 flex gap-2 w-full">
              <div className="flex justify-between gap-1 sm:gap-2 items-center ms-3 ">
                <input
                  type="text"
                  name="nom"
                  id="Nom"
                  className=" focus:outline-none text-sm w-full"
                  placeholder="Ecrivez votre Nom..."
                  onChange={HandelChange}
                  required
                />
              </div>
            </div>
            <p className="text-red-500 mx-2 text-[13px]" >{error.nomError}</p>
            </div>

            <label htmlFor="prenom" className="text-sm text-gray-400 px-2">
              prenom
            </label>
           <div className="mb-3">
           <div className="bg-white border-[2px] border-gray-300 rounded-lg py-2 flex gap-2">
              <div className="flex justify-between gap-2 items-center ms-3">
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  className=" focus:outline-none text-sm w-full"
                  placeholder="Ecrivez votre prenom..."
                  onChange={HandelChange}
                  required
                />
              </div>
            </div>
            <p className="text-red-500 mx-2 text-[13px]" >{error.prenomError}</p>
           </div>

          </div>

          <div className="mb-3 mt-10">
            <button
              onClick={validation}
              className="bg-blue-500 w-full text-white p-2 rounded-lg flex justify-center gap-2"
            >
              <p>Suivant</p>
              <img
                src="./assets/AssetsdeSKOOLUTION/Icones/Suivant.png"
                alt=""
                className="w-5"
              />
            </button>
          </div>
        </div>
      );
    } else if (valid.page == 2) {
      return (
        <div>
          <div>
            <label htmlFor="Nom" className="text-sm text-gray-400 px-2">
              Lycée
            </label>
            <div className="mb-4">
              <select
                name="lycée"
                id="lycée"
                value={user.lycée}
                onChange={HandelChange}
                className="w-full p-2 text-sm text-gray-400 rounded-lg bg-white border-gray-300 px-3 border-[2px] text"
              >
                <option value="" disabled hidden>
                  Choisissez votre lycée
                </option>
                {data.map((elem) => (
                  <option
                    value={elem}
                    key={elem}
                    className="text-black bg-gray-100"
                  >
                    {elem}
                  </option>
                ))}
              </select>
              <p className="text-red-500 mx-2 text-[13px]">{error.lycéeError}</p>

            </div>
            <label htmlFor="prenom" className="text-sm text-gray-400 px-2">
              Niveau
            </label>
            <div className="mb-4">
              <select
                name="niveau"
                id=""
                value={user.niveau}
                onChange={HandelChange}
                className="w-full p-2 text-sm text-gray-400 rounded-lg bg-white border-gray-300 px-3 border-[2px] text"
              >
                <option value="" disabled hidden>
                  Choisissez votre niveau
                </option>
                <option value="1ère année">1ère année </option>
                <option value="2ème année">2ème année </option>
                <option value="3ème année">3ème année </option>
              </select>
              <p className="text-red-500 mx-2 text-[13px]" >{error.niveauError}</p>

            </div>
          </div>

          <div className="mb-3 mt-10">
            <button
              onClick={validation}
              className="bg-blue-500 w-full text-white p-2 rounded-lg flex justify-center gap-2"
            >
              <p>Suivant</p>
              <img
                src="./assets/AssetsdeSKOOLUTION/Icones/Suivant.png"
                alt=""
                className="w-5"
              />
            </button>
          </div>
        </div>
      );
    } else if (valid.page == 3) {
      return (
        <div>
          <div>
            <label htmlFor="Email" className="text-sm text-gray-400 px-2">
              Adresse Email
            </label>
            <div className="bg-white border-[2px] mb-3 border-gray-300 rounded-lg py-2 flex gap-2 w-full">
              <div className="flex justify-between gap-1 sm:gap-2 items-center ms-3"></div>
              <input
                type="text"
                name="email"
                id="Email"
                onChange={HandelChange}
                className=" focus:outline-none text-sm w-full"
                placeholder="Ecrivez votre email içi..."
                required
              />
            </div>
            <label htmlFor="Password" className="text-sm text-gray-400 px-2">
              Mot de passe
            </label>
            <div className="bg-white border-[2px] mb-3 border-gray-300 rounded-lg py-2 flex gap-2 px-4">
              <input
                type="password"
                name="password"
                id="Password"
                onChange={HandelChange}
                className=" focus:outline-none text-sm w-full"
                placeholder="Ecrivez votre mot de passe içi..."
                required
              />
            </div>
          </div>

          <div className="mb-3 mt-10">
            <button
              onSubmit=""
              className="bg-blue-500 w-full text-white p-2 rounded-lg flex justify-center gap-2"
            >
              <p>Suivant</p>
              <img
                src="./assets/AssetsdeSKOOLUTION/Icones/Suivant.png"
                alt=""
                className="w-5"
              />
            </button>
          </div>
          <div className="text-sm flex justify-center gap-2 items-center mt-10">
            <p className="text-gray-400">Avez-vous déjà un compte?</p>
            <Link className="text-blue-500 underline" to={"/login"}>
              Cliquez içi!
            </Link>
          </div>
        </div>
      );
    }
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
                <h1 className="text-4xl font-bold">S’inscrire</h1>
                <p className="text-gray-500 text-sm">
                  Veuillez entrer vos informations!{" "}
                </p>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className={valid.item1.divClassName}></div>
                  <img
                    src="./assets/AssetsdeSKOOLUTION/Icones/Etapecompléte.png"
                    alt=""
                    className={valid.item1.divIcone}
                  />
                </div>
                <div className="flex items-cente ">
                  <hr className={valid.item2.borderClassName} />
                </div>
                <div>
                  <div className={valid.item2.divClassName}></div>
                  <img
                    src="./assets/AssetsdeSKOOLUTION/Icones/Etapecompléte.png"
                    alt=""
                    className={valid.item2.divIcone}
                  />
                </div>
                <div className="flex items-cente ">
                  <hr className={valid.item3.borderClassName} />
                </div>
                <div>
                  <div className={valid.item3.divClassName}></div>
                  <img
                    src="./assets/AssetsdeSKOOLUTION/Icones/Etapecompléte.png"
                    alt=""
                    className={valid.item3.divIcone}
                  />
                </div>
              </div>
              <div>{affichage()}</div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
