import React, { useEffect, useState } from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function NavbarElement(props) {
  const {pageHandler} = props

  const navigate = useNavigate()
  const path =window.location.href.slice(32)
  const [link_active,setLink_active]=useState(
    {
      home:true,
      about:false,
      services:false,
      price:false,
      contactUs:false
    }
  )
  const [logged_in,setLogged_In]= useState(sessionStorage.getItem("logged_in"))
  const [userAvatar,setUserAvatar] = useState('https://keskincoding.de/bilder/profil-pic.jpg') 

  const  logout =()=>{
    sessionStorage.removeItem("logged_in")
    navigate('/')
  }

  useEffect(() => {
    switch (path) {
      case 'home':
        setLink_active({home:true,
                        about:false,
                        services:false,
                        price:false,
                        contaktUs:false
                      })
        break;
      case 'about-us':
        setLink_active({home:false,
                        about:true,
                        services:false,
                        price:false,
                        contactUs:false
                      })
        break;
      case 'services':
        setLink_active({home:false,
                        about:false,
                        services:true,
                        price:false,
                        contactUs:false
                      })
        break;
      case 'pricing':
        setLink_active({home:false,
                        about:false,
                        services:false,
                        price:true,
                        contakcUs:false
                      })
        break;
      case 'contact-us':
        setLink_active({home:false,
                        about:false,
                        services:false,
                        price:false,
                        contakcUs:true
                      })
        break;
    
      default:
        break;
    }
  }, [path])
  
  

console.log(link_active)

return (
    <Navbar fluid={true} rounded={false} className="bg-red-500">
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
          <Navbar.Link active={link_active.home} className="hover-underline-animation "><button onClick={()=>pageHandler('/')} className="text-black font-bold"> Home</button></Navbar.Link>
          <Navbar.Link active={link_active.about} className="hover-underline-animation "><button onClick={()=>pageHandler('/about-us')} className="text-black font-bold">About</button></Navbar.Link>
          <Navbar.Link active={link_active.services} className="hover-underline-animation "><button onClick={()=>pageHandler('/services')} className="text-black font-bold">Services</button></Navbar.Link>
          <Navbar.Link active={link_active.price} className="hover-underline-animation "><button onClick={()=>pageHandler('/pricing')} className="text-black font-bold">Pricing</button></Navbar.Link>
          <Navbar.Link active={link_active.contactUs} className="hover-underline-animation "><button onClick={()=>pageHandler('/contact-us')} className="text-black font-bold">Contact</button></Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
)}

export default NavbarElement