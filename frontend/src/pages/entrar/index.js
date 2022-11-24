import styled from "@emotion/styled";
import { TextField, Button, CircularProgress, Fade } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { LoggedContext, UserContext } from "../../context/Context";
import InputMask from 'react-input-mask';
import { validateLogin } from "../../lib/api";

const Entrar = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);
  const { user, setUser } = useContext(UserContext);
  
  const [ cpfField, setCpfField ] = useState("");
  const [ passwordField, setPasswordField ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const onHandleForm = async () => {
    setLoading(true);

    let validatedLogin = await validateLogin(cpfField, passwordField);

    if (!validatedLogin) {
      setTimeout(() => {
        setLoading(false);
        setErrorMessage("CPF ou Senha incorretos!")
      }, 2000);
    } else {
      setTimeout(() => {
        setUser(validatedLogin);
        setLoggedIn(true);
        navigate("/");
      }, 2000);
    }
  }

  return (
    <LoginBox>
      <h2>Bem vindo(a) novamente</h2>
      <p>Por favor forneça os seus dados para prosseguir</p>
      <LoginForm>
        <InputMask
          mask="999.999.999-99"
          maskChar="_"
          onChange={e => setCpfField(e.target.value)}
        >
          {() => <TextField
            id="cpf_input"
            label="CPF"
            variant="outlined"
            maxLength="14"
          />}
        </InputMask>
        <TextField
          onChange={e => setPasswordField(e.target.value)}
          id="senha_input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <p>Não tem uma conta ainda? <Link to="/cadastrar">Cadastre-se aqui.</Link></p>
        <p className="error">{errorMessage}</p>
        <Button color="primary" variant="contained" onClick={onHandleForm}>Entrar</Button>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
            alignSelf: "center"
          }}
          unmountOnExit
        >
          <CircularProgress color="primary" />
        </Fade>
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

  .error {
    color: red;
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
