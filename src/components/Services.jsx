import React from "react";
import { useState } from "react";

function Services() {
  const [card] = useState([
    {
      icone: "./assets/AssetsdeSKOOLUTION/Icones/EvaluationsAdaptatives.png",
      title: "Evaluations Adaptatives",
      text: "Evaluations adaptatives ajustées à votre niveau pour suivre vos progrès avec précision.",
    },
    {
      icone: "./assets/AssetsdeSKOOLUTION/Icones/ContenusPersonnalisés.png",
      title: "Contenus Personnalisés",
      text: "Accès à des contenus pédagogiques personnalisés, adaptés à votre style d’apprentissage.",
    },
    {
      icone: "./assets/AssetsdeSKOOLUTION/Icones/SuivideProgression.png",
      title: "Suivi de Progression",
      text: "Suivi détaillé de votre évolution pour visualiser vos progrèsau fil de temps.",
    },
  ]);
  return (
    <section id="Services" className="flex justify-center items-center w-full  sm:my-0 ">
      <div>
        <div className="flex justify-center mt-10 mb-10 md:hidden">
          <hr className="border-[1px] border-gray-300 w-[50%]" />
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="max-w-[70%] lg:max-w-[50%]">
              <h1 className="text-center text-2xl font-bold">Nos services</h1>
              <p className="text-center text-sm text-gray-400">
                Nous offrons une variété de services personnalisés pour
                accompagner les élèves dans leur parcours d’apprentissage. Des
                évaluations adaptatives, des contenus pédagogiques sur mesure et
                un suivi détaillé de la progression sont disponibles.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center p-8">
            <div className="sm:flex justify-between mt-10 gap-5">
              {card.map(elem=>(
                <div className="bg-gray-100 p-6 mb-5 border-[1px] border-gray-500 w-full rounded-lg">
                <div className="bg-white mb-3 p-3 w-12 rounded-full">
                  <img
                    src={elem.icone}
                    alt=""
                    className="w-7"
                  />
                </div>
                <h2 className="font-bold mb-3">{elem.title}</h2>
                <p className="text-sm text-gray-500">
                 {elem.text}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
