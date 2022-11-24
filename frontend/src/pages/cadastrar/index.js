import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import InputMask from 'react-input-mask'
const Cadastrar = () => {
  return (
    <RegisterBox>
      <h2>Bem vindo(a)</h2>
      <p>Por favor forneça os seus dados para criar sua conta</p>
      <RegisterForm>
        <TextField id="outlined-basic" required={true} label="E-mail" variant="outlined" maxLength="14" />
        <InputMask
          mask="999.999.999-99"
          maskChar="_"
        >
          {() => <TextField id="outlined-basic" required={true} label="CPF" variant="outlined" maxLength="14" />}
        </InputMask>
        <TextField required={true} id="outlined-basic" label="Nome" variant="outlined" maxLength="14" />
        <InputMask
          mask="(99) 99999-9999"
          maskChar="_"
        >
          {() => <TextField id="outlined-basic" label="Telefone" variant="outlined" maxLength="16" />}
        </InputMask>
        <TextField
          required={true}
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Repita a senha"
          required={true}
          type="password"
          autoComplete="current-password"
        />
        <p>Já possui uma conta?<Link to="/entrar"> Entre aqui.</Link></p>
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
`;

export default Cadastrar;
