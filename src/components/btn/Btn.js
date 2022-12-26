export function Btn({ className, titulo, i, href }) {
  return (
    <a href={href} className={className} target="_blank">
      {i} {titulo}
    </a>
  );
}
