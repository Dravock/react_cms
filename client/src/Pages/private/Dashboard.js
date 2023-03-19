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
        <Header />
        <div className='md:container md:mx-auto'>
            <h1>Dashboard</h1>
        </div>
    </div>)}

export default Dashboard