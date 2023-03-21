import React, { useState } from 'react'
import BreadcrumbElement from './Header_Elements/Breadcrumb_element'
import NavbarElement from './Header_Elements/Navbar_element'
import { useNavigate } from 'react-router-dom' 



function Header(props) {
  const {loggedIn,setLoggedIn} = props
  
  const navigate = useNavigate()

  const pageHandler =(pageUrl)=>{
    navigate(pageUrl)
  }

return (
  <div>
    <NavbarElement  pageHandler={pageHandler} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    {/* <BreadcrumbElement pageHandler={pageHandler}/> */}
  </div>
  )
}

export default Header