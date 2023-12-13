# Delifarma

![Project Screenshot](https://raw.githubusercontent.com/gasech/delifarma/main/assets/screenshot1.png)

Full Stack Pharmaceutical Application w/ Spring and React

This is an online ecommerce that I developed during college. All transactions are fictional.

## Programming language and tools used
<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="reactjs" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="40" height="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="spring" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
</p>

## Developing
Developing in this application should be very simple, I'm using a MVC architecture with REST APIs and MySQL as a database.

### Requirements

- Node.js and npm
- Java Development Kit (JDK)
- MySQL Shell

### Running a local development environment

1. Start your MySQL server

Run a database called `delifarma` and run the sql script located in MySQL/

2. Start your API Rest with Spring

Before starting your backend adjust your MySQL `datasource.url`, `datasource.username` and `datasource.password` in `backend/src/main/resources/application.properties` according to your local database environment.

```sh
cd backend 
chmod +x ./mvnw
./mvnw
```

3. Run your local application with Node
```sh
cd frontend
npm install
npm start
```

## Documentation
All of the documentation are written in Portuguese from Brazil.

### UML case 

<img src="https://raw.githubusercontent.com/gasech/delifarma/main/assets/uml_case.png" />

### Application architecture

<img src="https://raw.githubusercontent.com/gasech/delifarma/main/assets/architecture.png" />

## References

- CAMARGO, Robson, Termo de Abertura do Projeto: Saiba tudo sobre ele, RobsonCamargo, 14 de abril de 2018, disponível em <https://robsoncamargo.com.br/blog/Termo-de-abertura-de-projeto-saiba-tudo-sobre-ele>, Acesso em 22 de ago. de 2022.

- SZRAJBMAN, Sallo, CRUD Application With React and Spring Boot, Baeldung, 4 de maio de 2022, disponível em <https://www.baeldung.com/spring-boot-react-crud>, Acesso em 15 de set. de 2022.
Drogaria São Paulo, Utilizado como fonte de inspiração para o Design e Branding, hoje, disponível em <https://www.drogariasaopaulo.com.br/>, Acesso em 22 de set. de 2022.

- OficialFarma, Utilizado como fonte de inspiração para o Design e Branding, hoje, disponível em <https://www.oficialfarma.com.br/>, Acesso em 22 de set. de 2022.
SpringBoot Docs, Spring Boot Reference Documentation, hoje, disponível em <https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/>, Acesso em 23 de set. de 2022.

- React Docs, React Reference Documentation, hoje, disponível em <https://reactjs.org/docs/getting-started.html>, Acesso em 30 de set. de 2022.

- React Router, React Router Documentation, hoje, disponível em <https://reactrouter.com/en/main>, Acesso em 30 de set. de 2022.

- MaterialUI Docs, Material UI Reference Documentation, hoje, disponível em <https://mui.com/pt/material-ui/getting-started/overview/>, Acesso em 30 de set. de 2022.

- Pedro Tech, Register and Login Tutorial | ReactJS, NodeJS, MySQL - Cookies, Sessions, Hashing <https://www.youtube.com/watch?v=sTHWNPVNvm8>, Acesso em 10 de out. de 2022. 

- John Au-Yeung, How to mask a React Material-UI TextField? <https://thewebdev.info/2021/12/26/how-to-mask-a-react-material-ui-textfield/>, Acesso em 11 de out. de 2022.

- RoadsideCoder, React Shopping Cart Tutorial <https://www.youtube.com/watch?v=HptuMAUaNGk>, Acesso em 11 de out. de 2022.
