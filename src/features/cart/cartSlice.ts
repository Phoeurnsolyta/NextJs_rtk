import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  Name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += product.price;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= 1;
      state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
