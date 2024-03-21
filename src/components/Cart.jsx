import { useContext, useEffect, useState } from "react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const {
    getItems,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(CartContext);

  useEffect(() => {
    const items = getItems();
    setCartItems(items);
  }, [getItems]);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Layout>
      <article className="bg-gray-100 p-5 flex flex-col justify-between w-full ">
        <aside className=" flex justify-between">
          <h3 className="category-product-info-finance-price ">
            Shopping Cart
          </h3>
          <button className="bg-gray-300 rounded-lg border border-gray-300 p-3">
            <Link to={`/checkout`}>Checkout</Link>
          </button>
        </aside>
        <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <aside
                key={cartItem.id}
                className="bg-violet-200 p-5  rounded-md  mr-5 mt-5  "
              >
                <div className="text-bold underline">{cartItem.title}</div>
                <div>price: {cartItem.price}</div>
                quantity:
                <div className="cursor-pointer flex justify-between bg-white w-[20%] shadow-lg rounded-sm text-center p-2">
                  <div
                    className="p-1 bg-gray-400 rounded-full"
                    onClick={(e) =>
                      setCartItems(decreaseQuantity({ id: cartItem.id }))
                    }
                  >
                    -
                  </div>
                  <div>{cartItem.quantity}</div>
                  <div
                    className="p-1 bg-gray-400 rounded-full"
                    onClick={(e) =>
                      setCartItems(increaseQuantity({ id: cartItem.id }))
                    }
                  >
                    +
                  </div>
                </div>
                <div
                  className="text-blue-500 font-light text-xs underline cursor-pointer pt-3"
                  onClick={() => {
                    setCartItems(removeProduct({ id: cartItem.id }));
                  }}
                >
                  remove
                </div>
              </aside>
            ))
          ) : (
            <div className="text-gray-500">Your cart is empty</div>
          )}
        </aside>
        <aside className="mt-5 flex justify-between">
          <button
            className="bg-gray-300 rounded-lg px-1 border border-gray-300 "
            onClick={() => setCartItems(clearCart())}
          >
            Clear All
          </button>
          <h3 className="text-bold">Total:{total}</h3>
        </aside>
        <aside className="pt-3 "></aside>
      </article>
    </Layout>
  );
};
