import "./css/base.css";
import Header from "./header/Header";
import ProyectoPlantilla from "./body/Proyectos/proyectos";
import SobreMi from "./body/sobreMi/SobreMi";
import Lenguajes from "./body/lenguajes/Lenguajes";

export default function Body() {
  return (
    <body id="inicio">
      <Header />
      <ProyectoPlantilla />
      <SobreMi />
      <Lenguajes />
    </body>
  );
}
