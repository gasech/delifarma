import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EmployeeContext } from "../../context/Context";
import { Button, ButtonGroup, TextField, Tabs, Tab, Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import InputMask from 'react-input-mask';
import { updatePassword, updatePersonalInfo } from "../../lib/api";
import GerenciarPedidos from '../gerenciarPedidos/';
import GerenciarClientes from '../gerenciarClientes/';
import GerenciarProdutos from '../gerenciarProdutos/';
import GerenciarFuncionarios from '../gerenciarFuncionarios/';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Painel = () => {
  const [panelValue, setPanelValue] = useState(0);

  const { employee, setEmployee, loggedInEmployee, setLoggedInEmployee } = useContext(EmployeeContext);

  const [userFields, setUserFields] = useState({
    password: employee.password,
    repeatPassword: employee.password,
    cpf: employee.cpf,
    nome: employee.nome,
    email: employee.email,
    cargo: employee.cargo,
  })

  const [messagePass, setMessagePass] = useState("");
  const [messagePersonal, setMessagePersonal] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInEmployee) {
      navigate("/entrar-painel");
    }
  }, [])

  const logout = () => {
    setLoggedInEmployee(false);
    setEmployee({})
    navigate('/entrar-painel');
  }

  const handleForms = async (formType) => {
    switch (formType) {
      case "updateSenha":
        let updaterPass = await updatePassword({
          ...employee,
          senha: userFields.password
        })

        if (!updaterPass) {
          setMessagePass("Erro ao alterar a senha!")
        } else {
          setEmployee(updaterPass);
          setMessagePass("Senha alterada com sucesso!");
        }

        break;
      case "updatePersonal":

        let updaterPersonal = await updatePersonalInfo({
          ...employee,
          email: userFields.email,
          telefone: userFields.telefone
        })
        if (!updaterPersonal) {
          setMessagePersonal("Erro ao alterar as informações pessoais!")
        } else {
          setEmployee(updaterPersonal);
          setMessagePersonal("Informações pessoais alterada com sucesso!");
        }

        break;
    }
  }

  const handleChange = (event, newValue) => {
    setPanelValue(newValue);
  }

  return (
    <MainWrapper>
      <div className="account-box">
        <div className="content">
          <Tabs value={panelValue} onChange={handleChange}>
            <Tab label="Minha Conta" />
            <Tab label="Gerenciar Produtos" />
            <Tab label="Gerenciar Clientes" />
            <Tab label="Gerenciar Pedidos" />
            <Tab label="Gerenciar Funcionários" />
          </Tabs>
          <TabPanel value={panelValue} index={0}>
            <div className="flex-row">
              <div>
                <h2>Painel</h2>
                <p>Bem-vindo {employee.nome}</p>
                <p style={{marginBottom: "20px"}}>Cargo: {employee.cargo}</p>
                <Button
                  color="error"
                  variant="contained"
                  disableElevation
                  onClick={() => logout()}
                >Sair da Conta</Button>

              </div>
              <form>
                <h3>Trocar a senha</h3>
                <div className="fields">
                  <TextField
                    label="Senha"
                    type="password"
                    variant="outlined"
                    onChange={e => setUserFields({ ...userFields, password: e.target.value })}
                  />
                  <TextField
                    label="Repita a senha"
                    type="password"
                    variant="outlined"
                    onChange={e => setUserFields({ ...userFields, repeatPassword: e.target.value })}
                  />
                </div>
                <p>{messagePass}</p>
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  onClick={() => handleForms("updateSenha")}
                >Atualizar Senha</Button>
              </form>
              <form>
                <h3>Informações pessoais</h3>
                <div className="fields">
                  <TextField
                    disabled
                    label="CPF"
                    defaultValue={employee.cpf ? employee.cpf : ""}
                    onChange={e => setUserFields({ ...userFields, cpf: e.target.value })}
                    variant="outlined"
                  />
                  <TextField
                    disabled
                    label="Nome"
                    defaultValue={employee.nome ? employee.nome : ""}
                    onChange={e => setUserFields({ ...userFields, nome: e.target.value })}
                    variant="outlined"
                  />
                  <TextField
                    label="E-mail"
                    defaultValue={employee.email ? employee.email : ""}
                    onChange={e => setUserFields({ ...userFields, email: e.target.value })}
                    variant="outlined"
                  />
                </div>
                <p>{messagePersonal}</p>
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  onClick={() => handleForms("updatePersonal")}
                >Atualizar Dados</Button>
              </form>
            </div>
          </TabPanel>
          <TabPanel value={panelValue} index={1}>
            <GerenciarProdutos />
          </TabPanel>
          <TabPanel value={panelValue} index={2}>
            <GerenciarClientes />
          </TabPanel>
          <TabPanel value={panelValue} index={3}>
            <GerenciarPedidos />
          </TabPanel>
          <TabPanel value={panelValue} index={4}>
            <GerenciarFuncionarios />
          </TabPanel>
        </div>
      </div>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  padding: 40px;

  .general-info {
    padding: 10px;
  }

  .account-box {
    display: flex;
    gap: 20px;
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    background-color: var(--primaryLayer);
  }

  .account-box hr {
    border: 0.5px solid lightgrey;
    width: 1px;
  }  
  
  .sidebar {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
  }

  .sidebar img { 
    align-self: center;
    justify-self: center;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .logout-button {
    margin-top: 150px;
  }

  .logout-button .l-link {
    color: red;
  }

  .content {
    padding: 20px;
  }

  .flex-row {
    display: flex;
    flex-direction: column; 
  }

  .content form {
    padding: 25px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .fields {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 900px;
  }

  .content form button {
    width: 200px;
  }
`;

export default Painel;
