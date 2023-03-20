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
    <div className="bg-slate-700">
        <div className="grid grid-cols-6 gap-4 m-auto">
            <ul></ul>
            <ul className='text-justify'>
                <h3 className='underline text-2xl text-justify text-slate-300'>Social-Media</h3>
                <div >
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation text-slate-200'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation text-slate-200'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation text-slate-200'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation text-slate-200'>Twitter</a></li>
                </div>
            </ul>
            <ul className='text-justify'>
                <h3 className='underline text-justify text-2xl text-slate-300'>About</h3>
                <div>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Twitter</a></li>
                </div>
            </ul>


            <ul className='text-justify'>
                <h3 className='underline text-justify text-2xl text-slate-300'>Karriere</h3>
                <div>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Twitter</a></li>
                </div>
            </ul>
            <ul className='text-justify'>
                <h3 className='underline text-justify text-2xl text-slate-300'>Links</h3>
                <div>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>facebook</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Instagram</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Youtube</a></li>
                    <li><a href='https://www.facebook.de' className='cursor-pointer font-bold text-sm hover-underline-animation'>Twitter</a></li>
                </div>
            </ul>
            <ul></ul>
        </div>
        <p className='text-center mt-3'><span className='cursor-pointer hover-underline-animation font-bold' onClick={()=>impr_datenSchu('a')}>Impressum </span> <span className='font-bold'>|| </span> <span className='cursor-pointer hover-underline-animation font-bold' onClick={()=>impr_datenSchu('b')}>Datenschutz</span></p>
        <h5 className='justify-end text-lg font-bold text-white '> © Keskin Software Solution</h5>
    </div>
    )
}

export default FooterContent