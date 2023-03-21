import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';

function Data_fosil() {

    const [data, setData] = useState([]); 

    useEffect (() => {
        async function getUser() {
            try {
                const response = await axios.get('https://internship2-9d1b8-default-rtdb.firebaseio.com/fosil.json');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    },[]);

    // A super simple expandable component.
    // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const columns = [
        {
            name: 'NUP BMN',
            selector: row => row.attributes.nup_bmn,
        },
        {
            name: 'No Registrasi',
            selector: row => row.attributes.no_reg,
        },

        {
            name: 'Kode BMN',
            selector: row => row.attributes.kode_bmn,
        },
    ];
    return (

        <DataTable
            columns={columns}
            data={data}
            pagination
            selectableRows
            // expandableRows
            // expandableRowsComponent={ExpandedComponent}
        />

    )
}

export default Data_fosil