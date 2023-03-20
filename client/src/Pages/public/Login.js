import React, { useState } from 'react'
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Messages from '../../includes/enums/Messages.js';
import Footer_element from '../../components/Footer_component/Footer_element';
import LoadingScreen from '../../components/loading_spinner/Loadingscreen';
import LoadingMessages from '../../includes/enums/LoadingMessages';
import LoadingState from '../../includes/enums/LoadingState';



function Login(props) {
    const cookies = new Cookies()
    const navigate = useNavigate()

    const [inputData,setInputData]=useState()
    const [loading,setLoading] = useState(LoadingState.Inactive)

const inputListener = (e) => {
    const {name,value}=e.target
    setInputData({...inputData,[name]:value})
}

const submit=()=>{
    setLoading(LoadingState.Active)
    axios.post(process.env.REACT_APP_BASE_URL + '/login/login.php',inputData)
    .then((response)=>{
        console.log('komme in den response 1')
        const options = {
            // httpOnly: true, //TODO im Online Betrieb auskommentieren
            // secure: true,
            path:'/',
            expires: new Date(Date.now() +  1000*60*60*5) 
        }
        cookies.set("token",response.data)
        sessionStorage.setItem("logged_in",response.data)
        // sessionStorage.setItem("user_data",response.data)
        console.log('session storage gesetzt ')
        if(response.data){
            
            navigate('/dashboard')
        }
    })
    .catch((error)=>{
        console.log('hier bin ich')
        alert(Messages.loginFailed.message)
    })
    setLoading(LoadingState)
}

return (
<> {loading === LoadingState.Active && <LoadingScreen text={LoadingMessages.GeneralWaiting}/>}
    <Header />
    <div className="mt-6 mb-10 flex justify-center items-center flex-col">
        <div className="md:max-w-lg">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h1 className="text-2xl font-bold text-blue-600  text-center">Please enter youre Username and Password</h1>
                <div className="relative">
                    <input type="text" id="user_name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={inputListener} name="user" />
                    <label for="user_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">username</label>
                </div>

                <div className="relative">
                    <input type="password" id="user_password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={inputListener} name="password" />
                    <label for="user_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">password</label>
                </div>
                    <button  className="btn btn-green " onClick={()=>submit()} >Login</button>
            </Card>
        </div>
    </div>
    <Footer_element />
</>)}

export default Login