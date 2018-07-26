import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './common/template/includes/dependencies'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './common/template/header'
import SideBar from './common/template/sidebar'
import Footer from './common/template/footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />
        <SideBar />
        <Routes />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
