import React from 'react'
import Footer_element from '../../components/Footer_component/Footer_element'
import Header from '../../components/Header/Header'
import about_us_IMG from '../../includes/img/jpeg/AdobeStock_415156437.jpeg';

function AboutUs() {
  return (
    <div>
        <div>    
            <Header />
                <div className='container md:mx-auto border bg-slate-400'>
                    <img className='w-full border border-black border-solid' src={about_us_IMG} alt="our story"></img>
                    
                    <h1 className='mx-5 mt-4 text-3xl font-bold underline" aria-hidden="true"></i>'>About us...</h1>
                    <p className='mx-8 text-justify'>Eiusmod Lorem tempor sint et sit nisi enim consequat excepteur cupidatat. Exercitation quis excepteur velit nostrud minim non excepteur laborum labore sit fugiat consectetur laborum aliqua. Et sint velit culpa culpa consequat mollit deserunt. Occaecat enim fugiat aliquip velit dolor duis esse ipsum laborum ad tempor mollit nisi cillum. Tempor ex id qui dolor minim magna labore id aliqua tempor. Sint reprehenderit consequat ullamco ex pariatur. Incididunt cupidatat irure eu culpa reprehenderit ut veniam qui exercitation aute cillum.
                        Cillum nulla aute nulla fugiat duis. Cupidatat enim enim est laboris. In exercitation laborum aute quis do deserunt aliqua elit eu nostrud proident.</p>
                    <p className='m-8 text-justify'>Fugiat veniam excepteur ex est fugiat. Eu nisi incididunt veniam aliqua sunt enim commodo do consequat veniam. In exercitation excepteur deserunt ullamco. Id id fugiat elit incididunt laborum id adipisicing magna. Nulla cupidatat cillum reprehenderit deserunt nulla. Ipsum sit veniam ullamco irure laborum deserunt eiusmod cillum excepteur nostrud ullamco nostrud.
                        Sunt occaecat occaecat ut nulla minim. Quis eu commodo officia sit mollit. Sit cupidatat officia do ut ullamco aliqua culpa. Elit irure elit velit veniam pariatur aute occaecat culpa aliquip cillum consectetur amet adipisicing. Voluptate dolor duis enim duis.</p>
                </div>
            <Footer_element />
        </div>
    </div>
  )
}

export default AboutUs