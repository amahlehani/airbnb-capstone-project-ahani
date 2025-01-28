import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
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
            <form className='login-form'>
                <label>Username</label>
                <input type='text' className='username-input'/>
                <label>Password</label>
                <input type='password' className='password-input'/>
                <p>Forgot password ?</p>
                <div className='login-form-btn'>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login