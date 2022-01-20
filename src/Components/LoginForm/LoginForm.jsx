import  { React, useState } from 'react';

const LoginForm = (props) => {
    return ( 
        <div>
            <form>
                <div><label> Username <input type="text" name="name" /></label></div>
                <div><label> Password <input type="password" name="password" /></label></div> 
                <button type="submit"> Login </button>  
            </form>
        </div>
     );
}
 
export default LoginForm;