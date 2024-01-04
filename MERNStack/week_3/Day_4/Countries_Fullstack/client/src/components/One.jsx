import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
const One = () => {
    const{id}=useParams()
    const [country,setCountry]=useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/countries/'+id)
        .then(res=>{setCountry(res.data)})
        .catch(error=>console.log(error))
    },[]);
    return (
        <div className='row m-5'>
            <div className="card mx-auto" style={{ width: "30rem" }}>
                    <img className="card-img-top" src={country.flag} alt="Card image cap" />
                    <div className="card-body text-center p-5">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text">Independant: {country.independent ? 'YES' : 'No'}</p>
                    <button className='btn btn-info btn-lg' onClick={() => navigate('/')}>Home</button>
                </div>
            </div>
        </div>
    );
}
export default One