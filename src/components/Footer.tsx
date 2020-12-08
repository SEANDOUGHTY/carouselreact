import React from 'react';

const date = new Date();
const year = date.getFullYear();

const Footer = (data: any) => (
  <footer className="container">
    <p className="float-right"><a href="/#">بازگشت به بالای صفحه</a></p>
    <p>&copy; {year} {data.info.company} &middot;</p>
  </footer>
);

export default Footer;

