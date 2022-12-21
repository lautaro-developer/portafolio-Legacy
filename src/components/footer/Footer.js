import { Enlace } from "../enlaces/a";
import { Li } from "../Li/Li";

export default function Footer() {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";
  let ig = "https://instagram.com";
  return (
    <footer>
      <ul>
        <Li valor={<Enlace href={github} valor="Github" />} />
        <Li valor={<Enlace href={tw} valor="tw" />} />
        <Li valor={<Enlace href={ig} valor="ig" />} />
      </ul>
    </footer>
  );
}
