import React from 'react';
import { useState,useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./Navbar"
function Home (){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }


    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }

   
      
        const handleFilterChange = (e) =>{ 
          const filterValue = e.target.value.toLowerCase();
          const filtered = users.filter((item) =>
            item.name.toLowerCase().includes(filterValue)
          );
          setUsers(filtered);}
      
      

    return (
      
        <div className="">
        <Navbar />    
            <div class="container text-center">
  <div class="row">
    <div class="col-sm-5">
    <span className="fs-3">La Listes des utlisateur</span>
    </div>
    <div class="col-sm-5 ">
    <input type="text"  className="form-control" onChange={handleFilterChange} placeholder="cherchez par Name" />
  </div>
    <div class="col-sm-2">
    <Link className="btn btn-info" to={{ pathname: "/create" }}>Create User</Link>&nbsp;
    </div>
  </div>
</div>
<div className="container" style={{height:"400px",  overflow:"auto"}}>
            <table className="table" style={{height:"30px",  overflow:"auto"}}>
                <thead>
                    <tr className="sticky-top">
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteUser(user.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
         <footer><Footer /></footer>
        </div>
    )}

export default Home;
