
import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer , toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  
  const[username,setusername]= useState('')
    const[password,setpassword]= useState('')
    const navigate = useNavigate();

    const[oldusername, setOldUsername] = useState(localStorage.getItem("Username"))
    const[oldpassword,setOldPassword] = useState(localStorage.getItem("Password"))

     const handleLogin = (e)=>{
         e.preventDefault()

         

        if(oldusername != username){
            toast.error("username not match")
        }
        else if(oldpassword != password){
           toast.error("password is wrong")
        }
        else if(oldusername === username && oldpassword === password ){
             toast.success("Login success")

             setTimeout(()=>{
                 navigate("/dashboard");
             },3000)
         }

         
         else{
            
             toast.error("Login error")  
         }
        }
    
  return (
    <>
    
    <div className='wrap'>
        <ToastContainer/>
       

        <form onSubmit={handleLogin} className='wrap-form'>

            
             <input type='text'
            placeholder='Enter Username'
            value={username} className='inp-box'
            onChange={(e)=>setusername(e.target.value)}
            />
             <input type='password'
            placeholder='Enter Password'
            value={password} className='inp-box'
            onChange={(e)=>setpassword(e.target.value)}
            />

            <button type='submit'  className='inp-box btn-color'>Login1</button>


<Link 
  to="/" 
  style={{ color: "white", textDecoration: "none" }}
>
  signup
</Link>      </form>
      
    </div>
    </>
  )
}
export default Login