import styled from "@emotion/styled";
import { TextField, Button } from '@mui/material';

const Cadastrar = () => {
  return (
    <RegisterBox>
      <h2>Bem vindo(a)</h2>
      <p>Por favor forneça os seus dados para criar sua conta</p>
      <RegisterForm>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" maxLength="14" />
        <TextField id="outlined-basic" label="CPF" variant="outlined" inputProps={{ maxLength: 14 }} />
        <TextField id="outlined-basic" label="Nome" variant="outlined" maxLength="14" />
        <TextField id="outlined-basic" label="Telefone" variant="outlined" maxLength="14" />
        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Repita a senha"
          type="password"
          autoComplete="current-password"
        />

        <p>Já possui uma conta?<a href="/entrar"> Entre aqui.</a></p>
        <Button variant="contained">Cadastrar</Button>
      </RegisterForm>
    </RegisterBox>
  )
}

const RegisterBox = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin: 20px auto;
  padding: 30px;
  width: 410px;

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

const RegisterForm = styled.form`
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

export default Cadastrar;
