import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios';

function Dashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('http://localhost:1337/api/fosils');
                console.log(response.data.meta.pagination);
                setData(response.data.meta.pagination);
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
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
                            <div className='border inline-flex p-4 rounded-lg bg-indigo-300 font-bold shadow-xl'>
                                <div className='block'>
                                    <div className='w-full p-3 text-2xl text-white'>
                                        Batuan
                                    </div>
                                    {data.map((item) => (
                                        <>
                                            <div className='w-full p-3'>
                                                Jumlah : {item.total}
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className='border inline-flex p-4 rounded-lg bg-indigo-300 font-bold shadow-xl'>
                                <div className='block'>
                                    <div className='w-full p-3 text-2xl text-white'>
                                        Fosil
                                    </div>
                                    <div className='w-full p-3'>
                                        Jumlah : 123
                                    </div>
                                </div>
                            </div>
                            <div className='border inline-flex p-4 rounded-lg bg-indigo-300 font-bold shadow-xl'>
                                <div className='block'>
                                    <div className='w-full p-3 text-2xl text-white'>
                                        Sumber Daya Geologi
                                    </div>
                                    <div className='w-full p-3'>
                                        Jumlah : 123
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard