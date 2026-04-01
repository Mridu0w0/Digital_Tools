import React, { use, useState } from "react";
import AvailableProducts from "./AvailableProducts";
import Cart from "./Cart";

const Products = ({ productPromise, setCartValue, cartValue }) => {
  const products = use(productPromise);
  const [select, setSelect] = useState("products");
  const [selectedCart, setSelectedCart] = useState([]);

  return (
    <div className="max-w-[1360px] mx-auto px-4 md:px-6">
      <div className="text-center">
        {/* Adjusted text size for mobile */}
        <h1 className="text-3xl md:text-5xl font-bold pb-4 md:pb-6">
          Premium Digital Tools
        </h1>
        {/* Hid the <br/> on mobile so text flows naturally */}
        <p className="text-gray-500 pb-5 text-sm md:text-base">
          Choose from our curated collection of premium digital products
          designed <br className="hidden md:block" />
          to boost your productivity and creativity.
        </p>
        
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setSelect("products")}
            className={`px-5 py-2 font-semibold transition-colors duration-300 ${
              select === "products"
                ? "text-white bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]"
                : "text-purple-950 border-none bg-none"
            } cursor-pointer rounded-4xl`}
          >
            Products
          </button>
          <button
            onClick={() => setSelect("cart")}
            className={`px-5 py-2 rounded-4xl transition-colors duration-300 ${
              select === "cart"
                ? "text-white bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]"
                : "text-purple-950 border-none bg-none"
            } font-semibold cursor-pointer`}
          >
            Cart {cartValue > 0 ? `(${cartValue})` : ""}
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        {select === "products" ? (
          <AvailableProducts
            products={products}
            cartValue={cartValue}
            setCartValue={setCartValue}
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
          />
        ) : (
          <Cart
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
            setCartValue={setCartValue}
          />
        )}
      </div>
    </div>
  );
};

export default Products;