import React, { Component } from 'react';
import Footer from "./components/footer/footer";
import Topheader from "./components/topheader/topheader";
import Lowerheader from "./components/lowerheader/lowerheader";
import Form from "./components/previewfont/previewfont.js"
// import logo from './images/main_logo.png';
import './App.css';


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
