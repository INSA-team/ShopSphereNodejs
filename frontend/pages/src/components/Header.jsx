import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

function Header(){

  return (
    <header>
      <div className='left'>
        <img src={logo} />
        <h2>ShopSphere</h2>
      </div>
      <div className="middle">
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
      </div>
      <div className="right">
        <button>Orders</button>
        <button className='cart'>
          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>
    </header>
  )
}
export default Header