//import './common/template/includes/dependencies'

//import './common/template/includes/admin-lte'
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';


import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './common/template/header'
import SideBar from './common/template/sidebar'
import Footer from './common/template/footer'
import Messages from './common/msg/messages'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />
        <SideBar />
        <Routes />
        <Footer />
        <Messages />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
