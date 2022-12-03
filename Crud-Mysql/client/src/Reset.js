import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  let navigate =  useNavigate();
  let { id } = useParams();
  const [data, setdata] = useState({
    password: '',
    cpassword: ''
  })
  const { password, cpassword } = data
  let result


  const input = (e) => {

    setdata({ ...data, [e.target.name]: e.target.value })
   
  }
  const submit = (e) => {
    console.log(data)
    e.preventDefault();
  if(!password || !cpassword){
    toast.warning('both field are reaquired', {
      position: toast.POSITION.TOP_CENTER
    })
  }

    if (password === cpassword) {
        try {
          axios.put(` http://localhost:4000/Reset/${id}`, { password }).then((response) => {
            result = response.data

            console.log(result)
if(result.protocol41===true){
  toast.success('password has been updated now you can login', {
    position: toast.POSITION.TOP_CENTER
  })
 setTimeout(()=>{
  navigate('/login')

 } ,500)
}

          });
        } catch (error) {
          console.log(error)
        }


      }
      else {
        toast.warning('password and confirm password should be same', {
          position: toast.POSITION.TOP_CENTER
        })
      }

    }



    return (
      <div style={{ width: '40%', background: '' }} className='container mt-5 mx-auto '>
        <form>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input name='password' value={password} onChange={(e) => { input(e) }} type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input name='cpassword' value={cpassword} onChange={(e) => { input(e) }} type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <button onClick={(e) => { submit(e) }} type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

  export default Reset