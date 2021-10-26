import MainLayout from "../../layout/main/Main";
import {withSubscription} from "../../hoc/hocIllustration";

function About(props) {
  console.log(props)
  return <MainLayout main={<h1>About Component {props.propFromHoc}</h1>}></MainLayout>;
}

export default withSubscription(
  About,
  "https://jsonplaceholder.typicode.com/posts?userId=1"
);
