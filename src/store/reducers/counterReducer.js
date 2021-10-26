import {
  INCREMENT,
  INCREMENTBYVALUE,
  DECREMENT,
} from "../actions/counterActions";

const counterInitialState = {
  count: 0,
};

export const counterReducer = (state = counterInitialState, {type, payload}) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case INCREMENTBYVALUE:
      return { ...state, count: state.count + payload.value };

    default:
      return state;
  }
};