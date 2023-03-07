import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          
          <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertaniment" pageSize={9} country="in" category="entertainment"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology"/>}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports"/>}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health"/>}></Route>
          <Route exact path="/in" element={<News key="in" pageSize={9} country="in" category="general"/>}></Route>
          <Route exact path="/us" element={<News key="us" pageSize={9} country="us" category="general"/>}></Route>
          <Route exact path="/ae" element={<News key="ae" pageSize={9} country="ae" category="general"/>}></Route>
          <Route exact path="/cn" element={<News key="cn" pageSize={9} country="cn" category="general"/>}></Route>
          <Route exact path="/ru" element={<News key="ru" pageSize={9} country="ru" category="general"/>}></Route>
          <Route exact path="/jp" element={<News key="jp" pageSize={9} country="jp" category="general"/>}></Route>
          <Route exact path="/fr" element={<News key="fr" pageSize={9} country="fr" category="general"/>}></Route>
          <Route exact path="/au" element={<News key="au" pageSize={9} country="au" category="general"/>}></Route>
          <Route exact path="/de" element={<News key="de" pageSize={9} country="de" category="general"/>}></Route>
          <Route exact path="/hk" element={<News key="hk" pageSize={9} country="hk" category="general"/>}></Route>
          <Route exact path="/nz" element={<News key="nz" pageSize={9} country="nz" category="general"/>}></Route>
          <Route exact path="/za" element={<News key="za" pageSize={9} country="za" category="general"/>}></Route>
        </Routes>
        
        </Router>
      </div>
    )
  }
}


  