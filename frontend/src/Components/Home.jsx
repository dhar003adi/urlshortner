import React, { useEffect, useState } from "react";
import {Alert, Button, Label, TextInput } from 'flowbite-react';
import Table from "../Components/Table"
import Loginimg from "../Assets/Ad.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
  const[credentials,setcredentials] = useState({redirectURL:""})
  const [tableData,settableData] = useState([])
  useEffect(()=>{
    const fetchdata = async()=>{
      const token = localStorage.getItem('token')
      if(!token) {
        alert("You are not logged in, Plaease log in buddy")
        navigate("/login")
      }

      try {
        const response = await fetch("http://localhost:5000/api/url/get/short-ids",{
          method:'GET',
          headers:{
            "Content-Type":"application/json",
            "Authorization":token,
          }
        });

        const jsonData = await response.json()
        console.log(jsonData);
        settableData(jsonData)
      } catch (error) {
        console.error("Error in fetching data",error)
      }
    };
    
    fetchdata()
  },[])

  const onChange = async(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const token = localStorage.getItem('token');
    if (!token) {
      alert("You are not logged in please log in")
      navigate('/login');
      return;
    }

  
    const response = await fetch("http://localhost:5000/api/url",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Authorization":token,
      },
      body:JSON.stringify({redirectURL:credentials.redirectURL})
    })
    const jsonData = await response.json()
    console.log(jsonData);
  }
  return (
    <div className="bg-gradient-to-r from-[#42275a] to-[#734b6d]  w-full h-screen ">
      

      <div className="flex flex-col mb-4 justify-center items-center h-full">
        <h1 className="text-8xl bold p-4 ">SHRINK URL....</h1>
          <form onSubmit={handleSubmit}>
          <div className='flex '>
          <input type="url" id="urlInput" name="redirectURL" value={credentials.redirectURL} className="border border-gray-300 p-2 mr-2 w-full md:w-96" placeholder="Enter URL to shorten" onChange={onChange} />
                  <Button color="dark" type="submit" >Shrink</Button>
          </div>
          </form>
          
          <div className="  p-2 mr-2 w-full md:w-99">
          <Table data = {tableData}/>
          </div>
          
      </div>

      
                
    </div>
  );
};

export default Home;
