import axios from 'axios'
import React, { useState } from 'react'
// import jwt from 'jsonwebtoken'
import { toast } from 'react-toastify';
const ForgetP = () => {
  const [email, setemail] = useState()

  console.log(email)
  var result


  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(" http://localhost:4000/forget", { email }).then((res) => {
        result = res.data
        console.log(result)
        // if (result.name) {
        //   const jwt_Secrete = ' some super secrete...'

        //   const secret = jwt_Secrete + result.password
        //   const payload = {
        //     email: result.email,
        //     password: result.password
        //   }
        //   const token = jwt.sign(payload, secret, { expiresIn: '15m' })
        //   const link = ` http://localhost:3000/Reset/${result.Id}/${token}`;
        //   console.log(link);
        //   toast.success('Password reset link has been sent to ur email', {
        //     position: toast.POSITION.TOP_CENTER
        //   })


        // }

        if(result.name){
          const link = ` http://localhost:3000/Reset/${result.ID}`;
          console.log(link);
          toast.success('Password reset link has been sent to ur console.log', {
                position: toast.POSITION.TOP_CENTER
            })

        }
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{ width: '40%', background: '' }} className='container mt-5 mx-auto '>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name='email' value={email} onChange={(e) => { setemail(e.target.value) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>


        <button onClick={(e) => { submit(e) }} type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default ForgetP