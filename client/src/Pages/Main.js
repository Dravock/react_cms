import React from 'react'
import { useNavigate } from 'react-router-dom' 
import Header from '../components/Header/Header'



function Main() {
    
// REACT COMPONENT,FUNKTIONS AND VARIABLES
    const navigate = useNavigate()


    
    const start_cms =()=>{
        navigate("/Login")
    }

// JSX RETURN BLOCK
return (
    <div className="App">
        <Header />
        <div className='bg-slate-300 text-center m-20 border'>
            <h1 className='  text-5xl m-10 font-bold'>React Content Managment System</h1>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-sm mb-12' onClick={()=>start_cms()}>Click to Start </button>
        </div>
    </div>
)}

export default Main