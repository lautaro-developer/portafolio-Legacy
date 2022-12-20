import imgTiendaVirtual from "../../../img/pagEcommerse.png";
import imgTodoList from "../../../img/todoList.png";
import ProyectoPlantilla from "./plantilla";

let titulo;
let descripcion;
let alt;
let img;

export default function proyectos() {
  return (
    <div className="div__contenedorCard">
      {<Proyecto1 />}
      {<Proyecto2 />}
    </div>
  );
}

function Proyecto1() {
  titulo = "Pag Tienda Virtual";
  descripcion = `Pagina diseñada para el curso de Alura Latam. Este cuenta con guardado en localStorage pero no es visible al usuario`;
  alt = "Pag tienda Virtual";
  img = imgTiendaVirtual;

  return (
    <ProyectoPlantilla
      titulo={titulo}
      descripcion={descripcion}
      alt={alt}
      img={img}
    />
  );
}

function Proyecto2() {
  titulo = "Pag TodoList";
  descripcion =
    "App para guardar sus notas por fecha, Este es un proyecto echo por un curso de Aluta Latam, hace uso de localStorage para guardar la informacion";
  img = imgTodoList;
  alt = "Pag TodoList";
  return (
    <ProyectoPlantilla
      titulo={titulo}
      descripcion={descripcion}
      alt={alt}
      img={img}
    />
  );
}
