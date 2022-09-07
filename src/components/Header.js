import { login, logout } from '../firebase';
import { Link } from 'react-router-dom';

function Header({ user }) {
    return (
        <nav className='nav'>
            <Link to="/">
                <div>Grapplers Guide</div>
            </Link>

        <div className="auth-links">
            {
                user 
                ?   <>
                    <div className="auth-linksInner">Welcome, {user.displayName} </div>
                    <div className="auth-linksInner" onClick={logout}>Log Out</div>
                    </>
                :   <div className="auth-linksInner" onClick={login}>Log In</div>
            }
        </div>
            
        </nav>
    );
}

export default Header;