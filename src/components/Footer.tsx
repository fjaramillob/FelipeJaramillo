import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer container">
      <p>© {new Date().getFullYear()} Felipe Jaramillo. Todos los derechos reservados.</p>
    </footer>
  );
}
