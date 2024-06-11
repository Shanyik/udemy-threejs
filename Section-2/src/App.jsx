import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import './App.css';
import Basics from './pages/Basics';
import Loader from './pages/components/Loader';
import ParticlesPage from './pages/ParticlesPage';
import ModelPage from './pages/ModelPage';
import Events from './pages/Events';
import EnvironmentPage from './pages/EnvironmentPage';
import CameraPage from './pages/CameraPage';
import ControlsPage from './pages/ControlsPage';
import TextComponent from './pages/components/TextComponent';
import TextPage from './pages/controls/TextPage';

function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <ul>
            <p>
              <Link to="/basics">basics</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/textureLoader">texture</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/particles">particles</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/model">3d model</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/events">events</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/env">env</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/camera">camera</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/controls">controls</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/text">text</Link>
            </p>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/basics" element={<Basics />} />
        <Route path="/textureLoader" element={<Loader />} />
        <Route
          path="/particles"
          element={<ParticlesPage />}
        />
        <Route path="/model" element={<ModelPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/env" element={<EnvironmentPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route
          path="/controls"
          element={<ControlsPage />}
        />
        <Route path="/text" element={<TextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
