import React from 'react';
import styles from './Header.module.css';


function HeaderComponent() {    
    return (        
        <>
        <header className="site-header">
        <div className="site-identity">
          <h1><a href="#">CodeWith Random</a></h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li><a href="home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="gallery">Gallery</a></li>
          </ul>
        </nav>
      </header>       
        </>   
    )
}
export default HeaderComponent