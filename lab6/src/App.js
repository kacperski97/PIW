import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import GreetPage from './pages/GreetPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/greet" element={<GreetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
