import { GET_FOOD_ITEMS, TOGGLE_ITEM } from "../actions/types";
import initialState from "./mainInitState";

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TOGGLE_ITEM:
      const { id } = payload;
      const oldBucket = state.bucket;
      return {
        ...state,
        bucket: {
          ...oldBucket,
          [id]: !oldBucket[id],
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
