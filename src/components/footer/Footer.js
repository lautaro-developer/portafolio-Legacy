import { Enlace } from "../enlaces/a";
import "../../css/footer/div__footer/div__footer.css";

export default function Footer() {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";

  return (
    <footer>
      <div className="div__footer">
        <p>
          Si queres ver el codigo esta en{" "}
          {<Enlace href={github} valor="Github" target={true} />}. Si queres
          contactarme aqui te dejo mis redes{" "}
          {<Enlace href={tw} valor="Twitter" target={true} />} o si queres por{" "}
          {<Enlace href="as" valor="Linkedin" target={true} />}
        </p>
      </div>
    </footer>
  );
}
