import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const singleProductHandler = (idNo) => navigate(`/products/${idNo}`);
  const { addToCart } = useCart();

  return (
    <article className="group bg-black/20 border border-gray-800 rounded-2xl cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl transition-all p-3 flex flex-col h-full">
      {/* Image area */}
      <div
        className="w-full rounded-xl overflow-hidden flex items-center justify-center bg-black/50 aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3] lg:aspect-[3/2]"
        role="button"
        tabIndex={0}
        onClick={() => singleProductHandler(products.id)}
        onKeyDown={(e) => e.key === "Enter" && singleProductHandler(products.id)}
      >
        <img
          src={products.image}
          alt={products.title}
          className="max-h-full max-w-full object-contain block transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="mt-3 flex-1 flex flex-col">
        <h2
          className="line-clamp-2 text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-red-500"
          title={products.title}
        >
          {products.title}
        </h2>

        <p className="mt-2 text-base sm:text-lg text-red-500 font-bold">
          ${Number(products.price).toFixed(2)}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => addToCart({ ...products, quantity: 1 })}
            className="flex-1 bg-red-500 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-red-600 transition"
            aria-label={`Add ${products.title} to cart`}
          >
            <IoCartOutline className="w-5 h-5" /> Add to Cart
          </button>

          <button
            onClick={() => singleProductHandler(products.id)}
            className="hidden sm:inline-block px-3 py-2 text-sm rounded-md text-red-500 border border-red-500 bg-transparent hover:bg-red-500 hover:text-white transition"
            aria-label={`View ${products.title}`}
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
