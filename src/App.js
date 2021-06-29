import React, { Component } from 'react';

import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home"
import SignUpForm from "./component/form/SignUpForm.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: false,
      page: 'form'
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
          <div class="menu-wrap">
            <button className="menu-tab" onClick={() => this.handleChangePage('form')}>Page Form</button>
            <button className="menu-tab" onClick={() => this.handleChangePage('home')}>Page Home</button>
          </div>
          {(page === 'form') && <div className="circles"><SignUpForm /></div>}
          {(page === 'home') && <div className="circles"><Home /></div>}
      </main>
      <Footer />
    </div>
  );
}
}

export default App;
