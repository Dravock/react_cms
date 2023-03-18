import React from 'react'
import { Breadcrumb } from 'flowbite-react'

function Breadcrumb_element(props) {
    const {pageHandler} = props



return (
    <Breadcrumb className="py-1 px-5 mb-10" aria-label="Solid background breadcrumb example"  >
        <Breadcrumb.Item><button>Home</button></Breadcrumb.Item> 
        <Breadcrumb.Item><button>Projects</button> </Breadcrumb.Item>
        <Breadcrumb.Item><button>Flowbite React</button> </Breadcrumb.Item>
    </Breadcrumb>
)}

export default Breadcrumb_element