import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {

    let auth = localStorage.getItem("user")

    var clearName = JSON.parse(auth);
    let navigate = useNavigate();
    console.log(auth)
    const Logout = (e) => {
        e.preventDefault();
        if (window.confirm('Sure want to logout?')) {
            localStorage.clear("user")
            navigate('/login')
        }

    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Crud</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto topnav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/AddContact">AddContact</Link>
                        </li>
                        {/* <li class="nav-item">
                    <Link class="nav-link" to ="/Edit/:id">Edit</Link>
                </li> */}







                    </ul>

                </div>


                <div>



                    <ul className='navbar-nav ml-auto topnav'>

                        <li class=" nav-item ">

                            {
                                auth ?
                                    <Link onClick={(e) => { Logout(e) }} class="nav-link btn btn-primary text-white mx-1" type="button" to="/login" data-toggle="modal" data-target="#myModal">LogOut</Link>
                                    :
                                    <Link class="nav-link btn btn-primary text-white mx-1" type="button" to="/login" data-toggle="modal" data-target="#myModal">Login</Link>
                            }

                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link btn btn-danger text-white" type="button" to="/resister" data-toggle="modal" data-target="#myModal">Register</Link>
                        </li>


                        <div class="collapse navbar-collapse mx-1" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {clearName}
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>

                     
                    </ul>


                </div>

            </nav>
        </div>
    )
}

export default Navbar
