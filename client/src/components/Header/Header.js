import React from 'react'
import BreadcrumbElement from './Header_Elements/Breadcrumb_element'
import NavbarElement from './Header_Elements/Navbar_element'
import { useNavigate } from 'react-router-dom' 



function Header() {
  const navigate = useNavigate()

return (
  <div>
    <NavbarElement  navigate={navigate}/>
    <BreadcrumbElement navigate={navigate}/>
  </div>
  )
}

export default Header