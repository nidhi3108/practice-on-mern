import React from 'react'
import { Formik } from 'formik';

const Login = () => {
  const loginSubmit = (formdata,{resetForm}) => {
    // setSubmitting(true);
    console.log(formdata);
    resetForm();
}

  return (
    <>
    <Formik initialValues={{email:'',password:''}} onSubmit={loginSubmit}>
        {({values,handleSubmit,handleChange,isSubmitting})=>(<form onSubmit={handleSubmit}>
    {/* Hello world */}
    <div className="awesome" style={{ border: "1px solid red" }}>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p />
      {/* Email input */}
      <div className="form-outline mb-4">
        <input type="email" id="email" value={values.email}  onChange={handleChange} className="form-control" />
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <input type="password" id="password" value={values.password}  onChange={handleChange} className="form-control" />
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
      </div>
      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="form2Example34"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="form2Example34">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>
        <div className="col">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
      {/* Register buttons */}
      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-facebook-f" />
        </button>
        <button type="button" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-google" />
        </button>
        <button type="button" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-twitter" />
        </button>
        <button type="button" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-github" />
        </button>
      </div>
    </form>)}
    </Formik>
    
    
  </>
  )
}

export default Login

