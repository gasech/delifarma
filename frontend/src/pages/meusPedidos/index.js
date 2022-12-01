import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material"
import { LoggedContext } from "../../context/Context";
import { getPedidos } from "../../lib/api";
import { UserContext } from "../../context/Context";

const MeusPedidos = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);
  const { user, setUser } = useContext(UserContext);
  const [pedidos, setPedidos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/entrar")
    }

    const fetchData = async () => {
      let pedidosData = await getPedidos(user.cpf);

      setPedidos(pedidosData)
    }

    fetchData()
      .catch(console.error)
  }, [])

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <MainWrapper>
      <div className="account-box">
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
              {
                pedidos.map((pedido) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {pedido.id}
                      </TableCell>
                      <TableCell>
                        R${pedido.preco_total.toString().replace('.', ',')}
                      </TableCell>
                      <TableCell>
                        {pedido.data_pedido}
                      </TableCell>
                      <TableCell>
                        {pedido.status}
                      </TableCell>
                    </TableRow>
                  )
                })
              }
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



