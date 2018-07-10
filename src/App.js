import React, { Component } from 'react';
import Footer from "./components/footer";
import Topheader from "./components/topheader";
import Lowerheader from "./components/lowerheader";
import Form from "./components/previewfont.js"
// import logo from './images/main_logo.png';
import './components/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
     <Topheader />
     <Lowerheader />
     <Form />
     <Footer />
      </div>
    );
  }
}

export default App;
