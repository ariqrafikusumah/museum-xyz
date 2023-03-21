import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className='form-login'>
                <div className='grid border justify-items-center rounded-xl p-2 py-48'>
                    <div className='border px-5 shadow-xl rounded-xl'>
                        <div className='my-3 '>
                            <h1 className='text-center font-bold text-indigo-500'>Login</h1>
                        </div>
                        <div className='mb-3'>
                            <FaUserCircle className='mx-auto text-indigo-500 text-2xl' />
                        </div>
                        <div className='mb-3'>
                            <label className='' htmlFor="email"> Email</label>
                            <br />
                            <input className='border-2 p-1 rounded-sm hover:ring-2 hover:ring-indigo-500' type="text" id='email' name='email' placeholder='Enter email' />
                        </div>
                        <div className='mb-3'>
                            <label className='' htmlFor="password"> Password</label>
                            <br />
                            <input className='border-2 p-1 rounded-sm hover:ring-2 hover:ring-indigo-500' type="password" id='password' name='password' placeholder='Enter password' />
                        </div>
                        <div className='mb-3'>
                            <h6 className='text-sm font-semibold'><Link className='hover:text-indigo-500' to="/dashboard"> Go to dashboard -&gt;</Link></h6>
                        </div>
                        <div className='mb-3'>
                            <button className='border bg-gradient-to-r text-white p-2 rounded-lg from-purple-500 to-blue-500' type='submit'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login