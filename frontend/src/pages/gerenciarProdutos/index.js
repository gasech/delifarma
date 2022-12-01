import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react"; import { useNavigate, Link } from "react-router-dom";
import { getProdutos } from '../../lib/api.js'
import { Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material"

const GerenciarProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let produtosData = await getProdutos();

      setProdutos(produtosData);
    }

    fetchData()
      .catch(console.error)
  }, [])

  return (
    <MainWrapper>
      <h2>Criar Produto</h2>
      <form onSubmit={
        (e) => {
          e.preventDefault();
        }
      }>

      </form>
      <h2>Listagem de Produtos</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell>
              Categoria
            </TableCell>
            <TableCell style={{ width: "400px" }}>
              Titulo
            </TableCell>
            <TableCell>
              Preço Unitário
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            produtos.map((produto) => {
              return (
                <TableRow>
                  <TableCell>
                    {produto.id}
                  </TableCell>
                  <TableCell>
                    {produto.categoria}
                  </TableCell>
                  <TableCell>
                    {produto.titulo}
                  </TableCell>
                  <TableCell>
                    R${produto.precoUnitario.toFixed(2).toString().replace('.', ',')}
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
`;

export default GerenciarProdutos;



