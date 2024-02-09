import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();
const initialState = { cartItems: [] };
const CartContextProvider = ({ children }) => {
  //The useReducer Hook returns the current state and a dispatch method.

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({
      type: "ADD",
      payload,
    });
  };
  const removeProduct = (payload) => {
    dispatch({
      type: "REMOVE",
      payload,
    });
    return state.cartItems;
  };
  const increaseQuantity = (payload) => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload,
    });
    return state.cartItems;
  };
  const decreaseQuantity = (payload) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload,
    });
    return state.cartItems;
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR",
      payload: undefined,
    });
    return state.cartItems;
  };
  const getItems = () => {
    return state.cartItems;
  };
  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getItems,
    ...state,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
