import React from 'react'


function HeroBanner(props) {
    const {backgroundURL}=props
return (
    <>
        <div style={{backgroundImage:`url(${backgroundURL})`}} className="hero-banner " >
            {/* CONTENT FÜR DEN BANNER */}
        </div>
    </>
)}

export default HeroBanner