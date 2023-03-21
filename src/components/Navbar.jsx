import React, { useState } from 'react'
import { FaAlignRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Navbar() {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <nav className='navbar w-full shadow-xl'>
                <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div className=' border-b-2'>
                        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                            <div className='text-2xl font-bold'>
                                <Link to="/dashboard"> Museum XYZ</Link>
                            </div>
                            <div className='md:hidden px-2'>
                                <button
                                    className='border rounded-lg p-2'
                                    type='button'
                                    onClick={() => setIsShow(!isShow)}
                                >
                                    {isShow ? (
                                        <FaArrowUp />
                                    ) : (
                                        <FaAlignRight />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isShow ? "block" : "hidden"}`}>
                            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                                <Link className='' to="/dashboard">
                                    <li className='px-5 py-3 cursor-pointer hover:bg-indigo-500 hover:rounded-lg font-bold text-gray-900 hover:text-white duration-500 justify-end'>Dashboard
                                    </li>
                                </Link>
                                <Link className='' to="/knn-data">
                                    <li className='px-5 py-3 cursor-pointer hover:bg-indigo-500 hover:rounded-lg font-bold text-gray-900 hover:text-white duration-500 justify-end'>KNN Data
                                    </li>
                                </Link>
                                <Link className='' to="/prediksi">
                                    <li className='px-5 py-3 cursor-pointer hover:bg-indigo-500 hover:rounded-lg font-bold text-gray-900 hover:text-white duration-500 justify-end'>Prediksi
                                    </li>
                                </Link>
                                <Link className='' to="/">
                                    <li className='px-5 py-3 cursor-pointer hover:bg-indigo-500 hover:rounded-lg font-bold text-red-500 hover:text-white duration-500 justify-end'>Logout
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar