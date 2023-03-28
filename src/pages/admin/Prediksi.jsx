import React from 'react'
import { KNNClassifier, Navbar }  from './components'

function Prediksi() {
    return (
        <>
            <Navbar />
            <div className='Prediksi xl:px-44 lg:px-12'>
                <div className='p-3'>
                    <h2 className='text-sm font-bold'>Dashboard &gt; Prediksi</h2>
                </div>
                <div>
                    <KNNClassifier />
                </div>
            </div>
        </>
    )
}

export default Prediksi