import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, CircularProgress, Fade } from '@mui/material';
import InputMask from 'react-input-mask'
import { LoggedContext, UserContext } from "../../context/Context";
import { registerUser } from "../../lib/api";
import { useContext, useState } from "react";

const Cadastrar = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [emailField, setEmailField] = useState("");
  const [cpfField, setCpfField] = useState("");
  const [nomeField, setNomeField] = useState("");
  const [telefoneField, setTelefoneField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [repeatPasswordField, setRepeatPasswordField] = useState("");

  const [errorMessage, setErrorMessage] = useState("");



  const onHandleForm = async () => {
    setLoading(true);

    if (passwordField == repeatPasswordField) {
      let registeredUser = await registerUser(
        emailField,
        cpfField,
        nomeField,
        telefoneField,
        passwordField,
      );

      if (!registeredUser) {
        setTimeout(() => {
          setLoading(false);
          setErrorMessage("Usuário já cadastrado ou dados inválidos!")
        }, 2000);
      } else {
        setTimeout(() => {
          setUser(registeredUser);
          setLoggedIn(true);
          navigate("/");
        }, 2000);
      }
    } else {
      setTimeout(() => {
        setLoading(false);
        setErrorMessage("Os campos de senha estão diferentes!")
      }, 2000);
    }

  }

  return (
    <RegisterBox>
      <h2>Bem vindo(a)</h2>
      <p>Por favor forneça os seus dados para criar sua conta</p>
      <RegisterForm>
        <TextField onChange={e => setEmailField(e.target.value)} required={true} label="E-mail" variant="outlined" maxLength="14" />
        <InputMask
          mask="999.999.999-99"
          maskChar="_"
          onChange={e => setCpfField(e.target.value)}
        >
          {() => <TextField required={true} label="CPF" variant="outlined" maxLength="14" />}
        </InputMask>
        <TextField required={true} onChange={e => setNomeField(e.target.value)} id="outlined-basic" label="Nome" variant="outlined" maxLength="14" />
        <InputMask
          mask="(99) 99999-9999"
          maskChar="_"
          onChange={e => setTelefoneField(e.target.value)}
        >
          {() => <TextField label="Telefone" variant="outlined" maxLength="16" />}
        </InputMask>
        <TextField
          required={true}
          onChange={e => setPasswordField(e.target.value)}
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          onChange={e => setRepeatPasswordField(e.target.value)}
          label="Repita a senha"
          required={true}
          type="password"
          autoComplete="current-password"
        />
        <p>Já possui uma conta?<Link to="/entrar"> Entre aqui.</Link></p>
        <p className="error">{errorMessage}</p>
        <Button variant="contained" onClick={onHandleForm}>Cadastrar</Button>
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

  .error {
    color: red;
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
