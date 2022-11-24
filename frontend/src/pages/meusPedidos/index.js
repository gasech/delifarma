import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Divider, Button, ButtonGroup, Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material"
import { LoggedContext } from "../../context/Context";
import { Icon } from '@iconify/react';

const MeusPedidos = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/entrar")
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
              startIcon={
                <Icon icon="carbon:user-avatar-filled" />
              }
              onClick={() => { navigate('/minha-conta') }}
            >
              Minha Conta
            </Button>
            <Button
              variant="contained"
              startIcon={
                <Icon icon="mdi:package-variant" />
              }
            >Meus Pedidos</Button>
          </ButtonGroup>
          <Button
            disableElevation
            size="large"
            className="logout-button"
            variant="contained"
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
          <h2>Meus Pedidos</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                  Preço Total
                </TableCell>
                <TableCell>
                  Data realizada
                </TableCell>
                <TableCell>
                  Situação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  R$19,99
                </TableCell>
                <TableCell>
                  19:16 - 20/10/2022
                </TableCell>
                <TableCell>
                  Aprovado
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
`;

export default MeusPedidos;



