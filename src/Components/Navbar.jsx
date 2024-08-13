import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { searchProducts } from '../Features/Productslice';
import { useDispatch } from 'react-redux';
function Navbar() {
const dispatch=useDispatch();
const [name,setname]=useState("")
  return (
    <>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ecommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
      <Link to={"/"}    className="nav-link active" aria-current="page" href="#" >Home  </Link> 
        </li>
        <li className="nav-item">
      <Link to={"/cart"} className="nav-link active" href="#">Cart </Link>  
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setname(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick={()=>dispatch(searchProducts(name))} >Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
