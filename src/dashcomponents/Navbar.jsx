import React from 'react';
import { Link } from 'react-router-dom';
import {BiCoinStack} from 'react-icons/bi';
import { useState } from 'react';


function Navbar() {
    const [button,setButton] = useState(true)
  const [activeLink,setActiveLink] = useState('home')
  const [click,setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-title' style={{fontWeight:"bold",fontSize:"30px"}} onClick={() => onUpdateActiveLink('home')}><BiCoinStack style={{fontSize:"50px"}}/>FinFolio+</Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <div className='navbar-items'>

                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={() => onUpdateActiveLink('home')}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/product' className='nav-links' onClick={() => onUpdateActiveLink('product')}>Product</Link>
                </li>
                <li className="nav-item">
                    <Link to='/solution' className='nav-links' onClick={() => onUpdateActiveLink('solution')}>Solution</Link>
                </li>
                <li className="nav-item">
                    <Link to='/resource' className='nav-links' onClick={() => onUpdateActiveLink('resource')}>Resource</Link>
                </li>
              </div>
            </ul>
            <div className='allbtn'>
            <button className='mybtn'>Login</button>
            <button className='mybtn'>Get Started</button>

            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar