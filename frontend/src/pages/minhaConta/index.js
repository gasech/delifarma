import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoggedContext, UserContext} from "../../context/Context";
import { Button, ButtonGroup, TextField } from "@mui/material"
import { Icon } from "@iconify/react";
import InputMask from 'react-input-mask'
import { updateAddress, updatePassword, updatePersonalInfo } from "../../lib/api";

const MinhaConta = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);
  const { user, setUser } = useContext(UserContext);
  const [ userFields, setUserFields ] = useState({
    password: user.password,
    repeatPassword: user.password,
    cpf: user.cpf,
    nome: user.nome,
    email: user.email,
    telefone: user.telefone,
    endereco: user.endereco,
    numero: user.numero,
    complemento: user.complemento,
    cep: user.cep,
    cidade: user.cidade,
    estado: user.estado
  })

  const [messagePass, setMessagePass] = useState("");
  const [messagePersonal, setMessagePersonal] = useState("");
  const [messageAddress, setMessageAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/entrar");
    }
  }, [])

  const logout = () => {
    setLoggedIn(false);
    setUser({})
      
  }

  const handleForms = async (formType) => {
    switch(formType){
      case "updateSenha":

        let updaterPass = await updatePassword({
          ...user, 
          senha: userFields.password
        })
        
        if(!updaterPass) {
          setMessagePass("Erro ao alterar a senha!")
        } else {
          setUser(updaterPass);
          setMessagePass("Senha alterada com sucesso!");
        }

        break;
      case "updatePersonal":

        let updaterPersonal = await updatePersonalInfo({
          ...user, 
          email: userFields.email,
          telefone: userFields.telefone
        })
        if(!updaterPersonal) {
          setMessagePersonal("Erro ao alterar as informações pessoais!")
        } else {
          setUser(updaterPersonal);
          setMessagePersonal("Informações pessoais alterada com sucesso!");
        }
        
        break;
      case "updateAddress":
        
        let updaterAddress = await updateAddress({
          ...user, 
          endereco: userFields.endereco,
          numero: userFields.numero,
          cep: userFields.cep,
          cidade: userFields.cidade,
          estado: userFields.estado,
          complemento: userFields.complemento
        })

        if(!updaterAddress) {
          setMessageAddress("Erro ao alterar o endereço!")
        } else {
          setUser(updaterAddress);
          setMessageAddress("Endereço alterado com sucesso!");
        }

        break;
    }
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
            fullWidth
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
            fullWidth
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
                  onChange={e => setUserFields({...userFields, password: e.target.value})}
                />
                <TextField
                  label="Repita a senha"
                  type="password"
                  variant="outlined"
                  onChange={e => setUserFields({...userFields, repeatPassword: e.target.value})}
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
                  defaultValue={user.cpf ? user.nome : ""}
                  onChange={e => setUserFields({...userFields, cpf: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  disabled
                  label="Nome"
                  defaultValue={user.nome ? user.nome : ""}
                  onChange={e => setUserFields({...userFields, nome: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="E-mail"
                  defaultValue={user.email ? user.email : ""}
                  onChange={e => setUserFields({...userFields, email: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="Telefone"
                  defaultValue={user.telefone ? user.telefone : ""}
                  onChange={e => setUserFields({...userFields, telefone: e.target.value})}
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
            <form>
              <h3>Endereço para entrega</h3>
              <div className="fields">
                <TextField
                  label="Endereço"
                  defaultValue={user.endereco ? user.endereco : ""}
                  onChange={e => setUserFields({...userFields, endereco: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="Número"
                  defaultValue={user.numero ? user.numero : ""}
                  onChange={e => setUserFields({...userFields, numero: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="Complemento"
                  defaultValue={user.complemento ? user.complemento : ""}
                  onChange={e => setUserFields({...userFields, complemento: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="CEP"
                  defaultValue={user.cep ? user.cep : ""}
                  onChange={e => setUserFields({...userFields, cep: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="Cidade"
                  defaultValue={user.cidade ? user.cidade : ""}
                  onChange={e => setUserFields({...userFields, cidade: e.target.value})}
                  variant="outlined"
                />
                <TextField
                  label="Estado"
                  defaultValue={user.estado ? user.estado : ""}
                  onChange={e => setUserFields({...userFields, estado: e.target.value})}
                />
              </div>
              <p>{messageAddress}</p>
              <Button
                color="primary"
                variant="contained"
                disableElevation
                onClick={() => handleForms("updateAddress")}
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



