import styled from "@emotion/styled";
import { TextField, IconButton, Button, Tooltip, CircularProgress, Fade } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useContext, useState } from "react";
import { UserContext, LoggedContext, CartContext } from "../../context/Context.js";
import { useNavigate } from "react-router-dom";
import { criarPedido } from "../../lib/api.js";

const Carrinho = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [ errorMessage, setErrorMessage] = useState("");
  const [ loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);

  const navigate = useNavigate();

  const removeItemId = (id) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== id;
      })
    )
  }

  const handleCart = async () => {
    setLoading(true);
    if (loggedIn) {
      let precoTotal = cartItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue.valorTotal(), 0
      ).toFixed(2);

      await criarPedido({
        cpf: user.cpf,
        data_pedido: "24-11-2022 10:31:10",
        preco_total: precoTotal,
        status: "Em análise",
      });

      setTimeout(() => {
        setLoading(false);
        setCartItems([]);
        setErrorMessage("Pedido criado com sucesso!");
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        setErrorMessage("Erro, você não está logado.");
      }, 2000);
    }
  }

  const changeAmountId = (id, type) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id !== id) return item;

        if (type === "INCREMENT") {
          item.quantidade += 1;
        } else {
          if (item.quantidade > 1) {
            item.quantidade -= 1;
          }
        }

        return item;
      })
    )
  }

  return (
    <CartWrapper>
      <CartProdutos>
        {
          cartItems.map((item) => {
            return (
              <CartProduto key={item.id}>
                <img
                  alt=""
                  src={item.imagemUrl}
                />
                <div className="prod-title-category">
                  <a href="#"><span>{item.titulo}</span></a>
                  <a href="#"><p>{item.categoria}</p></a>
                </div>
                <div className="prod-unit-price">
                  <p>R${item.valorUnitario.toString().replace('.', ',')}</p>
                </div>
                <div className="prod-quant">
                  <Tooltip title="Diminuir Quantidade">
                    <IconButton aria-label="Diminuir Quantidade" size="large" onClick={() => changeAmountId(item.id, "DECREMENT")} >
                      <RemoveIcon />
                    </IconButton>
                  </Tooltip>
                  <TextField value={item.quantidade} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} style={{ width: "50px" }} />
                  <Tooltip title="Aumentar quantidade">
                    <IconButton aria-label="Aumentar Quantidade" size="large" onClick={() => changeAmountId(item.id, "INCREMENT")} >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <div className="prod-total-price">
                  <p>R${item.valorTotal().toFixed(2).replace('.', ',')}</p>
                </div>
                <div>
                  <Tooltip title="Remover item do carrinho">
                    <IconButton aria-label="Remover do carrinho" size="large" onClick={() => removeItemId(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </CartProduto>
            )
          })
        }
      </CartProdutos>
      <FinishCartWrapper>
        <h2>Resumo do pedido</h2>
        <div className="finish-cart-buttons">
          <div className="finish-cart-spbe">
            <p>Subtotal</p>
            <p>R$ {
              cartItems.reduce(
                (previousValue, currentValue) => previousValue + currentValue.valorTotal(), 0
              ).toFixed(2).replace('.', ',')
            }</p>
          </div>
          <div className="finish-cart-spbe">
            <p>Total ({cartItems.length} Ite{cartItems.length === 1 ? "m" : "ns"})</p>
            <p>R$ {
              cartItems.reduce(
                (previousValue, currentValue) => previousValue + currentValue.valorTotal(), 0
              ).toFixed(2).replace('.', ',')
            }</p>
          </div>
          <Button disableElevation variant="contained" className="go-back-button" onClick={() => { navigate("/") }} startIcon={<KeyboardBackspaceIcon />}>
            Continuar Comprando
          </Button>
          <Button disableElevation variant="contained" color="success" onClick={() => { handleCart() }} endIcon={<ArrowRightAltIcon />}>
            Finalizar Compra
          </Button>
          <span>{errorMessage}</span>
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
        </div>
      </FinishCartWrapper>
    </CartWrapper >
  )
}

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 1200px;
  margin: 0 auto;
  padding: 40px;
  gap: 20px;
`;

const CartProdutos = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: fit-content;
  gap: 20px;
  border-radius: 20px;
  background-color: var(--primaryLayer);
  padding: 20px; 
`;

const CartProduto = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
 
  img {
    min-width: 130px;
    width: 130px;
    height: 100px;
  }

  .prod-title-category {
    min-width: 350px;
    width: 350px;
  }

  .prod-title-category a {
    color: var(--primaryText);
    text-decoration: none;
  }

  .prod-title-category a:hover {
    text-decoration: underline;
  }

  .prod-title-category span {
    font-size: 22px;
    color: var(--primaryText);
  }

  .prod-title-category p {
    color: var(--secundaryText);
  }

  .prod-unit-price {
    width: 60px;
  }

  .prod-unit-price p {
    color: var(--secundaryText)
  }

  .prod-quant {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .prod-total-price p {
    font-weight: 600;
    width: 100px;
  }
`;

const FinishCartWrapper = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 20px;
  background-color: var(--primaryLayer);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    height: 55px;
    width: 250px;
  }

  .finish-cart-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .finish-cart-buttons p {
    font-size: 20px;
  }

  .finish-cart-buttons p {
    font-weight: 500;
  }

  .finish-cart-spbe {
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .go-back-button {
    background-color: lightgrey;
  }

  .go-back-button:hover {
    background-color: #bebebe;
  }
`;

export default Carrinho;
