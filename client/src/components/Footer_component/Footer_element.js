import React from 'react'
import FooterContent from './FooterContent'


const Footer = () => {
  return (
    <footer>
      <div className="footer bg-slate-100" id="footer">
          <h5 className='text-black font-bold'>Info<i className="fa-sharp fa-regular fa-circle-info"></i></h5>
          <div id="footerContent">
              <FooterContent />
          </div>
      </div>
    </footer>
  )
}

export default Footer