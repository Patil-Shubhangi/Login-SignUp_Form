import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="container">
            <header>
             <h2>Login</h2>
            </header>
        <marquee behavior="alternate" direction="right">
            <h1>AgriTradeHub</h1>
        </marquee>
            <form action="">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <div className="recover">
                    <a href="#">Forgot password</a>
                </div>
            </form>
            <button>Login</button>
            <div className="member">
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    </>
  )
}

export default Login