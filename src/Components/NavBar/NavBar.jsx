import { Link } from 'react-router-dom';

function NavBar() {

    function logout() {
        localStorage.removeItem('token');
        window.location = '/'
    }

    return( 
    <nav>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/register'>
                <li>Register</li>
            </Link>
            <Link to='/Login'>
                <li>Login</li>
            </Link>
            < button onClick={logout}>Log Out</button>
        </ul>
    </nav>
    );
};

export default NavBar;