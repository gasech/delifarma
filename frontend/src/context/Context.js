import { useReducer, createContext, useState } from "react";

export const CartContext = createContext();
export const LoggedContext = createContext();
export const UserContext = createContext();
export const EmployeeContext = createContext();

const Context = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [loggedInEmployee, setLoggedInEmployee ] = useState(false);
  const [employee, setEmployee] = useState({});

  return (
    <LoggedContext.Provider value={{ loggedIn, setLoggedIn }}>
      <EmployeeContext.Provider value={{ employee, setEmployee, loggedInEmployee, setLoggedInEmployee }}>
        <UserContext.Provider value={{ user, setUser }}>
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
          </CartContext.Provider>
        </UserContext.Provider>
      </EmployeeContext.Provider>
    </LoggedContext.Provider>
  )
}

export default Context;
