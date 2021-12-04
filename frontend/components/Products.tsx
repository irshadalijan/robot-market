import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { productsProps } from "../utils/appInterfaces";
import Cart from "./Cart";
import Paginate from "./Paginate";

const Products = (props) => {
  let productsArr = props.products as productsProps["products"];
  const perPage = 15;
  const [currPage, setCurrPage] = useState(1);
  const [products, setProducts] = useState([] as productsProps["products"]);
  const changeCurrPage = (p: number) => {
    setCurrPage(p);
  };
  useEffect(() => {
    let p = productsArr.slice((currPage - 1) * perPage, currPage * perPage);
    setProducts(p);
  }, [currPage]);

  return (
    <div className="flex flex-row flex-wrap py-4">
      <div className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {products.map(
            (product: productsProps["item"], key: string | number) => (
              <ProductItem key={key} item={product} />
            )
          )}
        </div>
      </div>
      <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
        <Cart />
      </aside>
      <Paginate
        perPage={perPage}
        changePage={(p) => changeCurrPage(p)}
        currPage={currPage}
        totalRows={productsArr.length}
      />
    </div>
  );
};

export default Products;
