import React, { useState } from 'react'
import Loginimg  from '../Assets/B.jpg'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const[credentials,setcredentials] = useState({email:"",password:""})
  const[success,setsuccess] = useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    })
    const jsonData = await response.json()
    console.log(jsonData);

    if(jsonData.success) {
      setsuccess(true)
      localStorage.setItem('token',jsonData.token)
      navigate("/")
    }else {
      setsuccess(false)
      if(!jsonData.userExist) {
        alert("user does not exist please register first")
        navigate("/register")
      }else if(jsonData.userExist){
        alert("invalid credentials")
      }
    }
  }

  const onChange = async(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img  className="absolute w-full h-full object-cover mix-blend-overlay" src={Loginimg} alt="" />

      <div className='flex justify-center items-center h-full'>
            <form  className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit}>
                <h2 className='text-4xl font-bold text-center py-4'>uRlshorTner-LOGIN</h2>
               

                <div className='flex flex-col mb-4'>
                    <label>email</label>
                    <input className="border relative bg-gray-100" type='text' name='email' value={credentials.email} onChange={onChange}/>
                </div>

                <div className='flex flex-col mb-4'>
                    <label>Password</label>
                    <input className="border relative bg-gray-100" type='password' name='password' value={credentials.password} onChange={onChange}/>
                </div>

                <button className='w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Login</button>
                
            </form>
      </div>
    </div>
  )
}

export default Login
