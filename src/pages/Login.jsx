import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/regex";
import logoImg from "../assets/logo-troupe.png";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  
  // input login validations
  const validateEmailPassword = () => {
    if (!validateEmail.test(email)) {
      setEmailErr(true);
      
    } else {
      setEmailErr(false);
    }

    if (!validatePassword.test(password)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
      navigateTo("/clients");
    }
  };

  //function to generate a random "token" simulating a login on backend
  const handleStorageToken = () => {
    const userToken = {
      email,
      password,
    };
    localStorage.setItem("Token", JSON.stringify(userToken));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmailPassword();
    handleStorageToken();
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="login-container">
        <a href="https://troupebrasil.com.br">
          <img src={logoImg} alt="logo" tooltip="Troupe website" />
        </a>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && (
              <p className="validation-error">
                Insira um e-mail válido!
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && (
              <p className="validation-error">
                Senha inválida! Mínimo 4 caracteres, 1 letra and 1
                número
              </p>
            )}
            <button onClick={handleSubmit} className="btn-login" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
