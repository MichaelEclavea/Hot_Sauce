import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div id="nav">
      <Link to="/add" id="nav-link">
        Add Product
      </Link>
    </div>
  )
}

export default Nav
