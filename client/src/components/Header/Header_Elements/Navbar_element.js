import React, { useState } from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function NavbarElement(props) {
  const {pageHandler} = props

  const navigate = useNavigate()

  const [logged_in,setLogged_In]= useState(sessionStorage.getItem("logged_in"))
  const [userAvatar,setUserAvatar] = useState('https://keskincoding.de/bilder/profil-pic.jpg') 

  const  logout =()=>{
    axios.delete()

    sessionStorage.removeItem("logged_in")
    navigate('/')
  }



return (
    <Navbar fluid={true} rounded={true} className="bg-red-500">
      <Navbar.Brand >
          <img src="http://www.keskinsoftwaresolution.de/logos/KeskinCoding.png" className="mr-3 h-6 sm:h-9 cursor-pointer" alt="company Logo"  onClick={()=>pageHandler('/')}/>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-default" >React - CMS</span>
      </Navbar.Brand>

        {logged_in ? 
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true} label={ <Avatar alt="User settings" img={userAvatar}rounded={true} className="test"/> }>
            <Dropdown.Header>
              <span className="block text-sm "> Bonnie Green </span>
              <span className="block truncate text-sm font-medium"> name@flowbite.com </span>
            </Dropdown.Header>
            <Dropdown.Item> <button onClick={()=>pageHandler('/user-dashboard')} className="block text-sm font-medium" >Dashboard</button></Dropdown.Item>
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
          <Navbar.Link  active={true} className="hover-underline-animation"> <button onClick={()=>pageHandler('/')}> Home</button></Navbar.Link>
          <Navbar.Link active={false} className="hover-underline-animation"><button onClick={()=>pageHandler('/')}>About</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation"><button onClick={()=>pageHandler('/')}>Services</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation"><button onClick={()=>pageHandler('/')}>Pricing</button></Navbar.Link>
          <Navbar.Link className="hover-underline-animation"><button onClick={()=>pageHandler('/')}>Contact</button></Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
)}

export default NavbarElement