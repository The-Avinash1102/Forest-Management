import React from "react";
import { Link } from "react-router-dom";
import './style.css';



const HandleNav = () => {
    return(
      
        <nav className="navbar" id="navigation">
        <ul className="nav-elements">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/forest-page">Trees</Link></li>
          <li><Link to="/edit-forest">Add Trees</Link></li>
          <li><Link to="/animal-page">Animals</Link></li>
          <li><Link to="/edit-animal">Add Animals</Link></li>
          <li><Link to="/visitors-page">Visitors</Link></li>
          <li><Link to="/chatbot">Help Desk</Link></li>
        </ul>
        </nav>
        
    );
};

export default HandleNav;