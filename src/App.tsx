import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import AfterMe from './pages/AfterMe';
import Pacto from './pages/Pacto';
import MostWater from './pages/MostWater';
import ExploraEne from './pages/ExploraEne';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="afterme" element={<AfterMe />} />
          <Route path="pacto" element={<Pacto />} />
          <Route path="mostwater" element={<MostWater />} />
          <Route path="exploraene" element={<ExploraEne />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
