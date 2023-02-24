import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  quantity?: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, description, category, image, quantity } = action.payload;
      const existingItem:any = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, title, price, description, category, image, quantity });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;