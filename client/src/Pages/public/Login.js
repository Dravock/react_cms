import React, { useState } from 'react'
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios';
import Messages from '../../includes/enums/Messages.js';
import LoadingScreen from '../../components/loading_spinner/Loadingscreen';
import LoadingMessages from '../../includes/enums/LoadingMessages';
import LoadingState from '../../includes/enums/LoadingState';
import Inputfield from '../../components/InputField/Inputfield';



function Login(props) {
    const cookies = new Cookies()
    const navigate = useNavigate()

    const [inputData,setInputData]=useState()
    const [loading,setLoading] = useState(LoadingState.Inactive)

const set_Session_storage_data =  (user_data) => {
    console.log(user_data)
    sessionStorage.setItem("logged_in",user_data.jwt)
    sessionStorage.setItem("user_name",user_data.vorname+' '+user_data.nachname)
    sessionStorage.setItem("user_email",user_data.email)
}

const submit= async ()=>{
    setLoading(LoadingState.Active)
    return axios.post(process.env.REACT_APP_BASE_URL + '/login/login.php',inputData)
        .then((response)=>{
            const options = {
                // httpOnly: true, //TODO im Online Betrieb auskommentieren
                // secure: true,
                path:'/',
                expires: new Date(Date.now() +  1000*60*60*5) 
            }
            cookies.set("token",response.data.jwt)
            set_Session_storage_data(response.data)            
            navigate('/dashboard')
        })
        .catch((error)=>{
            console.log('hier bin ich')
            alert(Messages.loginFailed.message)
        })
}

return (
<> {loading === LoadingState.Active && <LoadingScreen text={LoadingMessages.GeneralWaiting}/>}
    <div className="mt-6 mb-10 flex justify-center items-center flex-col">
        <div className="md:max-w-lg">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h1 className="text-2xl font-bold text-blue-600  text-center">Please enter youre Username and Password</h1>
                
                    <Inputfield type={'text'} id={'user_name'} name={'user_name'} label={'username'} inputData={inputData} setInputData={setInputData}/>
                    <Inputfield type={'password'} id={'user_password'} name={'user_password'} label={'Password'} inputData={inputData} setInputData={setInputData}/>
                    <button  className="btn btn-green " onClick={()=>submit()} >Login</button>
            </Card>
        </div>
    </div>
</>)}

export default Login