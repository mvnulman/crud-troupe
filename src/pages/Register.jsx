import { FormGroup, FormControl, Input, InputLabel, Button} from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import NavBar from "../components/Navbar";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Sweet Alert const required to work with React
const MySwal = withReactContent(Swal)

const initialValues = {
  nome: "",
  cpf: "",
  email: "",
  endereco: "",
  cep: "",
  rua: "",
  numero: "",
  bairro: "",
  cidade: "",
};



const Register = () => {
  const url = "http://localhost:8000/clientes";
  const [user, setUser] = useState(initialValues);
  const { nome, cpf, email, cep, rua, numero, bairro, cidade } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  

  const addUser = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        cpf,
        email,
        cep,
        rua,
        numero,
        bairro,
        cidade,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const navigateTo = useNavigate();  
  
  const handleRegister = (e) => {
    if (nome === "" || cpf === "" || email === "" || cep === "" || rua === "" || numero === "" || bairro === "" || cidade === "") {
      MySwal.fire({
        title: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
    } else {
      e.preventDefault();
      addUser(); 
      MySwal.fire({
        title: 'Usuário cadastrado com sucesso!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
      navigateTo("/clients");
    }
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          ...user,
          cep: data.cep,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
        });
      });
  };


  return (
    <>
      <NavBar />
      <FormGroup className="register-form">
        <FormControl required={true} margin="dense">
          <InputLabel>Nome</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="nome" value={nome} required={true}/>
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>CPF</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="cpf" value={cpf} />
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>E-mail</InputLabel>
          <Input
            type="email"
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>CEP</InputLabel>
          <Input
            onBlur={checkCEP}
            onChange={(e) => onValueChange(e)}
            name="cep"
            value={cep}
          />
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>Rua</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="rua" value={rua} />
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>Número</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="numero"
            value={numero}
          />
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>Bairro</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="bairro"
            value={bairro}
          />
        </FormControl>
        <FormControl required={true} margin="dense">
          <InputLabel>Cidade</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="cidade"
            value={cidade}
          />
        </FormControl>
        <Button onClick={handleRegister}>Cadastrar</Button>
      </FormGroup>
    </>
  );
};

export default Register;
