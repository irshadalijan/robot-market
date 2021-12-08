import { useEffect, useContext } from "react";
import ProductItem from "./ProductItem";
import { productsProps } from "../utils/appInterfaces";
import Cart from "./Cart";
import Paginate from "./Paginate";
import {
  ProductsListAction,
  FilterByMaterialAction,
  setCurrPageAction,
} from "../context/actions/Products";
import { GlobalContext } from "../context/Provider";
import Loading from "../components/Loading";

const Products = () => {
  const { productsDispatch, productsState } = useContext(GlobalContext);

  useEffect(() => {
    ProductsListAction(productsDispatch);
  }, [productsDispatch]);

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
            <div className="px-8">
              <div className="ml-auto px-3">
                <div className="flex grow mb-5">
                  <h3 className="text-right font-bold uppercase w-3/4 px-2">
                    Filter Robots by Material
                  </h3>
                  <select
                    className="w-1/4 px-2"
                    onChange={(e) =>
                      FilterByMaterialAction(e.target.value, productsDispatch)
                    }
                  >
                    <option value="">Select</option>
                    <option value="Concrete">Concrete</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Fresh">Fresh</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Steel">Steel</option>
                    <option value="Wooden">Wooden</option>
                  </select>
                </div>
                <h3 className="font-bold"></h3>
              </div>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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
