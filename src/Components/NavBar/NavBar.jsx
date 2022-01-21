import { Link } from 'react-router-dom';

function NavBar() {

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
        </ul>
    </nav>
    );
};

export default NavBar;