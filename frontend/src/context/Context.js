import { useReducer, createContext, useState } from "react";

export const CartContext = createContext();
export const LoggedContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState([]);

  return (
    <LoggedContext.Provider value={{ loggedIn, setLoggedIn }}>
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          {children}
        </CartContext.Provider>
      </UserContext.Provider>
    </LoggedContext.Provider>
  )
}

export default Context;
