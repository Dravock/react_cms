import { Footer } from 'flowbite-react'
import React from 'react'

function Footer_element() {
return (
    <>
    <Footer container={true}>
        <Footer.Copyright by="Keskin Software Solution™" year={2023}/>
        <Footer.LinkGroup>
            <Footer.Link href="#"> About </Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
    </Footer>
</>)}

export default Footer_element