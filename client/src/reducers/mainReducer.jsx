import { GET_FOOD_ITEMS, TOGGLE_ITEM, TOGGLE_HOVER } from "../actions/types";
import initialState from "./mainInitState";

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TOGGLE_ITEM:
      return {
        ...state,
        bucket: {
          ...state.bucket,
          [payload.id]: !state.bucket[payload.id],
        },
      };

    case TOGGLE_HOVER:
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            ...state.items[payload.id],
            isHover: !state.items[payload.id].isHover,
          },
        },
      };

    case GET_FOOD_ITEMS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
};

// let recipeMap = [{ cucumber: 500 }, { tomatoes: 350 }, { onion: 50 }];
