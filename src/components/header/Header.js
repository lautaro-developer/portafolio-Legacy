import "../css/header/ul/ul.css";
import "../css/header/sobreMi/sobreMi.css";
import "../css/header/li_sobreMi/li_sobreMi.css";
import "../css/header/li__nombre/li__nombre.css";
import "../css/header/Header/Header.css";
import "../css/btn/Btn.css";
import { Btn } from "../btn/Btn";
import { Li } from "../Li/Li";
import { Enlace } from "../enlaces/a";

function SobreMi() {
  let valor = ["Inicio", "Proyectos", "Sobre mi", "Lenguajes"];
  return (
    <div className="sobreMi">
      {valor.map((e) => {
        let link = e.split(" ").join("").toLowerCase();
        return <Enlace valor={e} id={link} href={`#${link}`} />;
      })}
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="lista">
          <Li estilo="li__nombre" valor="Alonso Diaz Ruben Lautaro" />
          <li className="li_sobreMI">
            <SobreMi />
            <Btn className="btn" titulo="Hablemos" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
