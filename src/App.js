import React from 'react';
import './App.css';
import Container from './components/container/Container'
import Person from './components/person/Person'
// import Button from './components/button/Button'

class App extends React.Component {
  constructor(props) {
    // console.log('In constructor')
    super(props)
    this.nameInputRef = React.createRef()
    this.personRef = React.createRef()
    this.state = {
      time: new Date().toISOString(),
      counter: 0,
      showContainer: true,
      name: '',
      email: '',
      password: '',
      person: {
        age: 10,
        name: 'John',
        address: {
          street: 'MG Road',
          city: 'Indore'
        }
      }
    }
  }

  componentDidMount() {
    console.log('In componentDidMount', this.nameInputRef.current, this.personRef.current)
    // this.personRef.current.focus()
    // this.nameInputRef.current.setState({
    //   fruits: ['Orange', 'Papaya', 'Kiwi']
    // })
  }

  componentWillUnmount() {
    // console.log('In componentWillUnmount')
  }

  static getDerivedStateFromProps(props) {
    // console.log('In getDervied state props')
    return null
  }

  getSnapshotBeforeUpdate() {
    // console.log('In getSnapshotBeforeUpdate')
    return null
  }

  shouldComponentUpdate() {
    // console.log('In shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    // console.log('In componentDidUpdate')
  }

  handleUpdatePerson = (a) => {
    console.log(a)
    const person = { ...this.state.person }
    const address = { ...person.address }
    person['name'] = 'Jane'
    person['age'] = 20
    address['street'] = 'Bank Street'
    address['city'] = 'Mumbai'
    person['address'] = address
    this.setState({
      person: {
        name: 'Jane',
        age: 33,
        address: {
          street: 'Bank Street',
          city: 'Mumbai'
        }
      }
    })
  }

  handleUpdateTime = (a) => {
    console.log(a)
    console.log('handleUpdateTime')
    this.setState({ time: new Date().toISOString() })
  }

  handleIncrementCounter = (a) => {
    console.log(a)
    this.setState({ counter: this.state.counter + 1 })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.email, this.state.password)
  }

  render() {
    // console.log('In render')
    return (
      <div className="container">
        {/* <Container ref={this.nameInputRef} /> */}
        <Person ref={this.personRef} />
        {/* <form action="" className="form" onSubmit={this.handleSubmit}>
          <div className="input" ref={this.nameInputRef}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div><button type="submit">Submit</button></div>
        </form> */}
      </div>
    )
  }
}

export default App