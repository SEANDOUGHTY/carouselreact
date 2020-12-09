import React from 'react';

const date = new Date();
const year = date.getFullYear();

const Footer = (data: any) => (
  <footer>
    <nav className="navbar fixed-bottom bg-secondary text-light mb-0 rounded-0">
      <a href="/#" className="float-right text-light">بازگشت به بالای صفحه</a>
      <p>&copy; {year} &middot; {data.info.company}</p>
    </nav>
  </footer>
);

export default Footer;

