import React from 'react'
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const AdminDashboard = () => {

  const [modal, setModal] = useState(null);

  const handleCreateOrder = () => {
    setModal(true);
  };

  return (
    <>
    <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="https://images.unsplash.com/photo-1564216550945-b9aca66d0a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <h1 className="display-2 text-light mb-5 animated slideInDown">Welcome To AdminDashboard</h1>
                                    {/* <a href="" className="btn btn-primary py-sm-3 px-sm-5">Create Restaurant</a>
                                    <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">View Order List</a> */}
                                    <Link to={`/createRestaurant`}><button className="btn btn-primary py-sm-3 px-sm-5" onClick={handleCreateOrder}>Create Restaurant</button></Link>
                                    <button className="btn btn-light py-sm-3 px-sm-5 ms-3">View Order List</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default AdminDashboard