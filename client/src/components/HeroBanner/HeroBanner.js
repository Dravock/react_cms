import React from 'react'


function HeroBanner(props) {
    const {background}=props
return (
    <>
        <div style={{backgroundImage:`url(${background})`}} className="hero-banner" >
        
        </div>
    </>
)}

export default HeroBanner