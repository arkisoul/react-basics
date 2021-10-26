export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENTBYVALUE = "INCREMENTBYVALUE";

// Action creators are functions that returns an action object
export const incrementCounter = () => ({ type: INCREMENT });
export const decrementCounter = () => ({ type: DECREMENT });
export const incrementCounterByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: { value },
});
