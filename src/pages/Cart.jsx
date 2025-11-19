import React from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import empty from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQunatity, removeFromCart, deltedItemHandler } =
    useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce((total, item) => {
    const qty = item.quantity ?? 1;
    const priceNum = Number(item.price) || 0;
    return total + priceNum * qty;
  }, 0);

  const finalPrice = Math.trunc(totalPrice);

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto mb-10">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-800 mb-4">
            My Cart ({cartItem.length})
          </h1>

          {/* Items list */}
          <div className="space-y-4">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="bg-[#601c1c71] p-3 sm:p-4 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                {/* Left: image + title */}
                <div className="flex items-start md:items-center gap-3 md:gap-4 w-full md:w-2/3">
                  <div
                    className="flex-shrink-0 rounded-md bg-black/40 flex items-center justify-center p-2"
                    onClick={() => navigate(`/products/${item.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === "Enter" ? navigate(`/products/${item.id}`) : null)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm sm:text-base md:text-md font-semibold text-red-700 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-red-200 mt-1">${item.price}</p>
                    {/* On very small screens show small meta */}
                    <div className="mt-1 text-xs text-red-200 hidden sm:block">
                      Qty: {item.quantity ?? 1}
                    </div>
                  </div>
                </div>

                {/* Right: controls */}
                <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
                  <div className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md text-base gap-3">
                    <button
                      onClick={() => updateQunatity(item.id, "decrease")}
                      className="px-2 py-1 sm:px-3 sm:py-1 text-sm sm:text-base"
                      aria-label={`Decrease quantity for ${item.title}`}
                    >
                      -
                    </button>

                    <span className="min-w-[26px] text-center font-semibold">
                      {item.quantity ?? 1}
                    </span>

                    <button
                      onClick={() => updateQunatity(item.id, "increase")}
                      className="px-2 py-1 sm:px-3 sm:py-1 text-sm sm:text-base"
                      aria-label={`Increase quantity for ${item.title}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 rounded-full hover:bg-red-300 transition"
                    title="Remove item"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    <FaRegTrashAlt className="text-red-500 text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery + Bill details */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Delivery Info */}
            <div className="bg-[#512d2d] rounded-md p-4 sm:p-6 space-y-3">
              <h2 className="text-red-600 font-bold text-lg">Delivery Info</h2>

              <div className="flex flex-col gap-2">
                <label className="text-red-200 text-sm">Full Name</label>
                <input
                  value={user?.fullName ?? ""}
                  type="text"
                  placeholder="Enter Your Name"
                  className="p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                  readOnly
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-red-200 text-sm">Address</label>
                <input
                  type="text"
                  value={location?.county ?? ""}
                  placeholder="Enter Your Address"
                  className="p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-red-200 text-sm">State</label>
                  <input
                    type="text"
                    value={location?.state ?? ""}
                    placeholder="Enter Your State"
                    className="p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-red-200 text-sm">PostCode</label>
                  <input
                    value={location?.postcode ?? ""}
                    type="text"
                    placeholder="Enter Your PostCode"
                    className="p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-red-200 text-sm">Country</label>
                  <input
                    value={location?.country ?? ""}
                    type="text"
                    placeholder="Enter Your Country"
                    className="p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-red-200 text-sm">Phone No</label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <button className="rounded-md text-[#ffffffca] hover:scale-105 transition-all px-4 py-2 bg-red-500">
                  Submit
                </button>

                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-3 py-2 rounded-md"
                >
                  Detect Location
                </button>
              </div>
            </div>

            {/* Bill Details */}
            <aside className="bg-[#512d2d] shadow-xl rounded-md p-4 sm:p-6 space-y-4">
              <h2 className="text-red-600 font-bold text-lg">Bill Details</h2>

              <div className="flex justify-between items-center">
                <div className="text-red-200 flex gap-2 items-center">
                  <LuNotebookText />
                  <span>Items Total</span>
                </div>
                <div className="text-red-200">${finalPrice}</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-red-200 flex gap-2 items-center">
                  <MdDeliveryDining />
                  <span>Delivery Charge</span>
                </div>
                <div className="text-red-200">
                  <span className="text-red-500 line-through">$25</span> FREE
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-red-200 flex gap-2 items-center">
                  <GiShoppingBag />
                  <span>Handling Charge</span>
                </div>
                <div className="text-red-200 font-semibold">$5</div>
              </div>

              <hr className="border-t border-red-500" />

              <div className="flex justify-between items-center">
                <div className="text-red-600 font-bold text-lg">Grand Total</div>
                <div className="text-red-200 font-semibold">${finalPrice + 5}</div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-red-500 font-semibold text-sm">Apply Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="w-full p-2 text-red-200 rounded-md bg-transparent border border-red-800 focus:outline-none"
                  />
                  <button className="text-white border rounded border-red-500 px-4 py-2 hover:scale-105 transition bg-red-500">
                    Apply
                  </button>
                </div>

                <button className="px-3 py-2 rounded text-white bg-red-500">
                  Proceed to Checkout
                </button>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 justify-center min-h-[60vh]">
          <h1 className="text-red-500/80 font-bold text-3xl sm:text-4xl md:text-5xl">
            Cart Is Empty
          </h1>
          <img src={empty} alt="empty cart" className="w-40 sm:w-56 md:w-72" />
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
