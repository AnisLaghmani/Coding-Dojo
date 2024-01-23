import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const LogReg = () => {
  return (
    <div className="container">
        <div className="text-center">
            <h1 className='text-secondary display-2 fst-italic'>Share Your Notes</h1>
            <div className="row">
                <div className="col">
                <Register/>

                </div>
                <div className="col">
                <Login/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogReg