import React from "react";
import Home from "./component/pages/Home";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/navbar/Footer";
import Sidebar from "./component/sidebar/Sidebar"; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Service1 from "./component/pages/Service1";
 

 
const App = () => {
    return (
        <div className="App">
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
       <Route path="/service-one" element={<Service1/>} />
        <Route path="/contact" element={<Contact/>} />
  
         <Sidebar/> 
        
        </Routes>
        <Footer/>
        </Router>

        </div>
    )
    
}

export default App;
