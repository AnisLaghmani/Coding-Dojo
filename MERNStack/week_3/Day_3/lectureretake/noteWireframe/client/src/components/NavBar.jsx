import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='border-bottom border-3 border-dark'>
        <div className="text-center">
            <h1 className='display-2 fst-italic'>Notes 🗒️</h1>
        </div>
        <div className='d-flex justify-content-around'>
            <Link className='h3' to={'/notes'}>Home</Link>
            <Link className='h3'to={'/notes/new'}>Create</Link>
        </div>
    </div>
  )
}

export default NavBar