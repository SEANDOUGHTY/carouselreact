import React from 'react';
import image from '../assets/logo/logo-icon.png';

const Header = (data: any) => (
  <header>
    <nav className="navbar navbar-expand-md py-0 px-5 my-0">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto float-left">
          <li className="nav-item">
            <a className="btn btn-info mx-2 py-1" href="/#purchase">خرید</a>
          </li>
          <li className="nav-item active">
            <a className="btn btn-info mx-2 py-1" href="/#">خانه<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
      <b><a className="navbar-brand text-uppercase" href="/">{data.info.company}</a></b>
      <img src={image} width="45px" alt="logo" className="img-rounded border"/>
    </nav>
  </header>
);

export default Header;