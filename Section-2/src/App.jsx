import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import './App.css';
import Basics from './pages/Basics';

function App() {

  return (
    <Router>
      <div>
        <nav style={{position: "fixed", top: 0, left: 0, zIndex: 1}}>
          <ul>
            <p>
              <Link to="/basics">part 1</Link>
            </p>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/basics" element={<Basics />} />
      </Routes>
    </Router>
  )
}

export default App
