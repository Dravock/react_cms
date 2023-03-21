import React from 'react'
import FooterContent from './FooterContent'


const Footer = () => {
  return (
    <footer className='z-50'>
      <div className="footer" id="footer">
          <h5 className='text-black font-bold'>Info<i className="fa-sharp fa-regular fa-circle-info"></i></h5>
          <div id="footer-content">
              <FooterContent />
          </div>
      </div>
    </footer>
  )
}

export default Footer