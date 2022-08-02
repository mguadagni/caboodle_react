import React, { useState } from 'react';
import axios from 'axios';

const ListingsForm = () => {

  const BASE_URI = `http://localhost:8080/api/listings/`

  const [inputData, setInputData] = useState ("")

  const requestListings = () => {
    console.log("Requesting Data...");

    axios.get(BASE_URI)
    .then( res => {
      console.log(res.data);
      alert("Request Made")
    })
    .catch(err => {
      alert("Error: \n" + err.message)
      console.log(err);
    })

    //console.log(inputData);
  }

    return (
      <div style={{
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 100px',
        textAlign: 'center'
      }}>
        <h3>Search</h3>
        <input 
        type='text'
        placeholder='Search Listings'
        value={inputData}
        onChange={e=>{setInputData(e.target.value)}}
        />
        <button 
        style={{marginTop: 10}}
        onClick={requestListings}
        >
          Request Data
        </button>
      </div>
    )
}
export default ListingsForm;