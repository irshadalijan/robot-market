import { createContext, useReducer } from "react";
import ProductsReducer from "./reducers/Products";
import { contextProps } from "../utils/appInterfaces";

export const GlobalContext = createContext({} as contextProps);
const productsInitialState = {
  isLoaded: false,
  list: [],
  allResults: [],
  cartItems: [],
  currPage: 1,
  perPage: 15,
  totalResults: 0,
  cartTotal: 0,
};
export const GlobalProvider = ({ children }: any) => {
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
