import {
  GET_ROBOTS,
  ADD_TO_CART,
  START_LOADING,
  CHANGE_PAGE,
  END_LOADING,
} from "../../utils/appConstants";

const ProductsReducer = (
  state,
  action: {
    type: string;
    payload: string | number | any[] | any["key"] | any["product"];
  }
) => {
  const { currPage, perPage } = state;
  const stockCount = (stockval: number) => {
    return stockval === 0 ? 0 : stockval - 1;
  };
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoaded: false };
    case END_LOADING:
      return { ...state, isLoaded: true };
    case GET_ROBOTS:
      return {
        ...state,
        list: action.payload.slice(
          (currPage - 1) * perPage,
          currPage * perPage
        ),
        allResults: action.payload,
        totalResults: action.payload.length,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currPage: action.payload,
        list: state.allResults.slice(
          (parseInt(action.payload as string) - 1) * perPage,
          parseInt(action.payload as string) * perPage
        ),
      };
    case ADD_TO_CART:
      let prodKey = action.payload["key"];
      let prodObj = action.payload["product"];
      let prevCartItems = state.cartItems;
      let updateCartItems = [...prevCartItems];
      const haveInCart = prevCartItems.find((p) => p.id === prodKey);
      const listItem = state.list.find((p, i) => i === prodKey);
      if (haveInCart) {
        updateCartItems = updateCartItems.map((p) =>
          p.id === prodKey
            ? {
                ...haveInCart,
                quantity: haveInCart.quantity + 1,
                stock: stockCount(haveInCart.stock),
              }
            : p
        );
      } else {
        updateCartItems = [
          ...updateCartItems,
          {
            ...prodObj,
            quantity: 1,
            id: prodKey,
            stock: stockCount(prodObj.stock),
          },
        ];
      }

      return {
        ...state,
        cartItems: updateCartItems,
        list: state.list.map((p, i) =>
          i === prodKey
            ? {
                ...listItem,
                stock: stockCount(
                  haveInCart ? haveInCart.stock : prodObj.stock
                ),
              }
            : p
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
