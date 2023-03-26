import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [metadata, setmetaData] = useState(null);
    useEffect(() => {
        async function getFosil() {
            try {
                const response = await axios.get(`http://192.168.0.100:3300/fosil`)
                const data = response.data;
                setmetaData(data.metadata)
            } catch (error) {
                console.log(error);
            }
        }
        getFosil()
    }, []);
    return (
        <>
            <Navbar />
            <div className='dashboard xl:px-44 lg:px-12'>
                <div>
                    <div className='p-3'>
                        <h2 className='text-sm font-bold'>Dashboard &gt;</h2>
                    </div>
                    <div className='p-3'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-2'>
                            {/* <div className='border inline-flex p-4 rounded-lg bg-indigo-300 font-bold shadow-xl'>
                                <Link className='block w-full' to='/knn-data-fosil'>
                                    <div className='block'>
                                        <div className='w-full p-3 text-2xl text-white'>
                                            Batuan
                                        </div>
                                        <>
                                            <div className='w-full p-3'>
                                                Jumlah :
                                            </div>
                                        </>
                                    </div>
                                </Link>
                            </div> */}
                            <div className='border inline-flex p-4 rounded-lg bg-indigo-300 font-bold shadow-xl'>
                                <Link className='block w-full' to='/knn-data-fosil'>
                                    <div className='block w-full'>
                                        <div className='w-full p-3 text-2xl text-white'>
                                            Fosil
                                        </div>
                                        <div className='w-full p-3'>
                                            Jumlah : {metadata && metadata.totalData}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* <div className='border inline-flex p-4 rounded-lg bg-indigo-300 font-bold shadow-xl'>
                                <Link className='block w-full' to='/knn-data-fosil'>
                                    <div className='block'>
                                        <div className='w-full p-3 text-2xl text-white'>
                                            Sumber Daya Geologi
                                        </div>
                                        <div className='w-full p-3'>
                                            Jumlah :
                                        </div>
                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard