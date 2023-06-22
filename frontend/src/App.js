
import React, { pages } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Create from "./pages/Create";
import Edit from './pages/Edit';
import View from './pages/View';
import LoginForm from './pages/autho/LoginForm';


function App() {

  return (
    <Router>
   

  {/* <Dropdown /> */}

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/create' element={< Create />}></Route>
          <Route exact path='/edit/:id' element={< Edit />}></Route>
          <Route exact path='/view/:id' element={< View />}></Route>
          <Route exact path='/login' element={< LoginForm />}></Route>
        </Routes>

    </Router>
  
  );
}

export default App;
