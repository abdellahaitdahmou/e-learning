import "../css/methode.css";
// import img1 from '../../public/assets/Vectors/img1.jpg'
export default function Method() {
  return (
    <div className="method-section">
      <div className="methode-heading">
        <h1>Nos méthodes</h1>
        <p>
          Ceci sont nos méthodes en ce qui concerne le déroulement des cours et
          des tests, pour la meilleur expérience d’apprentissage avec
          SKOOLUTION!
        </p>
      </div>
      <div className="methode-paragrphes">
        <div className="methode-section1" id="Cours">
          <div className="para">
            <div className="img lg:hidden">
              <img src="./assets/Vectors/Courses method vector.jpg" />
            </div>
            <div className="haeding-div">
              <h1 className="text-center">Accès aux cours et exercices</h1>
            </div>
            <p>
              Accédez à une variété des cours et d’exercices corrigés dans des
              différentes matières pour renforcer vos connaissances et pratiquer
              vos compétences académiques.
            </p>
            <div className="flex justify-center">
              <button className="shadow-lg mx-2 bg-blue-500 text-white p-3 rounded-lg mt-4 text-sm">
                <a>Explorer les Cours et les Exercices!</a>
              </button>
            </div>
          </div>
          <div className="img hidden lg:inline">
            <img src="./assets/Vectors/Courses method vector.jpg" />
          </div>
        </div>

        <div className="methode-section1">
          <div className="img-test">
            <img src="./assets/Vectors/Test methode vector.jpg" />
          </div>
          <div className="para-test">
            <div className="haeding-div">
              <h1>Passer les Tests</h1>
            </div>
            <p>
              Mettez-ous au défi avec nos tests pratiques et vérifiez vos acquis
              dans les différentes matières en passant des évaluation corrigées.
            </p>
            <div className="btn-div-test">
              <button className="shadow-lg">
                <a>Commencer les Tests!</a>
              </button>
            </div>
          </div>
        </div>

        <div className="methode-section1">
          <div className="para-test">
            <div className="img-test lg:hidden">
              <img src="./assets/Vectors/Pregression method vector.jpg" />
            </div>
            <div className="haeding-div">
              <h1>Suivre votre Progression</h1>
            </div>
            <p>
              Suivez votre progression à travers les cours et les exercices
              corrigés grace à notre outil de suivi détaillée et identifier
              votre domaine d’amélioration pour optimiser votre apprentissage
            </p>
            <div className="btn-div-test">
              <button className="shadow-lg">
                <a>Suivre vos Progression!</a>
              </button>
            </div>
          </div>
          <div className="img-test hidden lg:inline">
            <img src="./assets/Vectors/Pregression method vector.jpg" />
          </div>
        </div>

        <div className="methode-section1">
          <div className="img-test">
            <img src="./assets/Vectors/Calendarmethodvector.jpg" />
          </div>
          <div className="para-test">
            <div className="haeding-div">
              <h1>Consulter le Calendrier</h1>
            </div>
            <p>
              Consultez botre calendrierpour connaitre les dates importantes des
              tests, des évaluations et des événements éducatifs à venir. Restez
              organiser et planifier votre emploi du temps d’étude en
              conséquence
            </p>
            <div className="btn-div" id="Apropos">
              <button className="shadow-lg bg-blue-500 text-white p-3 rounded-lg mt-4 text-sm">
                <a>Voir le Calendrier</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="abonement-section">
        <div className="contenu">
          <h1>Abonnez-vous a notre Newsletter!</h1>
          <p>
            Soyez au courant des événement à venir, des nouveautés sur la
            plateforme et des opportunités d’apprentissage en vous inscrivant à
            notre Newsletter.
          </p>
          <div className="input-div">
            <input type="text" placeholder="Rechercher..." />
            <button className="shadow-lg">
              <a>S’abonner</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
