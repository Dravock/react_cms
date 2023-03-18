import React from 'react'
import { Breadcrumb } from 'flowbite-react'

function Breadcrumb_element() {
return (
    <Breadcrumb className="py-3 px-5 text-yellow-300" aria-label="Solid background breadcrumb example"  >
        <Breadcrumb.Item href="#" >Home</Breadcrumb.Item> 
        <Breadcrumb.Item href="#"> Projects </Breadcrumb.Item>
        <Breadcrumb.Item> Flowbite React </Breadcrumb.Item>
    </Breadcrumb>
)}

export default Breadcrumb_element