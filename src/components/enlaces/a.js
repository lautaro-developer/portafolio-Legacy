export const Enlace = ({ href, valor, id, target }) => {
  return (
    <a key={id} href={href} target={target}>
      {valor}
    </a>
  );
};
