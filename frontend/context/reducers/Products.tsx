import {
  GET_ROBOTS,
  CART_UPDATE,
  START_LOADING,
  CHANGE_PAGE,
  END_LOADING,
  FILTER_MATERIAL,
} from "../../utils/appConstants";

const ProductsReducer = (
  state,
  action: {
    type: string;
    payload:
      | string
      | number
      | any[]
      | any["key"]
      | any["product"]
      | any["action"];
  }
) => {
  const { currPage, perPage } = state;
  const stockCount = (stockval: number, act: string) => {
    let s = stockval;
    if (act == "add") {
      s = stockval === 0 ? 0 : stockval - 1;
    } else if (act == "remove") {
      s = stockval + 1;
    }
    return s;
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
    case CART_UPDATE:
      let prodKey = action.payload["key"];
      let prodObj = action.payload["product"];
      let prevCartItems = state.cartItems || [];
      const haveInCart = prevCartItems.find((p) => p.id === prodKey);
      const listItem = state.list.find((p, i) => i === prodKey);
      let updateCartItems = [...prevCartItems];

      if (haveInCart) {
        let qty =
          action.payload["action"] === "add"
            ? haveInCart.quantity + 1
            : haveInCart.quantity - 1;
        updateCartItems = updateCartItems.map((p) =>
          p.id === prodKey
            ? {
                ...haveInCart,
                quantity: qty,
                stock: stockCount(haveInCart.stock, action.payload["action"]),
                price: qty * parseFloat(listItem.price),
              }
            : p
        );
        if (action.payload["action"] == "remove" && qty === 0) {
          updateCartItems = prevCartItems.filter((p) => p.id !== prodKey);
        }
      } else {
        if (action.payload["action"] == "add") {
          updateCartItems = [
            ...updateCartItems,
            {
              ...prodObj,
              quantity: 1,
              id: prodKey,
              stock: stockCount(prodObj.stock, action.payload["action"]),
              price: parseFloat(listItem.price),
            },
          ];
        }
      }

      return {
        ...state,
        cartItems: updateCartItems,
        list: state.list.map((p, i) =>
          i === prodKey
            ? {
                ...listItem,
                stock: stockCount(
                  haveInCart ? haveInCart.stock : prodObj.stock,
                  action.payload["action"]
                ),
              }
            : p
        ),
        cartTotal: updateCartItems.reduce(
          (acc: number, item: { price: number }) => acc + item.price,
          0
        ),
      };
    case FILTER_MATERIAL:
      let material = action.payload;
      let filteredList =
        material != ""
          ? state.allResults.filter((p) => p.material == material)
          : state.list;
      return {
        ...state,
        list: filteredList.slice((currPage - 1) * perPage, currPage * perPage),
        totalResults: filteredList.length,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
