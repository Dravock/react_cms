import React from 'react'
import { useNavigate } from 'react-router-dom' 



function Main() {
    const navigate = useNavigate()
// REACT COMPONENT FUNKTIONS AND LOGIC
const start_cms =()=>{
    navigate("/Login")
}

// JSX RETURN BLOCK
return (
    <div className="App">
        <div className='bg-fuchsia-300 text-center m-20 border'>
            <h1 className='text-6xl text-red-500 m-32'>React ContentManagment System</h1>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mb-12' onClick={()=>start_cms()}>Click to Start </button>
        </div>
    </div>
)}

export default Main