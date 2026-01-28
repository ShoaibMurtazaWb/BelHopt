import { MinusIcon, PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import type { Product } from "../../lib/types";


export default function ProductCard({
  product
}: { product: Product }) {

  const integerPrice = Math.floor(product.price);
  const decimalPrice = (product.price % 1).toFixed(2).substring(2);

  const navigate = useNavigate();

  const { items, addItem, increase, decrease } = useCart()
  const cartItem = items.find(p => p.id === product.id)
  const quantity = cartItem?.quantity ?? 0;
  const isAdded = quantity > 0;

  return (
    <div className="flex flex-col grow p-5 shrink-0 max-w-60 gap-4 justify-center items-center cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      {/* Product Image and Add Button */}
      <div className="flex w-full py-5 items-center relative ">
        <img src={product.thumbnail} alt={product.title} />
        {!isAdded ? (
          /* ADD BUTTON */
          <button
            className="absolute ml-5 right-0 bottom-0 bg-white p-4 text-3xl font-bold rounded-full cursor-pointer shadow-md shadow-gray-400 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-400 active:scale-90 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              addItem({ ...product });
            }}
          >
            <PlusIcon />
          </button>
        ) : (
          /* QUANTITY CONTROLLER */
          <div className="absolute right-0 bottom-0 flex items-center gap-4 bg-red-100 cursor-default rounded-full shadow-md " onClick={(e) => {
            e.stopPropagation();
          }}>
            <button
              className="bg-red-500 text-white w-10 h-10 rounded-full flex cursor-pointer items-center justify-center"
              onClick={(e) => { e.stopPropagation(); decrease(product.id) }}
            >
              <MinusIcon />
            </button>


            <span className="font-semibold text-lg w-4 text-center">
              {quantity}
            </span>


            <button
              className="bg-red-500 text-white w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); increase(product.id) }}

            >
              <PlusIcon />
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full flex flex-col ">
        {/* Price Div*/}

        {/* Currency */}
        <div>
          <p className="text-2xl font-semibold! text-black!">
            <sup className="text-md font-normal mr-1  ">$</sup>
            {integerPrice}
            <sup className="text-md font-normal ml-1">{decimalPrice}</sup>
          </p>
        </div>

        <div>
          {/* Name */}
          <p className="text-xl text-dark-gray! font-crimson! mb-1">{product.title}</p>

          {/* Unit Price */}
          <p className="font-crimson! text-lg font-light ">
            {product.weight} lbs
          </p>
          <p className="font-crimson! text-lg font-light ">
            ($ {product.price / product.weight}/lb)
          </p>
        </div>

        {/* Stock Status */}
        <div className="flex gap-3 mt-3">
          {/* Stock Icon */}
          {product.availabilityStatus === "In Stock" && (
            <img className="w-5 h-5" src="/High Stock.svg" alt="In Stock" />
          )}
          {product.availabilityStatus === "Low Stock" && (
            <img className="w-5 h-5" src="/Low Stock.svg" alt="Low Stock" />
          )}
          {product.availabilityStatus === "Out of Stock" && (
            <img
              className="w-5 h-5"
              src="/Out Of Stock.svg"
              alt="Out of Stock"
            />
          )}

          {/* Stock Status Text */}
          <span className="mt-1 text-sm ">{product.availabilityStatus}</span>
        </div>
      </div>
    </div>
  );
}
