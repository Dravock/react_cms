import React from 'react'
import { useNavigate } from 'react-router-dom';

const FooterContent = () => {
    const navigate = useNavigate()


    const impr_datenSchu=(btn) => {
        switch (btn) {
            case 'a':
                navigate('/impressum')
                break;
            case 'b':
                navigate('/datenschutz')
                break;
        
            default:
                break;
        }
    }

return (
    <div className="container mx-auto mt-4">
        <div className="grid md:grid-cols-1 justify-center lg:grid-cols-4">
            <ul className='text-center'>
                <h3 className='underline text-lg '>Social-Media</h3>
                <div className=''>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation '>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation '>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation '>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation '>Twitter</a></li>
                </div>
            </ul>
            <ul className='text-center '>
                <h3 className='underline text-lg '>About</h3>
                <div className=''>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Twitter</a></li>
                </div>
            </ul>


            <ul className='text-center'>
                <h3 className='underline text-lg '>Karriere</h3>
                <div className='text-center'>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Twitter</a></li>
                </div>
            </ul>
            <ul className='text-center'>
                <h3 className='underline  text-lg '>Links</h3>
                <div className='text-center'>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='link-decoration hover-underline-animation'>Twitter</a></li>
                </div>
            </ul>
        </div>
        <div className='mt-5'>
            <p className='text-center mt-3'>
                <span className='hover-underline-animation company-privacy-contract' onClick={()=>impr_datenSchu('a')}>Impressum </span> 
                    <span className='font-bold'>
                        || 
                    </span> 
                <span className='hover-underline-animation company-privacy-contract' onClick={()=>impr_datenSchu('b')}>Datenschutz</span>
            </p>
            <h5 className='justify-end company-copyright '> © Keskin Software Solution</h5>
        </div>
    </div>
    )
}

export default FooterContent