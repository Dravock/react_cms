import React, { useState } from 'react'
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios';
import Header from '../components/Header/Header';



function Login() {
    const cookies = new Cookies()
    const navigate = useNavigate()

    const [inputData,setInputData]=useState()

const inputListener = (e) => {
    const {name,value}=e.target
    setInputData({...inputData,[name]:value})
}

const submit=()=>{
    axios.post(process.env.REACT_APP_BASE_URL+'login/login.php',inputData)
    .then((response)=>{
        const options = {
            // httpOnly: true, //TODO im Online Betrieb auskommentieren
            //secure: true,
            path:'/',
            expires: new Date(Date.now() +  1000*60*60*5)
        }
        cookies.set("token",response.data)
        cookies.set("userId",inputData.userId)

        navigate('/main')
    })
    .catch((error)=>{
        alert('Login Fehlgeschlagen')
    })
}


return (
<>
    <Header />
    <div className="mt-6 flex justify-center items-center flex-col">
        <div className="md:max-w-lg">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h1 className="text-2xl font-bold text-blue-600  text-center">Please enter youre Username and Password</h1>
                    <input className="rounded-2xl placeholder:pl-3 " type="text" placeholder='Username' onChange={inputListener} name="user"/>
                    <input className="rounded-2xl placeholder:pl-3 mb-5" type="password" placeholder='Password' onChange={inputListener} name="password"/>
                <button className="btn btn-green " onClick={()=>submit} >Login</button>
            </Card>
        </div>
    </div>
</>)}

export default Login