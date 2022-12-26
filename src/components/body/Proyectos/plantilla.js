import { Btn } from "../../btn/Btn";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Parrafo } from "../../Parrafo/Parrafo";
import { Enlace } from "../../enlaces/a";

import "../../../css/body/div__contenedor/div__contenedor.css";
import "../../../css/body/div__contenedor/div__img/img.css";
import "../../../css/body/div__contenedor/div__titulo/div__titulo.css";
import "../../../css/body/div__contenedor/div__descripcion/div__descripcion.css";
import "../../../css/body/div__contenedor/div__contenedorCard.css";
import "../../../css/body/div__contenedor/div__btnProyecto/div__btnProyecto.css";
import "../../../css/body/div__contenedor/div__btnProyecto/button__btn/button__btn.css";
import "../../../css/body/div__contenedor/div__btnProyecto/button__btn/demo.css";
import "../../../css/body/div__contenedor/div__btnProyecto/button__btn/github.css";

export default function ProyectoPlantilla({
  titulo,
  descripcion,
  img,
  alt,
  gh,
  dm,
}) {
  const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
  const desktopIcon = <FontAwesomeIcon icon={faDesktop} />;

  return (
    <div className="div__contenedor">
      <div className="div__img">
        <img src={img} alt={alt} />
      </div>
      <div className="div__titulo">
        <h2>{titulo}</h2>
      </div>
      <div className="div__descripcion">
        <Parrafo valor={descripcion}/>
      </div>
      <div className="div__btnProyecto">
        <Btn
          i={gitHubIcon}
          className="button__btn github"
          titulo="Repo"
          href={gh}
        />
        <Btn
          i={desktopIcon}
          className="button__btn demo"
          titulo="Demo"
          href={dm}
        />
      </div>
    </div>
  );
}
