import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/admin' ><img className='logo' src={assets.logo} alt="logo" /></Link>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
