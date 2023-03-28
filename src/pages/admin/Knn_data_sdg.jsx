import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar,Datafosil }  from './components'

function KNNdatasdg() {
    const [dataFosil, setdataFosil] = useState ([]);

    useEffect(() => {
        async function getFosil() {
            try {
                const response = await axios.get(`http://localhost:3300/fosil`)
                setdataFosil(response.data)
            } catch (error) {
                console.log(error.data)
            }
        }
        getFosil()
    })

    return (
        <>
            <Navbar />
            <div className='KNNdatasdg xl:px-44 lg:px-12'>
                <div className='p-3'>
                    <h2 className='text-sm font-bold'>Dashboard &gt; KNN Data</h2>
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

export default KNNdatasdg