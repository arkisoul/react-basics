import { useSelector } from "react-redux";

import MainLayout from "../../layout/main/Main";
import {
  withSubscription,
  withSomeAddedFunctionality,
} from "../../hoc/hocIllustration";

function Home(props) {
  const count = useSelector((state) => state.counter.count);

  return (
    <MainLayout
      main={
        <div>
          <h1>
            {props.title} with {props.propFromHoc}
          </h1>
          <h2>Current counter value {count}</h2>
          <button onClick={props.doSomething}>Do Something</button>
        </div>
      }
    ></MainLayout>
  );
}

const HomeComponent = withSomeAddedFunctionality(
  withSubscription(Home, "https://jsonplaceholder.typicode.com/posts")
);
export default HomeComponent;
