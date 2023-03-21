import React, { useState } from 'react'
import { Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Messages from '../../includes/enums/Messages'


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
        <div className="mt-6 mb-10 flex justify-center items-center flex-col">
            <div className="md:max-w">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                    <h1 className="text-2xl font-bold text-blue-600  text-center">Please fill all fields</h1>
                    <div className=" text-center">
                        <section className='my-2'>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="text" placeholder='First Name' onChange={inputListener} name="first_name"/>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="text" placeholder='Last Name' onChange={inputListener} name="last_name"/>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="text" placeholder='User Name' onChange={inputListener} name="user_name"/>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="email" placeholder='email' onChange={inputListener} name="user_name"/>
                        </section>
                        <hr className='dashed'/>
                        <section className='my-2'>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="text" placeholder='Adresse' onChange={inputListener} name="adress"/>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="text" placeholder='PLZ' onChange={inputListener} name="city_code"/>
                            <input className="rounded-2xl placeholder:pl-3 mx-2" type="text" placeholder='Stadt' onChange={inputListener} name="city"/>
                        </section>
                        <hr className='dashed'/>
                        <section className='my-2'>
                            <input className="rounded-2xl placeholder:pl-3 " type="password" placeholder='Password' onChange={inputListener} name="password"/>
                            <input className="rounded-2xl placeholder:pl-3 mb-5" type="password" placeholder='Repeat Password' onChange={inputListener} name="password"/>
                        </section>
                    </div>
                    <div className="text-center">
                        <button className="text-center btn btn-green md:w-32 w-" onClick={()=>submit} >Sign Up</button>
                    </div>
                </Card>
            </div>
        </div>

    </>)}

export default SignUp