import React, { useRef } from 'react';
import MainLayout from "../../layout/main/Main";

class About extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('Handled submit action', this.ref.current)
  }

  render() {
    return <MainLayout main={
      <>
        <h1>About Component</h1>
        <Login onSubmit={this.handleSubmit} ref={this.ref} />
      </>
    }></MainLayout>;
  }
}

export default About;

const Login = React.forwardRef((props, ref) => {
  const usernameRef = useRef()
  
  return (
    <form action="" ref={ref}>
      <input type="text" name="username" id="" ref={usernameRef} />
      <input type="text" name="password" id="" />
      <button type="submit" onClick={props.onSubmit}>
        Login
      </button>
    </form>
  );
})
