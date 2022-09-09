export function Btn({ className, titulo, i, href }) {
  return (
    <a href={href} className={className}>
      {" "}
      {i} {titulo}
    </a>
  );
}
