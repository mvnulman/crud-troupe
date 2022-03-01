import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
