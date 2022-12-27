import {
  faFacebookSquare,
  faTwitterSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Enlace } from "../enlaces/a";

import "../../css/footer/ul__footer/ul__footer.css";

const Iconos = ({ icon, size }) => {
  <FontAwesomeIcon icon={icon} size={size} />;
};

export default function Footer() {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";
  let ig = "https://instagram.com";

  return (
    <footer>
      <div className="div__footer">
        <p>Si queres ver el codigo esta en</p> {<Enlace valor="Github"/>}
      </div>
    </footer>
  );
}
