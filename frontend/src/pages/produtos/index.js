import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/Context';
import { Button } from '@mui/material';

const Produtos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search"));
  const [category, setCategory] = useState(searchParams.get("category"));
  const [products, setProducts] = useState([]);

  const { cartItems, setCartItems } = useContext(CartContext);

  const adicionarAoCarrinho = (produto) => {
    if (cartItems.filter(p => p.id == produto.id).length > 0) {
      let prod = cartItems.find(p => p.id == produto.id);
      prod.quantidade++;

      setCartItems([...cartItems.filter(p => p.id !== produto.id), prod]);
    } else {
      produto.quantidade = 1;

      setCartItems([...cartItems, produto]);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch('http://localhost:8080/produtos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': "*",
          'Access-Control-Allow-Origin': "*"
        }
      });

      let finalData = await data.json();

      if (search == null && category == null) {
        setProducts(finalData);
      } else if (category == null) {
        let searchParsed = search.replaceAll('-', ' ');

        setProducts(
          finalData.filter((prod) => {
            return prod.titulo.toLowerCase().includes(searchParsed);
          })
        );
      } else {
        let categoryParsed = category.replaceAll('-', ' ');

        setProducts(
          finalData.filter((prod) => {
            return prod.categoria.toLowerCase().includes(categoryParsed);
          })
        );
      }
    }

    fetchData();
  }, [search, category])

  useEffect(() => {
    setSearch(searchParams.get('search'));
    setCategory(searchParams.get('category'));
  }, [searchParams]);

  return (
    <ProductsWrapper>
      <Sidebar>
        {
          search != null ? 
            <p>Você pesquisou "{search.replaceAll('-', ' ')}"</p>
          :
            <p></p>
        }
        {
          category != null ?
            <p>Você está buscando pela categoria "{category.replaceAll('-',' ')}" </p>
          :
            <p></p>
        }
      </Sidebar>
      <ListingWrapper>
        {
          products.length == 0 ? <p>Não encontramos nenhum produto :/</p>
          : 
          <p></p>
        }
        {
          products.map((produto) => {
            return (
              <div key={produto.id} className="produto">
                <div className="produtoImg" style={{ backgroundImage: `url("${produto.imagemUrl}")` }}>
                </div>
                <span>{produto.titulo}</span>
                <p>R${produto.precoUnitario.toFixed(2).toString().replace('.', ',')}</p>
                <Button
                  disableElevation
                  onClick={() => {
                    adicionarAoCarrinho(produto)
                  }}
                  variant="contained"
                  size="small"
                  fullWidth={true}
                >Adicionar ao carrinho</Button>
              </div>
            )
          })
        }
      </ListingWrapper>
    </ProductsWrapper>
  )
}

const ProductsWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 410px;
  height: 220px;
  border-radius: 5px;
  background-color: var(--primaryLayer);
`;

const ListingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  border-radius: 5px;
  width: 100%;
  
  .produto {
    width: 180px;
    height: 370px; 
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: box-shadow 0.5s;
  }

  .produto a {
    margin-top: 10px;
    text-decoration: none;
    color: #1f1f1f;
  }

  .produto:hover {
    box-shadow: 1px 1px 15px 3px lightgrey;
  }

  .produtoImg {
    width: 100%; 
    height: 160px;
    background-size: cover;
  }

  .produto span {
    margin-top: 15px;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 80px;
  }

  .produto p {
    margin-top: auto;
    font-size: 22px;
  }
  
  button {
    margin-top: 10px;
  }

`;

export default Produtos;
