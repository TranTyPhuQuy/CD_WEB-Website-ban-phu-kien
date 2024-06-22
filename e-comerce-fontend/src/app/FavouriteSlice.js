import { createSlice } from '@reduxjs/toolkit';
const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteItems: [],
  },
  reducers: {
    addToFavourite(state, action) {
      const productId = action.payload;
      const index = state.cartItems.findIndex((x) => x === productId);

      if (index >= 0) {
        return;
      } else {
        state.favouriteItems.push(productId);
      }
    },
    removeFavourite(state) {
      state.cartItems =[];
      console.log('state.favouriteItems',state.favouriteItems);
    },
    
    removeFromFavourite(state, action) {
      const {productId} = action.payload;
      state.favouriteItems = state.favouriteItems.filter((x) => x !== productId);
      console.log('state.favouriteItems',state.favouriteItems);
    },
  },
});

const { actions, reducer } = favouriteSlice;
export const { addToFavourite, removeFavourite,removeFromFavourite } = actions; // named export
export default reducer; // default export