//reducers are pure functions that specify how the applications state changes in response to actions sent tot the store.

export const CartReducer = (state, action) => {
  debugger;
  //store the cartItems in local storage so whenever the user refresh the page,the cartItems persists in the cart
  //we do not wish to use session storage because the cart items will only be available until the browser is closed
  const Storage = (cartItems) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };
  let index = -1;
  if (action.payload) {
    index = state.cartItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
  }
  let newItems = [...state.cartItems];
  switch (action.type) {
    case "ADD":
      // Only add the item if it's not already in the cart
      if (index === -1) {
        // state.cartItems.push({ ...action.payload, quantity: 1 });
        newItems.push({ ...action.payload, quantity: 1 });
      }
      break;
    case "INCREMENT_QUANTITY":
      // Only increment the quantity if the item is in the cart
      if (index !== -1) {
        newItems[index].quantity++;
        // state.cartItems[index].quantity++;
      }
      break;
    case "REMOVE":
      if (index > -1) {
        // from the rules of state management,you should not mutate the existing array and that s why we dont use splice here
        // state.cartItems.splice(index, 1);//BAD WAY AS THIS WILL MUTATE ARRAY
        newItems = state.cartItems.filter((x) => x.id !== action.payload.id);
      }
      break;
    case "DECREMENT_QUANTITY":
      if (index > -1) {
        if (newItems[index].quantity > 1) {
          newItems[index].quantity--;
        }
        // state.cartItems[index].quantity--;
      }
      break;

    case "CLEAR":
      newItems = [];
      break;
    default:
  }
  state.cartItems = newItems;
  Storage(newItems);
  return state;
};
