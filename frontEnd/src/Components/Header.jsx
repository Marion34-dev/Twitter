import { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ user: { loginUser, setLoginUser } }) => {
    const [logoutMessage, setLogoutMessage] = useState(null);

    const logOut = () => {
    setLoginUser(null);
    setLogoutMessage('You have been logged out successfully.');

    setTimeout(() => {
      setLogoutMessage(null);
    }, 5000);
  };

    return (
        <> 
            <nav>
<nav style={{ backgroundColor: '#333' }} className="navbar navbar-expand-lg navbar-dark fixed-top">
                     <div className="container-fluid"> 
                        <h2 style={{ color: 'white' }}> © Tweet  </h2>
                                {!loginUser && <Link className="navbar-brand" to="/"> Home </Link>}

                                {loginUser && <Link className="navbar-brand" to="/"> Home </Link>}

                                {!loginUser && <Link className="navbar-brand" to="/register"> Register </Link>}

                                {!loginUser && <Link className="navbar-brand" to="/login"> Log in </Link>}

                                {loginUser && <Link className="navbar-brand" to="/" onClick={logOut}> Log out </Link>}

                        {loginUser && <Link className="navbar-brand" to={`/add/${loginUser._id}`}> Post a Tweet </Link>} 
                    </div>
                </nav>
            </nav>
            {logoutMessage && <div className="logout-message">{logoutMessage}</div>}
        </>
    )
}

Header.propTypes = {
    user: PropTypes.exact({
        loginUser: PropTypes.object,
        setLoginUser: PropTypes.func
    })
}

export default Header;