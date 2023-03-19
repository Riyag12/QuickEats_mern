import React from 'react'

export default function Signup() {
  return (
    <>
      <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name </label>
    <input type="text" className="form-control" id="name" name="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>




    </>
  )
}
