import React from 'react';
import styles from './header.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

function HeaderComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav ml-auto text-center ${styles['sitenavigation']}`}>
            <li className="nav-item active">
              <Link href="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link href="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item active">
              <Link href="/contact" className="nav-link">History</Link>
            </li>
            <li className="nav-item">
              <Link href="/gallery" className="nav-link">Gallery</Link>
            </li>
          </ul>
        </div>
        <div className='logo'>
            <span className={styles['title']}>Agriculture  </span>
            <img src='image.jpg' width={100} height={50} className={styles['image']}/>
        </div>
      </nav>
    </>
  )
}
export default HeaderComponent