import styled from "@emotion/styled";
import { TextField, IconButton, Button } from "@mui/material";
import { Icon } from "@iconify/react"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Carrinho = () => {
  const itensCarrinho = [
    {
      imagemUrl: "https://saude.abril.com.br/wp-content/uploads/2017/11/remc3a9dio01-1.jpg?quality=85&strip=info&resize=850,567",
      titulo: "Remédio X 220mg",
      categoria: "Categoria Y",
      quantidade: 5,
      valorUnitario: 8.99,
      valorTotal() { return this.quantidade * this.valorUnitario },
    }
  ];

  return (
    <CartWrapper>
      <CartProdutos>
        <h2>Itens no carrinho</h2>
        {
          itensCarrinho.map((item) => {
            return (
              <CartProduto>
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
                  <IconButton aria-label="Diminuir Quantidade" size="large" >
                    <RemoveIcon />
                  </IconButton>
                  <TextField value={item.quantidade} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} style={{ width: "50px" }} />
                  <IconButton aria-label="Aumentar Quantidade" size="large">
                    <AddIcon />
                  </IconButton>
                </div>
                <div className="prod-total-price">
                  <p>R${item.valorTotal().toString().replace('.', ',')}</p>
                </div>
                <div>
                  <IconButton aria-label="Aumentar Quantidade" size="large">
                    <DeleteIcon />
                  </IconButton>
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
            <p>R$ 33,00</p>
          </div>
          <div className="finish-cart-spbe">
            <p>Total ({itensCarrinho.length} Ite{itensCarrinho.length === 1 ? "m" : "ns"})</p>
            <p>R$ 33,00</p>
          </div>
          <Button variant="contained" className="go-back-button" startIcon={<KeyboardBackspaceIcon />}>
            Continuar Comprando
          </Button>
          <Button variant="contained" color="success" endIcon={<ArrowRightAltIcon />}>
            Finalizar Compra
          </Button>
        </div>
      </FinishCartWrapper>
    </CartWrapper >
  )
}

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  gap: 20px;
`;

const CartProdutos = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 20px;
  border-radius: 20px;
  background-color: var(--primaryLayer);
  padding: 20px; 
`;

const CartProduto = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
 
  img {
    width: 130px;
    height: 100px;
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

  .prod-unit-price p {
    color: var(--secundaryText)
  }

  .prod-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .prod-total-price p {
    font-weight: 600
  }
`;

const FinishCartWrapper = styled.div`
  width: 300px;
  height: 400px;
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
