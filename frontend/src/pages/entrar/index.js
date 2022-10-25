import styled from "@emotion/styled";
import { TextField, Button } from '@mui/material';

const Entrar = () => {
  return (
    <LoginBox>
      <h2>Bem vindo(a) novamente</h2>
      <p>Por favor forneça os seus dados para prosseguir</p>
      <LoginForm>
        <TextField id="outlined-basic" label="CPF" variant="outlined" maxLength="14" />
        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <p>Não tem uma conta ainda? <a href="/cadastrar">Cadastre-se aqui.</a></p>
        <Button variant="contained">Entrar</Button>
      </LoginForm>
    </LoginBox>
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

  button {
    background-color: var(--secundaryColor);
  }

  button:hover {
    background-color: #26B7B7; 
  }
`;

export default Entrar;
