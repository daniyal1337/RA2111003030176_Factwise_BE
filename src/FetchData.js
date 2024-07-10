import React from 'react'
import data from './Data.json'
import './App.css';



function FetchData() {
    
  return (
    <div className='d-flex'>
        {
            data.map((data,i) => (
                
                
                <div className='border' key={i}>
                     <div className='bor' key={i}>

                        <img src={`${data.picture}`} alt="" />

                        </div>
                    <h1 className='hhh' key={i}>{data.id}</h1>
                    <div className='hh2 ' key={i}>
                    <h3> {data.first} {data.last}</h3>
                    <h4>{data.dob}</h4>
                    <h5>{data.gender}</h5>
                    <h5>{data.email}</h5>
                    <h5>{data.country}</h5>
                    
                        </div>
                   
                   
                    <p className='hh3' key={i}>{data.description}</p>
                   
                   
                    <br></br>
            


                 </div>
            

            ))
        }
     
    </div>
  )
}

export default FetchData
