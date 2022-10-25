import { useReducer, createContext } from "React";

export const CartContext = createContext();

const reducer = (state, action, id) => {

};

const Context = ({ children }) => {
  const [cartItems, cartDispatch] = useReducer(reducer, {});

  return (
    <CartContext.Provider value={{ cartItems, cartDispatch }}></CartContext.Provider>
  )
}

export default Context;
