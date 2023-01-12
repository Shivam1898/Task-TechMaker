import React from 'react';

const Adminheader = () =>{
   return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
        <div className="container-fluid">
            <a className="navbar-brand" >
                <i className='fa fa-shopping-bag fa-lg text-warning'></i> Keep Buying
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item px-4">
                        <a className="nav-link active" href="javascript:void(0)">
                        <i className='fa fa-home'></i>Dashboard
                        </a>
                    </li>
                    <li className="nav-item px-4">
                        <a className="nav-link active" href="javascript:void(0)">
                        <i className='fa fa-suitcase'></i>Manage Product
                        </a>
                    </li>
                    <li className="nav-item px-4">
                        <a className="nav-link active" href="javascript:void(0)">
                        <i className='fa fa-phone'></i>Manage Orders
                        </a>
                    </li>
                    <li className="nav-item px-4">
                        <a className="nav-link active" href="javascript:void(0)">
                        <i className='fa fa-phone'></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   ) 
}

export default Adminheader;