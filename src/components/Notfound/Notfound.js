import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigate = useNavigate()
    return (
        <div className='text-center mt-20'>
            <h1 style={{color:"#09082a"}} className='sm:4xl md:text-9xl'>Ops!</h1>
            <p style={{color:"#09082a"}} className='text-2xl mt-4'>404 not found</p>
            <button onClick={()=> navigate('/')} style={{backgroundColor:"#0046d5"}} className='text-white px-6 py-2 rounded mt-4'>Back To Home</button>
        </div>
    );
};

export default Notfound;