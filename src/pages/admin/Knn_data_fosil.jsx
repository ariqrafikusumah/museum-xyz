import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import Datafosil from '../../components/Data_fosil';
import Navbar from '../../components/Navbar';

function KNNdatafosil() {
    const [dataFosil, setdataFosil] = useState([]);

    useEffect(() => {
        async function getFosil() {
            try {
                const response = await axios.get(`http://192.168.0.100:3300/fosil`)
                const data = response.data;
                setdataFosil(data)
            } catch (error) {
                console.log(error.data)
            }
        }
        getFosil()
    })

    return (
        <>
            <Navbar />
            <div className='KNNdatafosil xl:px-44 lg:px-12'>
                <div className='p-3'>
                    <h2 className='text-sm font-bold'>Dashboard &gt; KNN Data {dataFosil.type}</h2>
                </div>
                <div className='mb-3'>
                    <button className='border p-2 rounded-lg bg-indigo-300'>
                        <FaPlus className='text-xl text-white' />
                    </button>
                </div>
                <div className='p-3 bg-indigo-200 rounded-xl'>
                    <h1 className='font-semibold'> {dataFosil.type}</h1>
                </div>
                <div className='border rounded-lg'>
                    <Datafosil />
                </div>
            </div>
        </>
    )
}

export default KNNdatafosil