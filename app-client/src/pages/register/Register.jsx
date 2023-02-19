import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './register.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username : "",
    email: "",
    password:""
  })
  const [error, setError] = useState(null)

  const handChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const handSubmit = async (e) =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8080/api/auth/register", inputs)
      navigate('/login')
      
    }catch(error){
      setError(error.response.data)
      
    } 

  }
  return (
    <>
        <div className="register">
            <h1 className="register-h1">REGISTER</h1>
            <div className="container-register">
                <input type="text"  placeholder='username' name='username' className="register-input" onChange={handChange} />
                <input type="text" placeholder='email' name='email' className="register-input" onChange={handChange}/>
                <input type="text" placeholder='password' name='password' className="register-input" onChange={handChange}/>
                <button className="register-btn" onClick={handSubmit}>Register</button>
                <div className="login-row-txt">
                    {error && <p className="login-text-error">This is an error!</p>}
                    <span className="login-text">Don't you have an account ? <Link className='login-link' to='/login'>Login</Link></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register