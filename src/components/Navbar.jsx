import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigateTo = useNavigate();

  const handleLogout = (useNavigate) => {
    navigateTo("/");
  };

  const navigateToRegister = (useNavigate) => {
    navigateTo("/register");
  };

  const navigateToClients = (useNavigate) => {
    navigateTo("/clients");
  };

  return (
    <div className="clients-navbar">
      <h1>CRUD - Troupe</h1>
      <div className="navbar-buttons">
        <button onClick={navigateToClients}>Clientes</button>
        <button onClick={navigateToRegister}>Cadastrar Cliente</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
