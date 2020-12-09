import React from 'react';
import image from '../assets/logo/logo-center.png';

const Header = (data: any) => (
  <header>
    <div className="nav-logo">
    <a href="/#"><img src={image} alt="logo"/></a>
    </div>
  <nav className="navbar navbar-expand-md navbar-light bg-light">
  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 
  <div className="collapse navbar-collapse text-right" id="navbarTogglerDemo01">
    <ul className="navbar-nav navbar-right">
      <li className="nav-item active">
      <a className="btn navbar-btn btn-default py-1 mx-1" href="/#">خانه<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      <a className="btn navbar-btn btn-default py-1 mx-1" href="/contact">{data.info.contactTitle}</a>
      </li>
    </ul>
  </div>  
</nav>
</header>
);

export default Header;