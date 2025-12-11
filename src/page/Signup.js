import React, { useState } from 'react';
import "./Signup.css";
import {ToastContainer, toast } from 'react-toastify';

 
function Signup() {
    const[fname,setfname]= useState('')
    const[lname,setlname]= useState('')
    const[username , setUsername] = useState('')
    const[pass , setPass] = useState('')

  const handleSignup = (e)=>{
    e.preventDefault()

    if(fname === '' || lname === '' || username === '' || pass === '' ){
        toast.error("pls fill all details")
    }else{
        localStorage.setItem("Username",username)
        localStorage.setItem("Password",pass)
        toast.success("Signup Success")

        setTimeout(()=>{
            window.location.href = "/Login"
        }, 3000)
    } 
  }

  return (
    <>
    <div className='contain'>
        <ToastContainer/>
        <form onSubmit={handleSignup} className='form-box'>
        <h1 className='signup'>Login</h1>

            <input
            type='text'
            placeholder='Enter the Firstname'
            value={fname} className='inp-box txt'
            onChange={(e) =>setfname(e.target.value)}
            />
             <input
            type='text'
            placeholder='Enter the Lastname'
            value={lname} className='inp-box txt'
            onChange={(e) =>setlname(e.target.value)}
            />
             <input
            type='text'
            placeholder='Enter the Username'
            value={username} className='inp-box txt'
            onChange={(e) =>setUsername(e.target.value)}
            />
             <input
            type='password'
            placeholder='Enter the Password'
            value={pass} className='inp-box txt'
            onChange={(e) =>setPass(e.target.value)}
            />
           
           <button type='submit' className='inp-box inp-color'>SUBMIT</button>
            </form>
            
    </div>
    </>
  )
}

export default Signup;
