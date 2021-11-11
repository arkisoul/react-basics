import { describe, it, expect } from "@jest/globals";

import * as counterActions from "./counterActions";

describe("counterActions", () => {
  it("should return increment action object", () => {
    expect(counterActions.incrementCounter()).toEqual({
      type: counterActions.INCREMENT,
    });
    expect(counterActions.incrementCounter()).toMatchSnapshot();
  });

  it("should return decrement action object", () => {
    expect(counterActions.decrementCounter()).toEqual({
      type: counterActions.DECREMENT,
    });
    expect(counterActions.decrementCounter()).toMatchSnapshot();
  });

  it("should return increment action object with payload", () => {
    const value = 5;
    expect(counterActions.incrementCounterByValue(value)).toEqual({
      type: counterActions.INCREMENTBYVALUE,
      payload: { value },
    });
    expect(counterActions.incrementCounterByValue(value)).toMatchSnapshot();
  });
});
