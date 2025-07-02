import React from 'react';
import Nav from './COMPONENTS/Nav';
import "./App.css"
import Home from './COMPONENTS/Home';
import About from './COMPONENTS/About';
import Service from './COMPONENTS/Service';
import Contacts from './COMPONENTS/Contacts';
import Footer from './COMPONENTS/Footer';
const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
