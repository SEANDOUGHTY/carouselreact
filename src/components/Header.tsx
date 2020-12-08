import React from 'react';
import image from '../assets/logo/logo-center.png';

const Header = (data: any) => (
  <header>
    <nav className="navbar navbar-default navbar-fixed-top" style={{ height: "162px" }} data-toggle="affix">
      <div className="container-fluid h-100">
        <div className="mx-auto">
          <a className="navbar-brand p-0 mx-auto" href="/#"><img src={image} alt="logo" style={{ height: "200%", marginBottom: "5px"}} /></a>
        </div>
        <div className="navbar-header">
          <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav mx-auto">
            <li>
              <a className="btn btn-default py-1 mx-1" href="/#">خانه<span className="sr-only">(current)</span></a>
            </li>
            <li>
              <a className="btn btn-default py-1 mx-1" href="/contact">{data.info.contactTitle}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
