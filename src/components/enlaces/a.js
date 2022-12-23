export const Enlace = ({ href, valor, id }) => {
  return (
    <a key={id} href={href}>
      {valor}
    </a>
  );
};
