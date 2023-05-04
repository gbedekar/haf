import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes,
  Link
} from "react-router-dom";
import Home from './Home';
import Stuff from './Stuff'
import Contact from './Contact'
import Investor from './Investors'
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/stuff"}>Stuff</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/investors"}>Investors</Link></li>
          </ul>
          <div className="content">
            <Routes>
          <Route exact path="/" element={<Home/>}/>
            <Route path="/stuff" element={<Stuff/>} exact/>
            <Route path="/contact" element={<Contact/>} exact/>
            <Route path="/investors" element={<Investor/>} exact/>
            </Routes>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;