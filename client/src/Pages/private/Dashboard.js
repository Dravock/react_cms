import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Validation } from '../../functions/Validation';
import Header from '../../components/Header/Header';
import LoadingState from '../../includes/enums/LoadingState';
import LoadingScreen from '../../components/loading_spinner/Loadingscreen';
import LoadingMessages from '../../includes/enums/LoadingMessages';


function Dashboard() {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(LoadingState.Active)
    


useEffect(() => {
    (async()=>{
        try{
        setLoading(LoadingState.Active)
        await Validation()
        setLoading(LoadingState.Inactive)
        } catch (error) {
            navigate("/")
        }
    })() 
}, [])


return (
    <div>
        {loading === LoadingState.Active && <LoadingScreen text={LoadingMessages.GeneralWaiting}/>}
        <div className='container md:mx-auto border bg-slate-400'>
            <h1 className='text-center font-bold text-3xl'>Dashboard</h1>
        </div>
    </div>)}

export default Dashboard