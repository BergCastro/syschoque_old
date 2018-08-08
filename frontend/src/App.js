import "./common/template/includes/dependencies";


//import './common/template/includes/admin-lte'
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './common/template/header'
import SideBar from './common/template/sidebar'
import Footer from './common/template/footer'
import Messages from './common/msg/messages'

import $ from 'jquery'


class App extends Component {
  state = {
    appOpen: false
  };
  handleClick = event => {
    event.preventDefault();
    console.log("entrou no handleClick");
    const { appOpen } = this.state;
    this.setState({
      appOpen: !appOpen
    });
  };

  componentDidMount() {
    const body = document.querySelector('body')
    const contentWrapper = document.querySelector('.content-wrapper')
    body.className = 'skin-blue sidebar-mini'
    //boby.style= 'height: auto; min-height: 100%;'
    //const $ = window.jQuery
   
    const heightScreen = $(document).height()-101+'px'
    
    contentWrapper.style.minHeight = heightScreen
    
   
      $('.sidebar-menu').tree()
    
  }
  render() {
   // const { handleClick } = this.props
    
    return (
      
      <BrowserRouter>
      
      <div className="wrapper">
        <Header />
        <SideBar />
        
        <Routes />
        <Messages />    
        <Footer />
        
      </div>
      
      </BrowserRouter>
     
    )
  }
}

export default App