import { useState } from "react"
export default function Filters(props){
     const [getAge,setAge]=useState('')


    const handlerAge= (events)=>{
        setAge(events.target.value)
        props.onAge(events.target.value)
       }
   // console.log("age",getAge)
    return(
        <div style={{ width: '50%', margin: '20px auto', background: '#f1f1f1', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.2)' }}>
            <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginTop: '10px', marginBottom: '4px' }}>Filter by Age:</label>
                <select name="" id=""  onChange={handlerAge} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', marginBottom: '12px' }}>
                    <option value="">All Ages</option>
                    <option value="10">10</option>
                    <option value="18">18</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            </div>
            
        </div>

    )
}