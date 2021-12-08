import { useEffect, useContext } from "react";
import ProductItem from "./ProductItem";
import { productsProps } from "../utils/appInterfaces";
import Cart from "./Cart";
import Paginate from "./Paginate";
import {
  ProductsListAction,
  setCurrPageAction,
} from "../context/actions/Products";
import { GlobalContext } from "../context/Provider";
import Loading from "../components/Loading";

const Products = () => {
  const { productsDispatch, productsState } = useContext(GlobalContext);

  useEffect(() => {
    ProductsListAction(productsDispatch);
  }, [productsDispatch]);
  console.log("prodstate", productsState);

  let productsArr = productsState.list as productsProps["products"];
  const changeCurrPage = (p: number) => {
    setCurrPageAction(p, productsDispatch);
  };

  return (
    <div className="flex flex-row flex-wrap py-4">
      {!productsState.isLoaded ? (
        <Loading />
      ) : (
        <>
          <div className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {productsArr.map(
                (product: productsProps["item"], key: string | number) => (
                  <ProductItem key={key} item={product} id={key} />
                )
              )}
            </div>
          </div>
          <aside className="w-full sm:w-1/3 md:w-1/4">
            <Cart />
          </aside>
          <Paginate
            perPage={productsState.perPage}
            changePage={(p) => changeCurrPage(p)}
            currPage={productsState.currPage}
            totalRows={productsState.totalResults}
          />
        </>
      )}
    </div>
  );
};

export default Products;
