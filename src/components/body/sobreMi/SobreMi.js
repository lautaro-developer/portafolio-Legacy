import {
  faGamepad,
  faBook,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imgNutria from "../../../img/nutria.jpg";

import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__contenedorCardSobreMi.css";

import "../../../css/body/div__contenedorSobreMi/div__contenedorSobreMi.css";
import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__descripcionSobreMi/div__descripcionSobreMi.css";

import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__presentarce.css";
import "../../../css/body/div__contenedorSobreMi/div__pasatiempos/div__pasatiemposContenedor/div__pasatiemposContenedor.css";

import "../../../css/body/div__contenedorSobreMi/div__pasatiempos/div__tituloPasatiempos/div__tituloPasatiempos.css";
import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__imgSobreMi/div__imgSobreMi.css"


function Parrafo({ valor }) {
  return <p>{valor}</p>;
}

export function Icons({ icons, size }) {
  return <FontAwesomeIcon icon={icons} size={size} />;
}

export default function SobreMi() {
  let estudie =
    "Estudie de manera autodidacta sosteniendome de recursos gratis en internet.";

  let cursos =
    "Gracias a la oportunidad del curso de alura latam fortaleci los conocimientos que tuve previamente, siempre estoy dispuesto a aprender otras tecnologias que tengan o no que ver con el desarrollo web.";

  let empezarProgramar =
    "Comenze estudiando el desarrollo web a mitad de 2020 cuando  estaba la pandemia, anteriormente (2019) ya habia tocado el tema del desarrollo web pero no tan aprofundidad.";

  let sobreMi = [estudie, cursos, empezarProgramar];
  let pasatiempos = [faGamepad, faBook, faHeadphonesSimple];
  let parrafoPasatiempos = ["videjuegos", "leer", "musica"];

  return (
    <div
      id="sobremi"
      className="div__contenedorSobreMi div__contenedorSobreMiRes"
    >
      <div className="div__contenedorCardSobreMi div__contenedorCardSobreMiRes">
        <div className="div__imgSobreMi">
          <img src={imgNutria} />
        </div>
        <div className="div__presentarce">
          <div>
            <p>Hola soy</p>
            <h1>Alonso Diaz Ruben Lautaro</h1>
            <p>Desarrollador web Front-End</p>
          </div>

          <div className="div__descripcionSobreMi">
            {sobreMi.map((i) => {
              return (
                <div key={i}>
                  <Parrafo valor={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="div__pasatiempos">
        <div className="div__tituloPasatiempos">
          <h2>Pasatiempos</h2>
        </div>
        <div>
          <div className="div__pasatiemposContenedor">
            {pasatiempos.map((i) => {
              return (
                <div>
                  <Icons icons={i} size="2x" />
                  <Parrafo valor={i.iconName} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
