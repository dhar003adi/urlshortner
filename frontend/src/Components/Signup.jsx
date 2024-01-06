import React, { useState } from 'react'
import Loginimg from '../Assets/A.jpg'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
const navigate = useNavigate()
  const [credentials,setcredentials] = useState({username:"",email:"",password:""})
  const [success,setSuccess] = useState(false)
   
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username:credentials.username,email:credentials.email,password:credentials.password})
    })

    const jsonData = await response.json()
    if(jsonData.success) {
      setSuccess(true)
      localStorage.setItem('token',jsonData.token)
      navigate("/")
    }else {
      setSuccess(false)
      alert("User already exist please login")
      navigate("/login")
    }
    console.log(jsonData);
  }

  const onChange = async(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img  className="absolute w-full h-full object-cover mix-blend-overlay" src={Loginimg} alt="" />

      <div className='flex justify-center items-center h-full'>
            <form  className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit}>
                <h2 className='text-4xl font-bold text-center py-4'>uRlshorTner</h2>
               
                <div className='flex flex-col mb-4'>
                    <label>Username</label>
                    <input className="border relative bg-gray-100" type='text' name='username' value={credentials.username} onChange={onChange}/>
                </div>

                <div className='flex flex-col mb-4'>
                    <label>email</label>
                    <input className="border relative bg-gray-100" type='email' name='email' value={credentials.email} onChange={onChange}/>
                </div>

                <div className='flex flex-col mb-4'>
                    <label>Password</label>
                    <input className="border relative bg-gray-100" type='password' name='password' value={credentials.password} onChange={onChange}/>
                </div>

                <button className='w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Register</button>
                
            </form>
      </div>
    </div>
  )
}

export default Signup
