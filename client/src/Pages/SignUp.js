import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Messages from '../includes/enums/Messages'

function SignUp() {
    const navigate = useNavigate()

    const [inputData,setInputData]=useState()

const inputListener = (e) => {
    const {name,value}=e.target
    setInputData({...inputData,[name]:value})
}

const submit=()=>{
    axios.post(process.env.REACT_APP_BASE_URL+'login/login.php',inputData)
    .then((response)=>{
        navigate('/login')
    })
    .catch((error)=>{
        alert(Messages.error)
    })
}

return (
    <>
        <Header />
        <div className="mt-6 flex justify-center items-center flex-col">
            <div className="md:max-w-lg">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                    <h1 className="text-2xl font-bold text-blue-600  text-center">Please fill all fields</h1>
                        <input className="rounded-2xl placeholder:pl-3 " type="text" placeholder='First Name' onChange={inputListener} name="user"/>
                        <input className="rounded-2xl placeholder:pl-3 " type="text" placeholder='Last Name' onChange={inputListener} name="user"/>
                        <input className="rounded-2xl placeholder:pl-3 " type="text" placeholder='User Name' onChange={inputListener} name="user"/>
                        <hr className='dashed'/>
                        <input className="rounded-2xl placeholder:pl-3 " type="password" placeholder='Password' onChange={inputListener} name="password"/>
                        <input className="rounded-2xl placeholder:pl-3 mb-5" type="password" placeholder='Repeat Password' onChange={inputListener} name="password"/>
                    <button className="btn btn-green " onClick={()=>submit} >Sign Up</button>
                </Card>
            </div>
        </div>
    </>)}

export default SignUp