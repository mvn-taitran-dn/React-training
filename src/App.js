import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React !!!</h1>
      </header>
      <Footer />
    </div>
  );
}

export default App;
