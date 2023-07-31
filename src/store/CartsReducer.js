import { createSlice } from "@reduxjs/toolkit";

const cartsReducer = createSlice({
  name: "products",
  initialState: {
    carts: [],
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let found = state.carts.find((prod) => prod.id == action.payload.id);
      if (!found) {
        return {
          ...state,
          cartTotal: state.cartTotal + action.payload.price,
          carts: [
            ...state.carts,
            {
              id: action.payload.id,
              qty: action.payload.qty,
              price: action.payload.price,
            },
          ],
        };
      } else {
        found.qty += 1;
        state.cartTotal += found.price;
      }
    },
    removeFromCart: (state, action) => {
      let found = state.carts.find((prod) => prod.id == action.payload);
      if (found) {
        found.qty -= 1;
        state.cartTotal -= found.price;
        if (found.qty === 0) {
          state.carts = state.carts.filter(
            (cart) => cart.id !== action.payload
          );
        }
      }
    },
    setCartEmpty: (state) => {
      return {
        ...state,
        carts: [],
        cartTotal: 0,
      };
    },
  },
});

export const { addToCart, removeFromCart, setCartEmpty } = cartsReducer.actions;

export default cartsReducer.reducer;
