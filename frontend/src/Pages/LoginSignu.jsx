
import React, { useState } from 'react'
import './CSS/login.css'

const LoginSignu = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  const login = async () => {
    console.log('login function', formData)
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
     if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }

  }
  const signup = async () => {
    console.log('signup function', formData)
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
     if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
  }


  return (
    <div className='login'>


      <div className="login_exp">
        <h1>Sign Up</h1>
        <div className="inputs">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}

          <input required name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input required type="password" name="password" value={formData.password} onChange={changeHandler} placeholder='password' />

        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }} className='btn-login' >Continue</button>
        <div className="login-expl">
          {state === "Sign Up" ? <p>Already have an account?<span onClick={() => setState("Login")} >Login here</span></p> : <p>Create an Account?<span onClick={() => setState("Sign Up")} >Click here</span></p>}




        </div>
        <div className="login-policy">
          <input required type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>

  )
}

export default LoginSignu
