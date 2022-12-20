import "./css/base.css";
import Header from "./header/Header";
import ProyectoPlantilla from "./body/Proyectos/proyectos";
import SobreMi from "./body/sobreMi/SobreMi";

export default function Body() {
  return (
    <body>
      <Header />
      <ProyectoPlantilla />
      <SobreMi />
    </body>
  );
}
