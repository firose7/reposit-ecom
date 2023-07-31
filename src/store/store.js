import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsReducer";
import CartsReducer from "./CartsReducer";
import UserReducer from "./UserReducer";

export default configureStore({
  reducer: {
    Products: ProductsReducer,
    Carts: CartsReducer,
    User: UserReducer,
  },
});
