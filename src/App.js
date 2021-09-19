import React, { Component } from 'react';

import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";

import FormAndCountdown from "./component/FormAndCountDownComponent/FormAndCountdown.tsx"


class App extends Component {
  
  render(){ 
    return (
    <div className="App">
      <Header/>
      <FormAndCountdown />
      <Footer />
    </div>
  );
}
}

export default App;
