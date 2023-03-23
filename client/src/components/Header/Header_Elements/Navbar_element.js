import React, { useEffect, useState } from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import Capitalize_First_Letter from '../../../functions/Capitalize_First_Letter'
import { Validation } from '../../../functions/Validation'
import Cookies from 'universal-cookie'



function NavbarElement(props) {
  const {pageHandler} = props
  const navigate = useNavigate()
  const cookies = new Cookies()

  const getURL=window.location.href
  const name = sessionStorage.getItem('user_name').split(" ")
  


  const [logged_in,setLogged_In]= useState(false)
  const [userAvatar,setUserAvatar] = useState('https://keskincoding.de/bilder/profil-pic.jpg') 
  
  useEffect(() => {
    (async()=>{
        try{
          await  Validation()
            setLogged_In(true)
        } catch (error) {
            setLogged_In(false)
        }
    })() 
}, [getURL])

const  logout =()=>{
  sessionStorage.removeItem("logged_in")
  cookies.remove('token')
  setLogged_In(false)
  navigate('/')
}

const getUserName = () => {
  return Capitalize_First_Letter(name)
}



return (
    <Navbar fluid={true} rounded={false} className="c">
      <Navbar.Brand >
          <img src="http://www.keskinsoftwaresolution.de/logos/KeskinCoding.png" className="mr-3 h-6 sm:h-9 cursor-pointer rounded" alt="company Logo"  onClick={()=>pageHandler('/')}/>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-default" >React - CMS</span>
      </Navbar.Brand>

        {logged_in ? 
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true} label={ <Avatar alt="User settings" img={userAvatar}rounded={true} className="test"/> }>
            <Dropdown.Header>
              <span className="block text-sm "> {getUserName()}</span>
              <span className="block truncate text-sm font-medium"> {sessionStorage.getItem('user_email')} </span>
            </Dropdown.Header>
            <Dropdown.Item> <button onClick={()=>pageHandler('/dashboard')} className="block text-sm font-medium" >Dashboard</button></Dropdown.Item>
            <Dropdown.Item> <button onClick={()=>pageHandler('/user-setting')} className="block text-sm font-medium" >Settings</button></Dropdown.Item>
            <Dropdown.Item> <button onClick={()=>pageHandler('/earnings')} className="block text-sm font-medium" >Earnings</button></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <button onClick={()=>logout()} className="block text-sm font-medium" >Sign out</button></Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div> 
        :
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true} label={ <Avatar alt="User Login or Sign Up" img={userAvatar} rounded={true}/> }>
            <Dropdown.Item> <button onClick={()=>pageHandler('/login')} className="block text-sm font-medium" > Login </button></Dropdown.Item>
            <Dropdown.Item><button onClick={()=>pageHandler('/sign-up')} className="block text-sm font-medium" > Sign Up </button></Dropdown.Item>
          </Dropdown>
        </div>
}

        <Navbar.Collapse>
          <Navbar.Link className="hover-underline-animation "><button onClick={()=>pageHandler('/')} className="text-black font-bold"> Home</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation "><button onClick={()=>pageHandler('/about-us')} className="text-black font-bold">About</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation "><button onClick={()=>pageHandler('/services')} className="text-black font-bold">Services</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation "><button onClick={()=>pageHandler('/pricing')} className="text-black font-bold">Pricing</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation "><button onClick={()=>pageHandler('/contact-us')} className="text-black font-bold">Contact</button></Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
)}

export default NavbarElement