import React, { useState } from "react";

const Person = React.forwardRef((props, ref) => {
  console.log("Person component", ref);
  const [userForm, setUserForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState(''); // an array with two elements. First element is the value/default value of the state, and the second element is the function to mutate that state
  const [gender, setGender] = React.useState('male')
  const [experience, setExperience] = React.useState(null)
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passRef = React.useRef();

  React.useEffect(() => {
    //   console.log(personRef.current)
    //   personRef.current.focus()
  })

  const handleSubmit = (e) => {
      console.log('Form submitted')
      console.log('name', nameRef.current.value, name)
      console.log('email', emailRef.current.value, email)
      console.log('pass', passRef.current.value, pass)
      e.preventDefault();
  }

  const handleChange = (e) => {
      const fieldName = e.target.name
      setUserForm({
        [fieldName]: e.target.value,
      });
  }

  const handleNameChange = (e) => {
      console.log(e.target.name)
      setName(e.target.value)
  }
  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }
  const handlePassChange = (e) => {
      setPass(e.target.value)
  }
  const handleGenderChange = (e) => {
      console.log(e.target.value, gender)
      setGender(e.target.value)
      console.log(gender)
  }
  const [message, setMessage] = useState('A default value for the text area')

  return (
    <React.Fragment>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            value={userForm.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholde={"Enter a message"}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            value={userForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passRef}
            value={userForm.pass}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="gender">Gender</label>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value={"male"}
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value={"female"}
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>
        <div>
          <label htmlFor="">Experience (in yrs)</label>
          <select
            name=""
            id=""
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Select experience</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
})

/**
 * Hooks extends the capability of a functional component by providing state management and life cycle methods.
 */

export default Person;
