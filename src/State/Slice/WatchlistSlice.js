import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  movieItems: [],
  amount: 0,
};

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // add: (state, action) => {
    //   state.amount++;
    //   const movieItem = state.movieItems.find(
    //     (movieItem) => movieItem.id === action.payload.id
    //   );
    //   movieItem
    //     ? (movieItem.amount = movieItem.amount + 1)
    //     : state.movieItems.push({ ...action.payload, amount: 1 });
    //   toast.success("added to watchlist", { position: "bottom-left" });
    // },
    // // add: (state, action) => {
    // //   const movieItem = state.movieItems.findIndex(
    // //     (movieItem) => movieItem.id === action.payload.id
    // //   );

    // //   if (movieItem >= 1) {
    // //     state.movieItems[movieItem].amount = 1;
    // //   } else {
    // //     const tempMovie = { ...action.payload, amount: 1 };
    // //     state.movieItems.push(tempMovie);
    // //     toast.success("added to watchlist", { position: "bottom-left" });
    // //   }
    // },
    add: (state, action) => {
      state.amount++;
      state.movieItems.find(
        (currentMovieDetails) => currentMovieDetails.id === action.payload.id
      );
      // movieItem
      //   ? (movieItem.amount = movieItem.amount + 1)
      //   : state.movieItems.push({ ...action.payload, amount: 1 });

      state.movieItems.push({ ...action.payload, amount: 1 });
      // state.amount += movieItem.amount;
      toast.success("added to watchlist", { position: "top-right" });
    },
    remove: (state, action) => {
      state.movieItems.map((currentMovieDetails) => {
        if (currentMovieDetails.id === action.payload.id) {
          state.movieItems = state.movieItems.filter(
            (item) => item.id !== currentMovieDetails.id
          );
          state.amount -= currentMovieDetails.amount;
          toast.info("removed from watchlist", { position: "top-right" });
        }
      });
    },
    clear: (state) => {
      state.movieItems = [];
      state.amount = 0;
      toast.info("cleared all watchlist", { position: "top-right" });
    },
  },
});

export const { add, remove, clear } = WatchlistSlice.actions;
export default WatchlistSlice.reducer;
