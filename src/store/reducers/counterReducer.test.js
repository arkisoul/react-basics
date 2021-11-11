import { describe, it, expect } from "@jest/globals";

import { counterInitialState, counterReducer } from "./counterReducer";
import * as counterActions from "../actions/counterActions";

describe("Counter Reducer", () => {
  it("should return initial state on store creation", () => {
    expect(counterReducer(undefined, {})).toEqual(counterInitialState);
    expect(counterReducer(undefined, {})).toMatchSnapshot();
  });

  it("should increment the count value by 1 on INCREMENT action", () => {
    expect(
      counterReducer(undefined, { type: counterActions.INCREMENT })
    ).toEqual({
      count: 1,
    });
    expect(
      counterReducer({ count: 1 }, counterActions.incrementCounter())
    ).toEqual({
      count: 2,
    });
  });

  it("should decrement the count value by 1 on DECREMENT action", () => {
    expect(
      counterReducer(undefined, { type: counterActions.DECREMENT })
    ).toEqual({
      count: -1,
    });
    expect(
      counterReducer({ count: 4 }, counterActions.decrementCounter())
    ).toEqual({
      count: 3,
    });
  });

  it("should increment the count value by 10 on INCREMENTBYVALUE action", () => {
    const value = 10;
    expect(
      counterReducer(undefined, {
        type: counterActions.INCREMENTBYVALUE,
        payload: { value },
      })
    ).toEqual({
      count: 10,
    });
    expect(
      counterReducer(
        { count: 10 },
        counterActions.incrementCounterByValue(value)
      )
    ).toEqual({ count: 20 });
  });
});
