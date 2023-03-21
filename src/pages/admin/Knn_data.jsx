import React from 'react'
import Datafosil from '../../components/Data_fosil';
import Navbar from '../../components/Navbar';

function KNNdata() {
    return (
        <>
            <Navbar />
            <div className='KNNdata xl:px-44 lg:px-12'>
                <div className='p-3'>
                    <h2 className='text-sm font-bold'>Dashboard &gt; KNN Data</h2>
                </div>
                <div className='p-3 bg-indigo-200 rounded-xl'>
                    <h1 className='font-semibold'> Fosil</h1>
                </div>
                <div className='border rounded-lg'>
                    <Datafosil />
                </div>
            </div>
        </>
    )
}

export default KNNdata