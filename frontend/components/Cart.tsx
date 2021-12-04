import Image from "next/image";
import { productsProps } from "../utils/appInterfaces";
import { formatPrice } from "../utils/helpers";

const Cart = () => {
  return (
    <div className="sticky top-0 p-4 w-full">
      <div className="w-full bg-yellow-300 text-center p-2 text-2xl font-bold">
        Cart
      </div>
      <div className="">Robots added to cart goes here </div>
    </div>
  );
};

export default Cart;
