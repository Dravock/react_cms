import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React, { useState } from 'react'


function NavbarElement() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAvatar,setUserAvatar] = useState('https://icons8.com/icon/tZuAOUGm9AuS/user-default') 
  
return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="company Logo"/>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span> </Navbar.Brand>
        {loggedIn ? 
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true} label={ <Avatar alt="User settings" img={userAvatar}rounded={true}/> }>
            <Dropdown.Header>
              <span className="block text-sm cursor-pointer"> Bonnie Green </span>
              <span className="block truncate text-sm font-medium"> name@flowbite.com </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div> :
        <div className="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true} label={ <Avatar alt="User settings" img={userAvatar} rounded={true}/> }>
            <Dropdown.Header>
              <span className="block text-sm font-medium cursor-pointer"> Login </span>
              <span className="block truncate text-sm font-medium cursor-pointer"> Sign Up </span>
            </Dropdown.Header>
          </Dropdown>
        </div>
}

        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true} >Home</Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
)}

export default NavbarElement