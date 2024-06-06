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
        </nav>
      </div>
      <Routes>
        <Route path="/basics" element={<Basics />} />
        <Route path="/textureLoader" element={<Loader />} />
        <Route
          path="/particles"
          element={<ParticlesPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
