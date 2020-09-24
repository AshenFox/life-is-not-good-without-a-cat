import { GET_FOOD_ITEMS, TOGGLE_ITEM } from "./types";

// add/remove item from bucket

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  payload: {
    id,
  },
});

// get food items from db

export const getFoodItems = () => async (dispatch) => {
  try {
    const res = await fetch(`/api/food`);
    const data = await res.json();

    console.log(data);

    dispatch({
      type: GET_FOOD_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.err(err);
  }
};

// Suplemental functions

//------------------------------------------
//------------------------------------------
//------------------------------------------
