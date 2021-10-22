import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      

      <Header/>

      <Router>
      <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />  
          <Route exact path="/Contact" component={Contact} />  
          <Route component={NotFound} />
      </Router>

      <Footer/>
      

      
    </div>
  );
}

export default App;