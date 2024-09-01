// const { createStore } = require("redux");
import { createStore } from "redux";

const initialState = { counter: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

export default store;
