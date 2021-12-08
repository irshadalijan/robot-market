import { createContext, useReducer } from "react";
import ProductsReducer from "./reducers/Products";

export const GlobalContext = createContext({});
const productsInitialState = {
  isLoaded: false,
  list: [],
  allResults: [],
  cartItems: [],
  currPage: 1,
  perPage: 15,
  totalResults: 0,
};
export const GlobalProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    ProductsReducer,
    productsInitialState
  );

  return (
    <GlobalContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
