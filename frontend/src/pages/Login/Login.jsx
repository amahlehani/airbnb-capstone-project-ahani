import { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
        
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            localStorage.setItem("token", data.token);  // Save only token
        
            // Redirect based on role
            const decodedToken = jwtDecode(data.token);
            navigate(decodedToken.role === "admin" ? "/create-listing" : "/");
          }
        } catch (error) {
            console.error("Login error:", error);
        }
      };

  return (
    <>
        <div className="login-nav">
            <div className='home-logo-container'>
                <div className='home-logo'>
                    <Link to='/' className='logo-link'>
                        <img 
                            src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png'
                            alt='airbnb-logo'
                        />
                    </Link>
                </div>
            </div>
        </div>
        <div className='login-container'>
            <h1>Login</h1>
            <form className='login-form' onSubmit={handleLogin}>
                <label>Username</label>
                <input 
                    type='text' 
                    className='username-input'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label>Password</label>
                <input 
                    type='password' 
                    className='password-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <p>Forgot password ?</p>
                <div className='login-form-btn'>
                    <button type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login