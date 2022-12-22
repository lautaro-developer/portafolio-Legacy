import {
  faFacebookSquare,
  faTwitterSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Enlace } from "../enlaces/a";
import { Li } from "../Li/Li";
import "../../css/footer/ul__footer/ul__footer.css"

const Iconos = ({ icon, size }) => {
  <FontAwesomeIcon icon={icon} size={size} />;
};

export default function Footer() {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";
  let ig = "https://instagram.com";

  return (
    <footer>
      <ul className="ul__footer">
        <Li
          valor={
            <Enlace
              href={github}
              valor={<FontAwesomeIcon icon={faGithub} size="2x" />}
            />
          }
        />
        <Li
          valor={
            <Enlace
              href={tw}
              valor={<FontAwesomeIcon icon={faFacebookSquare} size="2x" />}
            />
          }
        />
        <Li
          valor={
            <Enlace
              href={ig}
              valor={<FontAwesomeIcon icon={faTwitterSquare} size="2x" />}
            />
          }
        />
      </ul>
    </footer>
  );
}
