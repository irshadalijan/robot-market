import Image from "next/image";
import { productsProps } from "../utils/appInterfaces";
import { formatPrice, formatDate } from "../utils/helpers";

const ProductItem = (props) => {
  const {
    name,
    price,
    material,
    stock,
    image,
    createdAt,
  } = props.item as productsProps["item"];
  const stockObj = {
    text: `${stock > 0 ? "In stock" : "Out of stock"}`,
    cls: `${stock > 0 ? "bg-gray-500" : "bg-red-400"}`,
    cartBtn: stock > 0 ? false : true,
  };
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="h-64 relative">
        <Image
          loader={() => image}
          src={image}
          alt={name}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex flex-wrap items-baseline">
          <h1 className="w-full text-2xl flex-none font-bold mb-2">{name}</h1>
          <div className="text-xl leading-7 font-semibold text-blue-600">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-auto mb-2">
              {material}
            </span>
          </div>
          <div className="text-xl leading-7 font-semibold ml-auto text-blue-600">
            {formatPrice(price)}
          </div>
        </div>

        <div className="flex flex-wrap items-baseline">
          <div
            className={`text-sm font-medium mr-auto py-1 px-2 text-gray-400`}
          >
            Created at: {formatDate(createdAt)}
          </div>
          <div
            className={`text-sm font-medium ml-3 py-1 px-2 ml-auto text-white ${stockObj.cls}`}
          >
            {stockObj.text}
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          type="button"
          className="w-full text-center text-lg bg-yellow-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 disabled:opacity-50"
          disabled={stockObj.cartBtn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
