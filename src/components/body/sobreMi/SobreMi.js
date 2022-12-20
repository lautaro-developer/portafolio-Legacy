import imgNutria from "../../../img/nutria.jpg";
import "../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__contenedorCardSobreMi.css";
import "../../css/body/div__contenedorSobreMi/div__contenedorSobreMi.css";

export default function SobreMi() {
  return (
    <div className="div__contenedorSobreMi">
      <div className="div__contenedorCardSobreMi">
        <div className="div__imgSobreMi">
          <img src={imgNutria} />
        </div>
        <div className="div__descripcionSobreMi">
          <div>
            <p>Hola soy</p>
            <h1>Alonso Diaz Ruben Lautaro</h1>
            <p>Desarrollador web Front-End</p>
          </div>
        </div>
      </div>
    </div>
  );
}
