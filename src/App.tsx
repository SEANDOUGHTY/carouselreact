import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './Body'
import Footer from './components/Footer';

const App = (data: any) => (
  <div className="App">
    <Header {...data} />
    <Body {...data} />
    <Footer {...data} />
  </div>
);

export default App;