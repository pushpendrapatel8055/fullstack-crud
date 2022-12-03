import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const AddEdit = () => {

  const { id } = useParams();
  console.log(id)


  const [data, setdata] = useState({
    Name: '',
    Email: '',
    Contact: ''
  })



  const { Name, Email, Contact } = data

  const input = (e) => {

    setdata({ ...data, [e.target.name]: e.target.value })


  }
  const navigate = useNavigate();


  const onsubmit = async (e) => {
    e.preventDefault();
    if (!Name || !Email || !Contact) {
      toast.warning('all fields are mandatory !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else {

      if (id) {

        try {
     await axios.put(`http://localhost:4000/api/put/${id} `,data);




        } catch (error) {
          console.log('error')
        }

        setdata({
          Name: '',
          Email: '',
          Contact: ''
        })



        setTimeout(() => navigate('/'), 500)
        toast.success('Your Successfully Updated the user !', {
          position: toast.POSITION.TOP_RIGHT
      });

      }
      else {
        try {
          await axios.post("http://localhost:4000/api/insert", data);
  
  
        } catch (error) {
          console.log('error')
        }
  
        setdata({
          Name: '',
          Email: '',
          Contact: ''
        })
  
  
  
        setTimeout(() => navigate('/'),
         500)
         toast.success('Your Successfully Added the user !', {
          position: toast.POSITION.TOP_RIGHT
      });
     
      }


     
    }
  }




  const getData = async () => {
    let resp = await axios.get(`http://localhost:4000/api/get/${id} `)
    setdata({ ...resp.data[0] });



    console.log(data)

  }


  useEffect(() => {
    getData();

  }, [id])
  return (
    <div style={{ width: '40%' }} className='container mx-auto  mt-5 '>
<h1 className='text-center my-5'>Add/Edit User</h1>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input name='Name' value={Name || ""} onChange={(e) => { input(e) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name='Email' value={Email || ""} onChange={(e) => { input(e) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">contact</label>
          <input name='Contact' value={Contact || ""} onChange={(e) => { input(e) }} type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        {


          id ? <button style={{ width: '100%' }} onClick={(e) => { onsubmit(e) }} type="submit" class="btn btn-primary">Update</button> :

            <button style={{ width: '100%' }} onClick={(e) => { onsubmit(e) }} type="submit" class="btn btn-primary">Submit</button>

        }
      </form>
      <br />

      <Link to={`/`} ><button style={{ width: '100%' }} className='btn btn-secondary mb-5'>Back To Home</button></Link>

    </div>
  )
}

export default AddEdit
