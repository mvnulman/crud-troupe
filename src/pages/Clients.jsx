import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MaterialTable from "material-table";
import tableIcons from "../components/MaterialTableIcons";
import Navbar from "../components/Navbar";

const Clients = () => {
  const url = "http://localhost:8000/clientes";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // hook created to fetch data from the json-server and render into the UI everytime the component is mounted
  useEffect(() => {
    getClients();
  }, [data]);

  //function to get all the clients throught the json-server, using GET method.
  const getClients = () => {
    fetch(url).then((res) => {
      res.json().then((data) => {
        setLoading(true);
        setData(data);
      });
    });
  };



  const columns = [
    {
      title: "Nome",
      field: "nome",
      validate: (rowData) =>
        rowData.nome === undefined ? "Campo obrigatório" : true,
    },
    {
      title: "CPF",
      field: "cpf",
      validate: (rowData) =>
        rowData.cpf === undefined ? "Campo obrigatório" : true,
    },
    {
      title: "Email",
      field: "email",
      validate: (rowData) => {
        if (rowData.email === undefined || rowData.email === "") {
          return "Campo obrigatório";
        } else if (!rowData.email.includes("@" && ".")) {
          return "Email inválido!";
        }
        return true;
      },
    },
    {
      title: "CEP",
      field: "cep",
      validate: (rowData) =>
        rowData.cep === undefined ? "Campo obrigatório" : true,
    },
    {
      title: "Rua",
      field: "rua",
      validate: (rowData) =>
        rowData.rua === undefined ? "Campo obrigatório" : true,
    },
    {
      title: "Número",
      field: "numero",
      validate: (rowData) =>
        rowData.numero === undefined ? "Campo obrigatório" : true,
    },
    {
      title: "Bairro",
      field: "bairro",
      validate: (rowData) =>
        rowData.bairro === undefined ? "Campo obrigatório" : true,
    },
    {
      title: "Cidade",
      field: "cidade",
      validate: (rowData) =>
        rowData.cidade === undefined ? "Campo obrigatório" : true,
    },
  ];

  return (
    <>
      <Navbar />

      {loading ? (
        <MaterialTable
          title="Clientes"
          icons={tableIcons}
          columns={columns}
          data={data}
          options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                //Backend call through the update table button
                fetch(url + "/" + oldData.id, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newData),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    getClients();
                    resolve();
                  });
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                //Backend call through the delete table button
                fetch(url + "/" + oldData.id, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    getClients();
                    resolve();
                  });
              }),
          }}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Clients;
