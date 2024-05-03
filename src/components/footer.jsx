import { Link } from "react-scroll";
import "../css/footer.css";
export default function Footer() {
  return (
    <div className="footer-section mt-14">
      <div className="bordure">
        <div className="footer-contenu">
          <h1 className="text-xl sm:text-3xl font-bold">
            <span className="text-blue-500">SK</span>
            <span className="text-orange-500">OO</span>
            <span className="text-blue-500">LUTION</span>
          </h1>
          <ul>
            <li>
              <Link smooth={true} to="Section1">
                <a>Accueil</a>
              </Link>
            </li>
            <li>
              
              <Link smooth={true} to="Services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              
              <Link smooth={true} to="Cours">
                <a>Cours</a>
              </Link>
            </li>
            <li>
              
              <Link smooth={true} to="Apropos">
                <a>Apropos</a>
              </Link>
            </li>
          </ul>
          <p>
            SKOOLUTION est une platefome d’éducation dédié à fournir aux élèves
            du lycée au Maroc les outils nécessaires pour réussir leur parcours
            éducatif, avec une gamme de cours, exercices et des tests pratiques.
          </p>
          <div className="footer-icons">
            <div className="barre">
              <hr WIDTH={397} />
            </div>
            <div className="icons">
              <img src="./assets/AssetsdeSKOOLUTION/Icones/icons8-linkedin-30.png" />
              <img src="./assets/AssetsdeSKOOLUTION/Icones/icons8-facebook-30.png" />
              <img src="./assets/AssetsdeSKOOLUTION/Icones/icons8-instagram-30 (1).png" />
              <img src="./assets/AssetsdeSKOOLUTION/Icones/icons8-tic-tac-30.png" />
              {/* mainoflandinpage */}
            </div>
            <div className="barre">
              <hr WIDTH={397} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
