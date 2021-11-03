import { useState } from "react";
import axios from 'axios';

export default function User(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/login", {email: "akash@mailinator.com", password: "12345678"}, {});
    localStorage.setItem('token', res.data.accessToken)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
      <input type="text" name="fname" value={lname} onChange={(e) => setLname(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
