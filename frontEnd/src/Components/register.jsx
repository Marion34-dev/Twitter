import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, username, password } = newUser;

    if (name && email && username && password) {
      try {
        const res = await axios.post(
          `http://${import.meta.env.VITE_PEEPSURL}/register`,
          newUser
        );

        setNewUser({
          name: '',
          email: '',
          username: '',
          password: '',
        });

        if (res.data.message === 'Registration successful') {
          setSuccessMessage('Successfully registered! You can now log in');
          setRedirectToLogin(true);
        } else {
          setErrorMessage(res.data.message);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage('An error occurred during registration');
      }
    }
  };
    
  // Redirect to login when redirectToLogin is true
    useEffect(() => {
    if (redirectToLogin) {
      navigate('/login');
    }
  }, [redirectToLogin, navigate]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  if (successMessage) {
    return (
      <>
        <h2>{successMessage}</h2>
        {redirectToLogin && (
          <p>
            You will be redirected to login shortly. If not, click{' '}
            <Link to="/login">here</Link>.
          </p>
        )}
      </>
    );
  }

    return (
        <>
            <h1> Create your account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                </div>
                <button id="register-button" type="submit">Register</button>
            </form>
              {errorMessage && <p>Error: {errorMessage}</p>}

            <br></br>
            <p> Already have an account? <Link to="/login"> Login! </Link></p>
        </>
    );
}

export default RegistrationForm;
