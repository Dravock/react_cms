import React from 'react'
import Header from '../../components/Header/Header'
import Footer_element from '../../components/Footer_component/Footer_element'

function Pricing() {
  return (
    <div>
        <Header />
            <div className='container md:mx-auto border bg-slate-400'>
                <h1 className=''>Pricing</h1>
            </div>
        <Footer_element />
    </div>
  )
}

export default Pricing