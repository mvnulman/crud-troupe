import './App.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Clients from './pages/Clients'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
