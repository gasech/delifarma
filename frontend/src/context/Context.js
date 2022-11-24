import { useReducer, createContext, useState } from "react";

export const CartContext = createContext();
export const LoggedContext = createContext();

const Context = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 0,
      imagemUrl: "https://saude.abril.com.br/wp-content/uploads/2017/11/remc3a9dio01-1.jpg?quality=85&strip=info&resize=850,567",
      titulo: "Remédio X 220mg",
      categoria: "Categoria Y",
      quantidade: 5,
      valorUnitario: 8.99,
      valorTotal() { return this.quantidade * this.valorUnitario },
    }
  ]);

  return (
    <LoggedContext.Provider value={{ loggedIn, setLoggedIn }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartContext.Provider>
    </LoggedContext.Provider>
  )
}

export default Context;
