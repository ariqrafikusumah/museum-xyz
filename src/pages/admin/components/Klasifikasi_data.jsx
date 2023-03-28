import React, { useState } from 'react';

function calculateDistance(pointA, pointB) {
    // menghitung jarak antara pointA dan pointB menggunakan rumus Euclidean distance
    const distance = Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
    return distance;
}

function classifyData(data, k, newData) {
    // mencari K data terdekat dari newData menggunakan fungsi calculateDistance
    const distances = data.map(point => {
        return {
            label: point.label,
            distance: calculateDistance(newData, point)
        }
    }).sort((a, b) => a.distance - b.distance).slice(0, k);

    // mengambil label mayoritas dari K data terdekat sebagai hasil klasifikasi
    const labels = distances.map(distance => distance.label);
    const result = labels.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }
        return acc;
    }, {});
    const maxCount = Math.max(...Object.values(result));
    const classification = Object.keys(result).find(key => result[key] === maxCount);

    return classification;
}

function KNNClassifier() {
    // data yang akan digunakan untuk klasifikasi
    const data = [
        { x: 1, y: 2, label: 'A' },
        { x: 2, y: 1, label: 'A' },
        { x: 4, y: 5, label: 'B' },
        { x: 5, y: 4, label: 'B' }
    ];

    const [newData, setNewData] = useState({ x: 3, y: 3 });
    const [k, setK] = useState(3);
    const [classification, setClassification] = useState('');

    function handleClassification() {
        // melakukan klasifikasi dengan menggunakan fungsi classifyData
        const result = classifyData(data, k, newData);
        setClassification(result);
    }

    return (
        <div className='border p-2.5 shadow-xl rounded-xl'>
            <h3 className='mb-3 font-bold text-2xl'>KNN Prediksi</h3>
            <div className='my-3'>
                <label className='mb-3' htmlFor='data_baru'>
                    Data baru (x,y):
                </label>
                <br />
                <input className='border rounded-lg w-full p-2 hover:ring-2 hover:ring-indigo-500' id='data_baru' name='' type="text" value={`${newData.x},${newData.y}`} onChange={e => {
                    const [x, y] = e.target.value.split(',');
                    setNewData({ x: Number(x), y: Number(y) });
                }} />
            </div>
            <div className='mb-3'>
                <label className='mb-3' htmlFor='data_k'>
                    K:
                </label>
                <br />
                <input className='border rounded-lg w-full p-2 hover:ring-2 hover:ring-indigo-500' id='data_k' name='' type="number" value={k} onChange={e => setK(Number(e.target.value))} />
            </div>
            <div className='mb-3'>
                <button className='border rounded-lg p-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:ring-2 text-white font-bold' onClick={handleClassification}>Prediksi</button>
            </div>
            <div>
                {classification &&
                    <div className='bg-green-100 font-semibold border-4 rounded-xl p-2'>
                        <p>Hasil klasifikasi: {classification}</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default KNNClassifier;
