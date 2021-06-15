import React, { Component } from 'react';

import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: false,
      page: 'home'
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    this.setState(prev => ({
      color: !prev.color
    }));
  }

  handleChangePage(page) {
    console.log(page);
    this.setState({
      page
    });
  }
  render(){ 
    const { color, page }  = this.state;
    return (
    <div className="App">
      <Header/>
      <main className="page-main">
          {/* <button onClick={this.toggleColor}>Toggle Color</button> */}
          <button className="menu-tab" onClick={() => this.handleChangePage('home')}>Page Home</button>
          <button className="menu-tab" onClick={() => this.handleChangePage('about')}>Page About</button>
          {(page === 'home') && <div className="circles"><Home /></div>}
          {(page === 'about') && <div className="circles">About page</div>}
      </main>
      <Footer />
    </div>
  );
}
}

export default App;
