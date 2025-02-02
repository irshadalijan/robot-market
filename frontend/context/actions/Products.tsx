import {
  START_LOADING,
  CHANGE_PAGE,
  GET_ROBOTS,
  CART_UPDATE,
  FILTER_MATERIAL,
} from "../../utils/appConstants";
import useCallApi from "../../utils/useCallApi";
import { iTypes } from "../../utils/appInterfaces";

export const ProductsListAction = (dispatch: iTypes["dispatch"]) => {
  dispatch({
    type: START_LOADING,
  });

  useCallApi("robots", GET_ROBOTS, dispatch);
};

export const setCurrPageAction = (
  page: number,
  dispatch: iTypes["dispatch"]
) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: page,
  });
};

export const addToCartAction = (
  key: number,
  product: {},
  dispatch: iTypes["dispatch"]
) => {
  let arr = [] as any;
  arr["key"] = key;
  arr["product"] = product;
  arr["action"] = "add";

  dispatch({
    type: CART_UPDATE,
    payload: arr,
  });
};

export const removeFromCartAction = (
  key: number,
  product: {},
  dispatch: iTypes["dispatch"]
) => {
  let arr = [] as any;
  arr["key"] = key;
  arr["product"] = product;
  arr["action"] = "remove";

  dispatch({
    type: CART_UPDATE,
    payload: arr,
  });
};

export const FilterByMaterialAction = (
  val: string,
  dispatch: iTypes["dispatch"]
) => {
  dispatch({
    type: FILTER_MATERIAL,
    payload: val,
  });
};
