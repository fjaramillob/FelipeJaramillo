import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Contacto from './pages/Contacto';

// V1 Pages preserved but unused for current immediate deployment focus
// import Home from './pages/Home';
// import Perfil from './pages/Perfil';
// import Proyectos from './pages/Proyectos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Default directly to Contact page for V1.1 */}
          <Route index element={<Contacto />} />
          <Route path="contacto" element={<Contacto />} />
          
          {/* Routes from V1, disabled dynamically so they are unpublished:
          <Route path="inicio" element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="proyectos" element={<Proyectos />} />
          */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
