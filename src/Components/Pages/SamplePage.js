import React, { useEffect, useMemo, useState } from 'react'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import './Sample.css'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const SamplePage = () => {

    const [sampleData, setSampleData] = useState([])
    const [page,setPage] = useState(1)
    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(result => {
            setSampleData(result.data);
            console.log("sampleData",result.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const listData = useMemo(()=>{
       return sampleData.length>0 && sampleData.slice((sampleData.length/10*page)-20,sampleData.length/10*page).map((val,i)=>{
            return <Card key={val.id} className='sam__list'>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Subtitle>{JSON.stringify(val.completed)}+{val.id}</Card.Subtitle>
               </Card>
        })
    },[page,sampleData])

    const setPagination=(pgNo)=>{
        setPage(pgNo)
    }

    return (
        <div className='sam_container'>
            <div className='tbl_data'>
                {listData}
            </div>
            <div className='sample__padination'> 
                { page>1 &&<span onClick={()=>setPagination(page-1)}>Prev</span> }  
               {[...Array(sampleData.length/20)].map((_,i)=>{
                 return <span key={i} onClick={()=>setPagination(i+1)} className={i+1===page?'active_page':'normal_page'}>{i+1}</span>
               })} 
               {page<10 && <span onClick={()=>setPagination(page+1)}>Next</span> } 
            </div>
        </div>
    )
}

export default SamplePage