import "../css/header/ul/ul.css";
import "../css/header/sobreMi/sobreMi.css"
import "../css/header/li_sobreMi/li_sobreMi.css"
import "../css/header/li__nombre/li__nombre.css";
import "../css/btn/Btn.css"
import { Btn } from "../btn/Btn";

const SobreMiEnlaces = ({ valor, id }) => {
  return (
    <a key={id} href="#">
      {valor}
    </a>
  );
};

export default function Header() {
  let valor = ["Inicio", "Proyectos", "Sobre mi"];
  return (
    <header>
      <nav>
        <ul className="lista">
          <li className="li__nombre">Alonso Diaz Ruben Lautaro</li>
          <li className="li_sobreMI">
            <div className="sobreMi">
              {valor.map((e) => {
                return <SobreMiEnlaces valor={e} id={e} />;
              })}
            </div>
            <div>
              <Btn className="btn" titulo="Hablemos"/>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
