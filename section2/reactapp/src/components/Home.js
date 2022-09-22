//1. component are simple javascript functions
//2. function name should alwaya start with uppercase letter
//3. function should always return a single jsx element
//4.function should be exported
import React from 'react'
import './Home.css';
import logo from '../logo.svg';
import '../App.css';
const Home = () => {
  return (
    <>
    <div>
        <h1 className="head1" style={{color:'aqua',backgroundColor:'black'}}>My home component</h1>
        <hr />
        <button className='btn btn-danger'>Bootstrap</button>
        <img src={logo} alt="" className='App-logo'/>
    </div>
    <div>

    </div>
    </>
  )
}
export default Home;  