import { Icon } from '@iconify/react'
import styled from '@emotion/styled';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { LoggedContext, CartContext } from "../../context/Context";

const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedContext);
  const { cartItems } = useContext(CartContext);

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="logo">
          <Icon icon="bi:bag-plus-fill" color="white" />
          <a href="/">Delifarma</a>
        </div>
        <form>
          <input type="text" placeholder="Digite aqui o que está procurando..." />
          <button type="submit">
            <Icon icon="ant-design:search-outlined" color="white" />
          </button>
        </form>
        <div className="right-buttons">
          <Link to="/carrinho"><Icon icon="el:shopping-cart-sign" color="white" />Carrinho ({cartItems.length})</Link>
          {
            loggedIn ?
              <>
                <Link to="/minha-conta/pedidos"><Icon icon="mdi:package-variant" color="white" />Meus Pedidos</Link>
                <Link to="/minha-conta"><Icon icon="carbon:user-avatar-filled" color="white" />Minha Conta</Link>
              </>
              :
              <>
                <Link to="/entrar"><Icon icon="material-symbols:login" color="white" />Entrar</Link>
              </>
          }
        </div>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
background-color: var(--secundaryLayer);
height: 65px;
width: 100%;
display: flex;
justify-content: center;

.container {
  height: 65px;
  width: 100%;
  max-width: 1360px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.logo {
  background-color: var(--secundaryColor);
  display: flex; 
  justify-items: center;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
}

.logo svg {
  width: 23px;
  height: 23px;
}

.logo a {
  color: var(--contrastText);
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
}

form {
  width: 100%;
  display: flex;
  gap: 0;
}

.container .right-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.container .right-buttons a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--contrastText);
  text-decoration: none;
  font-weight: 500;
  border-radius: 20px;
  white-space: nowrap;
  padding: 10px 15px;
}

.container .right-buttons a:hover {
  background-color: #373737;
}

.container .right-buttons a svg {
  width: 25px;
  height: 25px;
}

form input[type=text] {
  border: none;
  padding: 5px 15px;
  font-size: 17px;
  width: 100%;  
  max-width: 400px;
  height: 40px;
  border-radius: 20px 0px 0px 20px;
}

form button {
  background-color: var(--primaryColor);
  height: 40px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0px 20px 20px 0px;
}

form button svg {
  width: 24px;
  height: 24px;
}

form button:hover {
  background-color: var(--secundaryColor);
  cursor: pointer;
}
`;

export default Header;
