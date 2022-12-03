import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Link
} from "react-router-dom";

import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
const Home = () => {


  const [data, setData] = useState([])

  const navigate = useNavigate()

  const getData = async () => {
    let res = await axios.get("http://localhost:4000/api/get")
    setData(res.data)

  }
  console.log(data)


  useEffect(() => {
    getData()
  }, [])



  const setDelete = async (id) => {

    if (window.confirm('Sure want to delete?')) {
      try {
        await axios.delete(`http://localhost:4000/api/delete/${id}`);
      } catch (error) {
        console.log("error")
      }
      getData();
      toast.success("You SuccessFully Deleted the user", {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else {
      getData()
    }








  }
  return (
    
    <div style={{ width: '50%' }} className='container mt-5 mx-auto '>
      <Link to={`/AddContact`} ><button className='btn btn-info text-center'>Add Contacts</button></Link>
      <br />
      <br />
      <br />
      <table style={{ backgroundColor: '#ced4da' }} class="table caption-top">

        <caption className='text-center'>List of users</caption>
        <thead>


          <tr style={{ backgroundColor: '#20c997' }} className=''>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            data.map((currEl, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{currEl.Name}</td>
                  <td>{currEl.Email}</td>
                  <td>{currEl.Contact}</td>
                  <td>
                    <Link to={`/Edit/${currEl.Id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>&nbsp;
                    <button onClick={() => { setDelete(currEl.Id) }} className='btn btn-danger btn-sm'>Delete</button>
                    {/* <Link to={`/Edit/${currEl.Id}`}><button className='btn btn-primary btn-sm'>Edit</button></Link>&nbsp; */}

                  </td>


                </tr>
              )

            })
          }


        </tbody>
      </table>


    </div>
  )
}

export default Home
