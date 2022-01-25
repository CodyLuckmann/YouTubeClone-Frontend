import { useState } from "react";
import axios from 'axios';


const RegistrationForm = (props) => {

// States for registraion
const [username, setUserName] = useState('');
const [first_name, setFirstName] = useState('');
const [last_name, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// let object = {...username,...first_name,...last_name,...email,...password}
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
const handleSubmit = async (e) => {
  debugger
    e.preventDefault();
    // if (user_name === '' || first_name === '' || last_name === '' || email === '' || password === '') {
    //     setError(true);
    // } else {
    //     let response = await axios.post('http://127.0.0.1:8000/api/auth/register/');
    //     console.log(response)
    //     setSubmitted(true);
    //     setError(false);
    // }
    let newUser = 
        {
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name,

        }
    let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser);
    console.log(response);
    window.location = '/Login'
    // props.create(object)
}

 // Showing success message
 const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {username} successfully registered!!</h1>
      </div>
    );
  };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
          <div
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };
     
      return (
        <div>
          <div>
            <h1>User Registration</h1>
          </div>
     
          {/* Calling to the methods */}
          <div> 
            {errorMessage()}
            {successMessage()}
          </div>
     
          <form>
            {/* Labels and inputs for form data */}
            <label>User Name</label>
            <input onChange={handleUserName} 
              value={username} type="text" />

            <label>First Name</label>
            <input onChange={handleFirstName} 
                value={first_name} type='text'/>

            <label>Last Name</label>
            <input onChange={handleLastName} 
                value={last_name} type='text'/>
     
            <label>Email</label>
            <input onChange={handleEmail} 
              value={email} type="email" />
     
            <label>Password</label>
            <input onChange={handlePassword} 
              value={password} type="password" />
     
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
} 

export default RegistrationForm;