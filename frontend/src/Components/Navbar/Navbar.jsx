import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const [menu, setMenu] = useState('home')
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/')
  }

  return (
    <div className="custom-container">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active cursor-pointer' : 'cursor-pointer'}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active cursor-pointer' : 'cursor-pointer'}>menu</a>
        <a href='#footer' onClick={() => setMenu('contactUs')} className={menu === 'contactUs' ? 'active cursor-pointer' : 'cursor-pointer'}>contact us</a>
      </ul>
      <div className="menu-icons">
        <img src={assets.search_icon} alt="Search" />
        <div className="relative cursor-pointer">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'basket-notification'}></div>
        </div>
        {!token ?
          <button onClick={() => setShowLogin(true)} className="sign-up-button">Sign Up</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} />
            <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr className='border-[tomato] border' />
              <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
            </ul>
          </div>
        }

      </div>
    </div>

  )
}

export default Navbar