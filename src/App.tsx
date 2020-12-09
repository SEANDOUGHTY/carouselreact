import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Body from './Body'
import Contact from './Contact'
import Footer from './components/Footer';


const App = (data: any) => (
  <div className="App">
    <Router>
      <Header {...data} />
      <Switch>
        <Route path="/contact">
          <Contact {...data}/>
        </Route>
        <Route path="/">
          <Body {...data} />
        </Route>
      </Switch>
      <Footer {...data} />
    </Router>
  </div>
);

document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");

export default App;