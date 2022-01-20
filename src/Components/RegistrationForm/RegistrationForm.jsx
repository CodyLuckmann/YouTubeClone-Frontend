import { useState } from "react";
import axios from 'axios';


const RegistrationForm = (props) => {

// States for registraion
const [user_name, setUserName] = useState('');
const [first_name, setFirstName] = useState('');
const [last_name, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for handling errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handle First Name change
const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
};

//Handle Last Name change
const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
};

// Handle Username change
const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
};

//Handle email change
const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
};

// Handle password change
const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (user_name === '' || first_name === '' || last_name === '' || email === '' || password === '') {
        setError(true);
    } else {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/');
        console.log(response)
        setSubmitted(true);
        setError(false);
    }
}

 // Showing success message
 const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {user_name} successfully registered!!</h1>
      </div>
    );
  };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };
     
      return (
        <div className="form">
          <div>
            <h1>User Registration</h1>
          </div>
     
          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
     
          <form>
            {/* Labels and inputs for form data */}
            <label className="label">User Name</label>
            <input onChange={handleUserName} className="input"
              value={user_name} type="text" />

            <label className="label">First Name</label>
            <input onChange={handleFirstName} className="input"
                value={first_name} type='text'/>

            <label className="label">Last Name</label>
            <input onChange={handleLastName} className="input"
                value={last_name} type='text'/>
     
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input"
              value={email} type="email" />
     
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
              value={password} type="password" />
     
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
} 

export default RegistrationForm;