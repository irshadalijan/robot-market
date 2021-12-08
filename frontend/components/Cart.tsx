import { useContext, useEffect } from "react";
import Image from "next/image";
import { productsProps } from "../utils/appInterfaces";
import { formatPrice } from "../utils/helpers";
import {
  ProductsListAction,
  setCurrPageAction,
} from "../context/actions/Products";
import { GlobalContext } from "../context/Provider";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const { productsDispatch, productsState } = useContext(GlobalContext);
  useEffect(() => {
    console.log("cart comp", productsState);
  }, [productsState.cartItems.length]);

  return (
    <div className="sticky top-0 p-4 w-full">
      <div className="w-full bg-yellow-300 text-center p-2 text-2xl font-bold">
        Cart
      </div>
      <div className="container mx-auto mt-1">
        {productsState.cartItems.length > 0 ? (
          <div className="flex shadow-md my-1">
            <div className="w-full bg-white px-3">
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/4">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/4 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/4 text-center">
                  Price
                </h3>
              </div>
              {productsState.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center -mx-8 px-4 py-5"
                >
                  <div className="flex w-2/4">
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.name}</span>
                      <span className="text-red-500 text-xs">
                        {item.material}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/4">
                    <FaMinus className="text-gray-600 w-3 h-3" />

                    <span className="mx-2 border text-center w-8">
                      {item.quantity}
                    </span>
                    <FaPlus className="text-gray-600 w-3 h-3" />
                  </div>
                  <span className="text-center w-1/4 font-semibold text-sm">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-2">Cart is Empty </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
