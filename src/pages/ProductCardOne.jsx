import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductOne = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-[#601c1c71] rounded-md">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-60 h-60 object-contain rounded-md"
        />

        <div className="text-red-200 space-y-3">
          <h1 className="text-2xl font-bold text-red-500">{product.title}</h1>
          <p className="text-sm text-red-300">{product.description}</p>
          <h2 className="text-xl font-semibold">${product.price}</h2>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="bg-red-500 px-3 py-1 rounded text-white"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 text-center text-red-800 font-semibold rounded bg-red-100"
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-red-500 px-3 py-1 rounded text-white"
            >
              +
            </button>
          </div>

          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="mt-4 bg-red-600 px-5 py-2 rounded-md text-white font-semibold hover:scale-105 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOne;
