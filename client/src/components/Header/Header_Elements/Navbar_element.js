import React, { useState } from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react'



function NavbarElement(props) {
  const {pageHandler,loggedIn,setLoggedIn} = props

  
  const [userData, setUserData]= useState({user:'',email:''})
  const [userAvatar,setUserAvatar] = useState('url') 

  const  logout =()=>{
    console.log('ausloggen')
    setLoggedIn(false)
  }

return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand >
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9 cursor-pointer" alt="company Logo"  onClick={()=>pageHandler('/')}/>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-default" >React - CMS</span>
      </Navbar.Brand>

        {loggedIn ? 
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true} label={ <Avatar alt="User settings" img={userAvatar}rounded={true}/> }>
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
          <Navbar.Link  active={true} > <button onClick={()=>pageHandler('/')}> Home</button></Navbar.Link>
          <Navbar.Link active={false}><button onClick={()=>pageHandler('/')}>About</button></Navbar.Link>
          <Navbar.Link ><button onClick={()=>pageHandler('/')}>Services</button></Navbar.Link>
          <Navbar.Link ><button onClick={()=>pageHandler('/')}>Pricing</button></Navbar.Link>
          <Navbar.Link ><button onClick={()=>pageHandler('/')}>Contact</button></Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
)}

export default NavbarElement