import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Resister = () => {

    let navigate = useNavigate();
    const [passView, setpassView] = useState(true)
    const [cpassView, setcpassView] = useState(true)

    const view = () => {
        setpassView(false)

    }
    const hide = () => {
        setpassView(true)
    }
    const cview = () => {
        setcpassView(false)

    }
    const chide = () => {
        setcpassView(true)
    }
    const [Resister, setResister] = useState({
        name: '',
        email: '',
        password: ' ',
        Cpassword: ''
    })

    const { name, email, password, Cpassword } = Resister

    const getInput = (e) => {

        setResister({ ...Resister, [e.target.name]: e.target.value })

    }

    const onsubmit = async (e) => {

        e.preventDefault();
        if (!name || !email || !password || !Cpassword) {
            toast.error('Each Field Requitred ', {
                position: toast.POSITION.TOP_CENTER
            });





        }
        else if (password !== Cpassword) {
            toast.error('password and confirm password Should be Same ', {
                position: toast.POSITION.TOP_CENTER
            })
        }
        else {
            try {
                await axios.post("http://localhost:4000/api/resister/insert", {
                    name: name,
                    email: email,
                    password: password
                });

            } catch (error) {
                console.log("error")
            }

            setTimeout(() => navigate("/login"), 500)
            toast.success('You are SuccessFully Resisterd ', {
                position: toast.POSITION.TOP_CENTER
            });

        }

    }
    console.log(Resister)


    return (
        <div>
            <div style={{ width: '40%', background: '' }} className='container mt-5 mx-auto '>

                <h1 className='text-center my-3'>SignUp</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input name='name' value={name} onChange={(e) => { getInput(e) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input name='email' value={email} onChange={(e) => { getInput(e) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>

                        <input name='password' value={password} onChange={(e) => { getInput(e) }} type={passView === true ? "password" : "text"} class="form-control" id="exampleInputPassword1"
                        />


                        {
                            passView === true ?
                                <svg style={{ cursor: 'pointer' }} onClick={() => { view() }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { hide() }} width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                        }



                    </div>




                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>

                        <input name='Cpassword' value={Cpassword} onChange={(e) => { getInput(e) }} type={cpassView === true ? "password" : "text"} class="form-control" id="exampleInputPassword1"
                        />


                        {
                            cpassView === true ?
                                <svg style={{ cursor: 'pointer' }} onClick={() => { cview() }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { chide() }} width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                        }



                    </div>

                    <br />
                    <div class="d-grid gap-2 ">
                        <button onClick={(e) => { onsubmit(e) }} class="btn btn-primary" type="button">Submit</button>

                    </div>

                    <br />
                    <p className='text-center'> Already a Member ? <Link to='/Login'>Login</Link> </p>





                </form>
            </div>
        </div>
    )
}

export default Resister;
