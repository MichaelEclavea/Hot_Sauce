import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div id="nav">
    {/* <section className='nav-section'>
    <Link to='/' className="nav-link">
      <img alt='home' src='./images/pepper.png' id='home-img'></img>
      Home
    </Link>
    </section>
      <section className='nav-section'> */}
      <Link to="/add" className="nav-link">
        Add Product
      </Link>
      {/* </section>
      <section className='nav-section'>
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link>
      </section> */}
    </div>
  )
}

export default Nav
