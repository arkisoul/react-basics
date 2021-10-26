import { useSelector, useDispatch } from 'react-redux';

import MainLayout from "../../layout/main/Main"
import {incrementCounter, incrementCounterByValue, decrementCounter} from "../../store/actions/counterActions"

export default function Counter(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    const incrementCount = () => dispatch(incrementCounter());
    const decrementCount = () => dispatch(decrementCounter());
    const incrementCountByValue = (value) => dispatch(incrementCounterByValue(value));

    return (
      <MainLayout
      count={counter.count}
        main={
          <div className="counter" style={{display: "grid", placeContent: 'center'}}>
            <h1 style={{textAlign: 'center', marginBottom: 20}}>{counter.count}</h1>
            <div>
            <button
              className="btn"
              style={{ marginRight: 10 }}
              onClick={incrementCount}
            >
              Increment
            </button>
            <button
              className="btn"
              style={{ marginRight: 10 }}
               onClick={decrementCount}
            >
              Decrement
            </button>
            <button className="btn" 
                onClick={() => incrementCountByValue(5)}
                >
              Increment by 5
            </button>
            </div>
          </div>
        }
      />
    );
}