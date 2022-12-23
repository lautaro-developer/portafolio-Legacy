import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Btn2({ open, click }) {
  return !open ? (
    <FontAwesomeIcon icon={faBars} onClick={click} />
  ) : (
    <FontAwesomeIcon icon={faTimes} onClick={click} />
  );
}
