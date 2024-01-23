import React from 'react'

const Login = (props) => {
  return (
    <div className="card shadow p-2">
        <div className="card-head text-center">
            <h2>Register</h2>
        </div>
        <div className="card-body">
            <form>
                <div className="row align-items-center mb-3">
                    <label htmlFor="" className="col-2">Email</label>
                    <input type="text" className='form-control col' />
                </div>
                <div className="row align-items-center mb-3">
                    <label htmlFor="" className="col-2">Password</label>
                    <input type="text" className='form-control col' />
                </div>
                <button className='btn btn-primary w-50'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Login