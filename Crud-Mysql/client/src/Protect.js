import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protect = (props) => {

    const {Component} = props

let navigate = useNavigate()
    useEffect(()=>{
        let auth = localStorage.getItem("user");

        if(!auth){
navigate("/login")
        }
    })

  return (
    <>
 <Component/>
    </>
  
  )
}

export default Protect