import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.header 
      className="navbar glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <NavLink to="/" className="brand">Felipe Jaramillo</NavLink>
        <nav className="nav-links">
          {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink> */}
          {/* <NavLink to="/perfil" className={({ isActive }) => isActive ? "active" : ""}>Perfil</NavLink> */}
          {/* <NavLink to="/proyectos" className={({ isActive }) => isActive ? "active" : ""}>Proyectos</NavLink> */}
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
        </nav>
      </div>
    </motion.header>
  );
}
