import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

function Data_fosil(props) {
    //** GET DATA FOSIL TO SERVER*/
    const [dataFosil, setdataFosil] = useState([]);
    useEffect(() => {
        async function getFosil() {
            try {
                const response = await axios.get('http://192.168.0.100:3300/fosil');
                const data = response.data;
                setdataFosil(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFosil()
    }, []);

    //** VIEW DATA FOSIL TO TABLE */
    const [columns, setColums] = useState([]);
    const [pending, setPending] = React.useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setColums([
                {
                    name: 'No',
                    selector: row => row.id,
                },
                {
                    name: 'No Registrasi',
                    selector: row => row.no_reg,
                },
                {
                    name: 'Kode BMN',
                    selector: row => row.kode_bmn,
                },
                {
                    name: 'No Inventaris',
                    selector: row => row.no_invent,
                },
                {
                    name: 'Kode BMN',
                    selector: row => row.kode_bmn,
                },
                {
                    name: 'Kode BMN',
                    selector: row => row.kode_bmn,
                },
                {
                    name: 'Kode BMN',
                    selector: row => row.kode_bmn,
                },
            ])
            setPending(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [])

    const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

    // A super simple expandable component.
    const ExpandedComponent = ({ data }) =>
        <pre>
            {
                JSON.stringify(
                    data,
                    null,
                    2
                )}
            <hr className='mt-3 mb-3' />
            <div className='flex gap-2 p-3'>
                <button type='button' className='bg-red-500 hover:bg-red-600 p-2 rounded-lg text-white font-semibold'>Delete</button>
                <button type='button' className='bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg text-white font-semibold'>Edit</button>
            </div>
        </pre>;
    return (
        <>
            <DataTable
                fixedHeader
                fixedHeaderScrollHeight="500px"
                columns={columns}
                data={dataFosil}
                pagination
                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={selectProps}
                defaultSortFieldId={1}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                progressPending={pending}
                {...props}
            />
        </>
    )
}

export default Data_fosil