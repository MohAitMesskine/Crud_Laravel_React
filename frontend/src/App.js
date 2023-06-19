
import React, { pages } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (


    <Router>
      <div className="App" >
        <header className="bg-transparent">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
              <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
