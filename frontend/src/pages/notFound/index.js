import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

const NotFound = () => {
  return (
    <MainWrapper>
      <Icon icon="bxs:sad" width={50} height={50} />
      <h1> Erro 404 - Desculpe, não encontramos a página em que está procurando</h1>
      <a href="/"><Button variant="contained">Voltar para a página inicial</Button></a>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  text-align: center;
  max-width: 500px;
  margin: 150px auto;
  color: grey;

  a {
    text-decoration: none;
  }

  button {
    margin-top: 20px;
    background-color: var(--secundaryColor);
  }

  button:hover {
    background-color: #26B7B7; 
  }

`;


export default NotFound;
