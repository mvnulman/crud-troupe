# CRUD - Troupe

### CRUD application developed for the company Troupe
<br>

![1](https://user-images.githubusercontent.com/63374582/156173850-6f7354b3-d388-4b97-8f22-5a0a9e2181e7.png)

![2](https://user-images.githubusercontent.com/63374582/156174345-bb14c50f-890f-4b0b-bcef-e929436bd9c1.png)

![3](https://user-images.githubusercontent.com/63374582/156174429-a47d95c2-43ee-42a5-82ce-15d07c4b8f29.png)


## 🧪 Technologies

- [React](https://pt-br.reactjs.org)
- [React Hooks]
- [React-Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Material UI](https://mui.com/)
- [JSON-Server](https://https://github.com/typicode/json-server/)
- [CSS]

## 🚀 How to run the project

To run the project you need to have [Node.js](https://nodejs.dev) and [Git](https://git-scm.com) installed on your machine. You will also need a text editor, I used [VSCode](https://code.visualstudio.com).

- Clone this repository.

```
git clone https://github.com/mvnulman/crud-troupe.git

```

# Client (Front-End)

1. Access the project folder.

```
 cd .\crud-troupe\
```

2. Install dependencies.

```
yarn 
```
or
```
npm install
```

3. Run the application in development mode.

```
yarn start
```
or

```
npm start
```

4. Access the Local Host
```
https://localhost:3000
```
<br>


# Server (Back-End)

1. Access the /src project folder.

```
 cd .\crud-troupe\src
```

2. Install the JSON-Server globally in your machine
```
yarn global add json-server
```
or
```
npm install -g json-server
```

3. Run the server, using this command:
```
json-server --watch db.json --delay 2000 --port 8000

* The port 5000 was changed due conflicts with the Control Center service on macOS Monterey using this port.
```

# Features
## Login:
- [x] E-mail input validation;
- [x] Password input with +4 characters validation;
- [x] Storage one Token after the Submit button on the Login component;
- [x] Logout button with redirection to the Login page when pressed;
- [ ] Only logged users can see the Register Clients form / Clients List (Working in progress with ProtectedRoutes / Auth state implementation 🚧);


## Register Clients Form:
- [x] Nome, CPF, Email, CEP, Rua, Número, Bairro, Cidade inputs connected with the JSON-Server via HTTP methods(GET / PUT / POST / DELETE);
- [x] All inputs above required (With Sweet Alert dependecy to user visual notification)
- [x] ViaCEP fetch API working on the Register component;
- [ ] MaskInput on CEP input (Working in progress 🚧);

## Clients List:
- [x] Nome, CPF, Email, CEP table / input showed to the user;
- [x] Button to Add / Edit / Delete client's info;
- [x] Search field working properly;
- [x] Loading spinner notification displayed to the user during the fetch getUser infos;
- [x] Pagination / Sort;
- [ ] Responsive (Working in progress 🚧)
<br><br>


# 📝 License

This project is licensed under [MIT](/LICENSE).
