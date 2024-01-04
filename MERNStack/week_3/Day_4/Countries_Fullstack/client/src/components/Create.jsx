import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Create = () => {
    const [name,setName]=useState("")
    const [flag,setFlag]=useState("")
    const [independant,setIndependant]=useState(false)
    const [errors,setErrors]=useState([])
    const navigate = useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/countries',{name,flag,independant})
        .then((res)=>{console.log(res);navigate('/')})
        .catch((error)=>{
            const errorResponse=error.response.data.errors;
            const errorArr=[]
            for(let key of Object.keys(errorResponse)){errorArr.push(errorResponse[key].message)}
            setErrors(errorArr)
        })
    }
  return (
    <div className='container p-3'>
        <form className="p-5 border" onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputFlag">Flag</label>
                <input type="text" className="form-control" value={flag} onChange={(e)=>setFlag(e.target.value)}/>
            </div>
            <div className="form-check">
                <input type="checkbox"  checked={independant} onChange={(e)=>setIndependant(e.target.checked)}/>
                <label className="form-check-label" htmlFor="">independant?</label>

            </div>
            {errors.map((error,index)=>(
                <p key={index} className='text-danger'>{error}</p>
            ))}
            <div>
                <button type="submit" className="btn btn-lg btn-success m-3">Submit</button>
                <button className="btn btn-lg btn-secondary m-3" onClick={()=>navigate('/')}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Create