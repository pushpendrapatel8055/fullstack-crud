import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    } else
      navigate('/login')
  }, [])


  const [loginStatus, setLoginStatus] = useState("")
  const [Login, setLogin] = useState({
    email: '',
    password: ''
  })
  const { email, password } = Login

  console.log(Login)

  const setlogin = async (e) => {
    e.preventDefault();
    var result

    try {
      await axios.post("http://localhost:4000/login", Login).then((Response) => {
        console.log(Response.data);
        result = Response.data;

        if (result.name) {
          toast.success('successfully loged in', {
            position: toast.POSITION.TOP_CENTER
          })
          localStorage.setItem("user", JSON.stringify(result.name))
          setTimeout(() => {
            navigate("/")
          }, 500)
        }
        else {
          toast.error(result, {
            position: toast.POSITION.TOP_CENTER
          })
        }
      })

    } catch (error) {
      console.log("error")

    }





  }

  const getInput = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value })

  }
  return (
    <div style={{ width: '40%', background: '' }} className='container mt-5 mx-auto '>

    <h1 className='text-center my-4'>Login</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" >Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={(e) => { getInput(e) }} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={password} onChange={(e) => { getInput(e) }} />
        </div>
        <Link to='/forget' className='btn text-primary'>Forget Password ?</Link>
        <br />
        <br />
        <div class="d-grid gap-2 ">
          <button class="btn btn-primary" type="button" onClick={(e) => { setlogin(e) }}>Login</button>
          {/* <button class="btn btn-primary" type="button">Button</button> */}
        </div>

        <br />
        <p className='text-center'> Not a Member ? <Link to='/Resister'>Resister </Link> </p>





      </form>
    </div>
  )
}

export default Login
