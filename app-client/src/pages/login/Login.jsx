import React, { useContext, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {

  const navigate = useNavigate();
  const { Login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    username:'',
    password: ''
  })
  const [error, setError] = useState(null);

  const handChange = (e) =>{
    setInputs(prev=>({ ...prev, [e.target.name]: e.target.value }))
  }
  
  const handSubmit = async(e) =>{
    e.preventDefault();
    try{
       await Login(inputs);

      navigate('/')
      
    }catch(error){
      setError(error.response.data)
      
    } 
  }

  return (
    <>
        <div className="login">
            <h1 className="login-h1">LOGIN</h1>
            <div className="container-login">
                <input type="text"  placeholder='username' name='username' className="login-input" onChange={handChange} />
                <input type="text" placeholder='password' name='password' className="login-input"  onChange={handChange} />
                <button className="login-btn" onClick={handSubmit}>Login</button>
                <div className="login-row-txt">
                    {error && <p className="login-text-error">{error}</p>}
                    <span className="login-text">Don't you have an account ? <Link className='login-link' to='/register'>Register</Link></span>
                </div>
            </div>
        </div>
    </>
  )
}
export default Login