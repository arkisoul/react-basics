import './register.css'
import React, { useState } from "react";


function Register(props) {
    const [registerForm, setregisterForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const formChange = (e) => {
        const fieldName = e.target.name
        setregisterForm({
          [fieldName]: e.target.value,
        });
    }

    return(
        <div className="main-container">
            <div className="registrationBox">
                <div>
                    <h2>Register Here...</h2>
                    <form>
                        <input type="text" name="name" placeholder="Enter Your Name" onChange={formChange}></input>
                        <input type="text" name="email" placeholder="Enter Your Email" onChange={formChange}></input>
                        <input type="password" name="password" placeholder="Password" onChange={formChange}></input>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={formChange}></input>
                        <button className="register-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Register