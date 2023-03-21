import React  from 'react'



const Inputfield= (props) => {
    const {type,id,ownStyling,inputClass,labelClass,name,label,inputData,setInputData} = props 
    

    
const inputListener = (e) => {
    const {name,value}=e.target
    setInputData({...inputData,[name]:value})
}

return (
    <div>                
        <div className="relative">
            <input type={type} id={id}  placeholder=" " onChange={inputListener} name={name} className={ ownStyling ? inputClass : "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"}/>
            <label for={id} className={ ownStyling ?labelClass :"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"}>{label}</label>
        </div>
    </div>
)}

export default Inputfield;