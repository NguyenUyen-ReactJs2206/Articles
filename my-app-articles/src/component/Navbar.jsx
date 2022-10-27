import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar({setShowPage,handleShow, handleHide}) {
 
  return (
    <div>
      <div>
        <div className="container-fluid px-4 text-center bg-light header">
          <div className="row gx-5">
            <div className="col-sm-2">
              <div className="p-3 header-name-brand">
                <h4>conduit</h4>
              </div>
            </div>
            <div className="col-sm-10">
              <ul class=" navbar">
                <li class="nav-item">
                <Link to={"/home/listarticle"} className='nav-link' onClick={() => handleShow()}>Home</Link>
                </li>
                <li class="nav-item">
                <Link to={"/sign-in"} className='nav-link' onClick={() => handleShow()}>Sign in</Link>
                </li>
                <li class="nav-item">
                  <Link to={"/sign-up"} className='nav-link' onClick={() => handleShow()}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid banner">
          <div className="row">
            <div className="banner-name">
              <h3>conduit</h3>
            </div>
            <div className="banner-slogan">
              <p>A place to share your knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
