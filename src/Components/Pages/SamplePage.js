import React, { useEffect, useMemo, useState } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios'
import './Sample.css'

const SamplePage = () => {

    const [sampleData, setSampleData] = useState()

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(result => {
            setSampleData(result.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const ListData = useMemo(() => {
        return sampleData ? sampleData.map((val, i) => {
            return <tr key={val.id}>
                <td>{val.title}</td>
                <td>{JSON.stringify(val.completed)}</td>
            </tr>
        }) : null
    }, [sampleData])

    return (
        <div className='sam_container'>
            <div className='tbl_data'>
                <h2>Sample Data From API</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListData}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SamplePage