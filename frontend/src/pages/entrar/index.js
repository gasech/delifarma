import styled from "@emotion/styled";
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { LoggedContext } from "../../context/Context";
import InputMask from 'react-input-mask';
import { validateLogin } from "../../lib/api";

const Entrar = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);
  const navigate = useNavigate();
  const [ cpfField, setCpfField ] = useState("");
  const [ passwordField, setPasswordField ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const onHandleForm = () => {
    console.log(validateLogin(cpfField, passwordField));
  }

  return (
    <LoginBox>
      <h2>Bem vindo(a) novamente</h2>
      <p>Por favor forneça os seus dados para prosseguir</p>
      <LoginForm>
        <InputMask
          mask="999.999.999-99"
          maskChar="_"
        >
          {() => <TextField 
                    onChange={(e) => setCpfField(e.value)}
                    id="cpf_input" 
                    label="CPF" 
                    variant="outlined" 
                    maxLength="14" 
          />}
        </InputMask>
        <TextField      
          onChange={(e) => setPasswordField(e.value)}
          id="senha_input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <p>Não tem uma conta ainda? <Link to="/cadastrar">Cadastre-se aqui.</Link></p>
        <Button color="primary" variant="contained" onClick={onHandleForm}>Entrar</Button>
      </LoginForm>
    </LoginBox >
  )
}
const LoginBox = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin: 40px auto;
  padding: 30px;
  width: 410px;
  height: 520px;

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    color: #717171;
    margin-bottom: 20px;
  }
`;


const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: var(--primaryColor);
  }
`;

export default Entrar;
