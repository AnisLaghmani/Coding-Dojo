import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Home = () => {
    const [countries,setCountries]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/countries`)
        .then(res=>{
            setCountries(res.data)
        })
        .catch(error=>console.log(error))
    },[])
    const deleteObj=(id)=>{
        axios.delete(`http://localhost:8000/api/countries/${id}`)
        .then(res=>setCountries(countries.filter(c=>c._id!==id)))
        .catch(error=>console.log(error))
    }
  return (
    <div className="container">
        <h1 className='m-3'>Countries</h1>
        <Link to="/country/new" className='btn btn-lg btn-success m-3'>Add Country</Link>
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col" className='text-center'>Name</th>
                    <th scope="col" className='text-center'>Flag</th>
                    <th scope="col" className='text-center'>Independant</th>
                    <th scope="col" className='text-center'>Options</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(c=>(
                    <tr>
                        <td scope="col" className='h4 text-center'><Link to={`/country/${c._id}`}>{c.name}</Link></td>
                        <td scope="col" className='text-center'><img src={c.flag} alt="" style={{ width: '100px' }}/></td>
                        <td scope="col" className='h5 text-center'>{c.independant?'Yes':'No'}</td>
                        <td scope="col" className='d-flex justify-content-center'>
                            <button className='btn btn-lg btn-warning m-1' onClick={()=>navigate(`/country/${c._id}/edit`)}>Edit</button>
                            <button className='btn btn-lg btn-danger m-1'onClick={()=>deleteObj(c._id)}>Delete</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
            </table>
    </div>
  )
}

export default Home