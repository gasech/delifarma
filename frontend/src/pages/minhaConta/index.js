import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoggedContext } from "../../context/Context";
import { Button, ButtonGroup, TextField } from "@mui/material"
import { Icon } from "@iconify/react";

const MinhaConta = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/entrar");
    }
  }, [])

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <MainWrapper>
      <div className="account-box">
        <div className="sidebar">
          <img src="https://media.discordapp.net/attachments/904631303733919764/1043643806387535912/128-1280406_view-user-icon-png-user-circle-icon-png.png" width={135} />
          <ButtonGroup
            disableElevation
            orientation="vertical"
            color="primary"
            fullWidth={true}
            size="large"
          >
            <Button
              variant="contained"
              startIcon={
                <Icon icon="carbon:user-avatar-filled" />
              }
            >
              Minha Conta
            </Button>
            <Button
              startIcon={
                <Icon icon="mdi:package-variant" />
              }
              onClick={() => { navigate('/minha-conta/pedidos') }}
            >Meus Pedidos</Button>
          </ButtonGroup>
          <Button
            disableElevation
            className="logout-button"
            variant="contained"
            size="large"
            fullWidth={true}
            color="error"
            startIcon={
              <Icon icon="ri:logout-box-r-line" />
            }
            onClick={() => { logout() }}
          >
            Sair
          </Button>
        </div>
        <div className="content">
          <h2>Minha Conta</h2>
          <div className="flex-row">
            <form>
              <h3>Trocar a senha</h3>
              <div className="fields">
                <TextField
                  label="Senha"
                  type="password"
                  variant="outlined"
                />
                <TextField
                  label="Repita a senha"
                  type="password"
                  variant="outlined"
                />
              </div>
              <Button
                color="primary"
                variant="contained"
              >Atualizar Senha</Button>
            </form>
            <form>
              <h3>Informações pessoais</h3>
              <div className="fields">
                <TextField
                  disabled
                  label="CPF"
                  defaultValue="123.123.123-40"
                  variant="outlined"
                />
                <TextField
                  disabled
                  label="Nome"
                  defaultValue="Fulano da Silva"
                  variant="outlined"
                />
                <TextField
                  label="E-mail"
                  defaultValue="fulanodasilva@gmail.com"
                  variant="outlined"
                />
                <TextField
                  label="Telefone"
                  defaultValue="(12) 91231-1234"
                  variant="outlined"
                />
              </div>
              <Button
                color="primary"
                variant="contained"
              >Atualizar Dados</Button>
            </form>
            <form>
              <h3>Endereço para entrega</h3>
              <div className="fields">
                <TextField
                  label="Endereço"
                  defaultValue="Rua 1234"
                  variant="outlined"
                />
                <TextField
                  label="Número"
                  defaultValue="Rua 1234"
                  variant="outlined"
                />
                <TextField
                  label="Complemento"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  label="CEP"
                  defaultValue="123456-12"
                  variant="outlined"
                />
                <TextField
                  label="Cidade"
                  defaultValue="São Paulo"
                  variant="outlined"
                />
                <TextField
                  label="Estado"
                  defaultValue="SP"
                />
              </div>
              <Button
                color="primary"
                variant="contained"
              >Atualizar Endereço</Button>
            </form>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  padding: 40px;

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

export default MinhaConta;



