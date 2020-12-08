import React from 'react';
import image from '../assets/logo/logo-icon.png';

const Header = (data: any) => (
  
  <nav className="navbar navbar-expand-md navbar-light justify-content-start">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
    </button>     
    <div className="justify-content-end order-md-last ml-auto">
    <a className="navbar-brand md-end" href="/"><div>{data.info.company}</div></a>
      <a href="/"><img src={image} width="45px" alt="logo" className="img-rounded border" /></a>
      </div>      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link btn btn-lg btn-info mx-2 my-2 py-1 px-4" href="/purchase"><div>خرید</div><span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link btn btn-lg btn-info mx-2 my-2  py-1 px-4" href="/contact"><div>{data.info.contactTitle}</div></a>
      </li>
      <li className="nav-item">
      <a className="nav-link btn btn-lg btn-info mx-2 my-2  py-1 px-4 " href="/"><div>خانه</div></a>
      </li>
    </ul>
    </div>
    
    
    </nav>
);

export default Header;
