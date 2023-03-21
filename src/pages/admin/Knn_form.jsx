import React, { useState } from 'react';

function KnnForm() {
    const [k, setK] = useState(3);
    const [dataset, setDataset] = useState('');
    const [input, setInput] = useState('');

    // fungsi untuk menghitung label kelas dengan metode k-NN
    function calculateKnn() {
        // const data = dataset
        //     .split('\n')
        //     .map((line) => line.trim().split(','))
        //     .filter((line) => line.length === 3);
        // const inputValues = input.trim().split(',').map((value) => parseFloat(value));
        // if (data.length === 0 || inputValues.length !== 2) {
        //     return; // keluar dari fungsi jika dataset atau input tidak valid
        // }
        // const distances = data.map((row) => {
        //     const dx = row[0] - inputValues[0];
        //     const dy = row[1] - inputValues[1];
        //     return Math.sqrt(dx * dx + dy * dy);
        // });
        // const sortedIndices = distances
        //     .map((distance, index) => ({ distance, index }))
        //     .sort((a, b) => a.distance - b.distance)
        //     .map((obj) => obj.index);
        // const kNearestClasses = sortedIndices.slice(0, k).map((index) => data[index][2]);
        // const classCounts = kNearestClasses.reduce((acc, cur) => {
        //     acc[cur] = (acc[cur] || 0) + 1;
        //     return acc;
        // }, {});
        // const predictedClass = Object.entries(classCounts).reduce(
        //     (max, [key, value]) => (value > max[1] ? [key, value] : max),
        //     ['', 0]
        // )[0];
        // console.log('Predicted class:', predictedClass);
    }

    return (
        <div>
            <h2>Form Input dengan Metode k-NN</h2>
            <label htmlFor="k">K:</label>
            <input
                type="number"
                id="k"
                value={k}
                onChange={(e) => setK(e.target.value)}
            />
            <br />
            <label htmlFor="dataset">Dataset:</label>
            <textarea
                id="dataset"
                value={dataset}
                onChange={(e) => setDataset(e.target.value)}
            ></textarea>
            <br />
            <label htmlFor="input">Input:</label>
            <input
                type="text"
                id="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button onClick={calculateKnn}>Hitung</button>
            <br />
            {/* <p>Prediksi kelas: {predictedClass}</p> */}
        </div>
    );
}

export default KnnForm;