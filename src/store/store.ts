// import { configureStore } from "@reduxjs/toolkit";
// import { countSlice } from "@/features/countSlice/countSlice";
// import { cartSlice } from "@/features/cart/cartSlice";

// // set up the store
// export const makeStore = () =>
//   configureStore({
//     reducer: {
//       count: countSlice.reducer,
//       cart : cartSlice.reducer,
//     },
//   });

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import { countSlice } from "@/features/countSlice/countSlice";
import { ecommerceApi } from "@/services/ecommerce";

export const makeStore = () => {
  return configureStore({
    reducer: {
      count: countSlice.reducer,
      cart: cartReducer,
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ecommerceApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
