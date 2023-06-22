import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="p-3 mb-3 border-bottom sticky-top bg-info">
    <div className="container ">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ms-0">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        <img src="https://github.com/MohAitMesskine.png" alt="moh" width="32" height="32" class="rounded-4" />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center ms-10 mb-md-0">
          <li> <Link className="av-link px-2 link-body-emphasis" to="/">Home</Link></li>
          <li> <Link  className="av-link px-2 link-body-emphasis" to="/about">About</Link></li>
          <li><Link  className="av-link px-2 link-body-emphasis" to="/contact">Contact </Link></li>
         
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search User" aria-label="Search" />
        </form>
        <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary"><Link className="av-link px-2 link-body-emphasis" to="/login">Log Out</Link></button>
      </div>
      </div>
    </div>
  </header>
 
  );
};

export default Navbar;