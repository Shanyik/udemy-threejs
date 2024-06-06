import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import './App.css';
import Basics from './pages/Basics';
import Loader from './pages/components/Loader';

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
              <Link to="/basics">part 1</Link>
            </p>
          </ul>
          <ul>
            <p>
              <Link to="/textureLoader">part 2</Link>
            </p>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/basics" element={<Basics />} />
        <Route path="/textureLoader" element={<Loader />} />
      </Routes>
    </Router>
  );
}

export default App;
