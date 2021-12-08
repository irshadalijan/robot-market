import {
  START_LOADING,
  CHANGE_PAGE,
  GET_ROBOTS,
  ADD_TO_CART,
} from "../../utils/appConstants";
import useCallApi from "../../utils/useCallApi";

export const ProductsListAction = (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  useCallApi("robots", GET_ROBOTS, dispatch);
};

export const setCurrPageAction = (page: number, dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: page,
  });
};

export const addToCartAction = (key: number, product: {}, dispatch) => {
  let arr = [] as any;
  arr["key"] = key;
  arr["product"] = product;

  dispatch({
    type: ADD_TO_CART,
    payload: arr,
  });
};
