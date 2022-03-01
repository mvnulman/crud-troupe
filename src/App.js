import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Clients from "./pages/Clients";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes isLogged={true} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
