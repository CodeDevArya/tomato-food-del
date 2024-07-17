import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({ setCateogary, cateogary }) => {
  return (
    <div className="explore-menu-container" id="explore-menu">
      <h1 className="explore-menu-title">Explore our menu</h1>
      <p className="explore-menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque error beatae harum nesciunt repellat nostrum eaque quaerat omnis unde.</p>
      <div className="menu-list">
        {
          menu_list.map((item, index) => {
            return (
              <div className='animate-fadeIn2' onClick={() => setCateogary(prev => prev === item.menu_name ? 'All' : item.menu_name)} key={index}>
                <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-100 ${cateogary === item.menu_name ? 'border-[4px] border-[tomato] p-0.5' : 'null'}`} src={item.menu_image} alt="image" />
                <p className='mt-[10px] text-[#747474] text-p-ExploreMenu cursor-pointer'>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr className="menu-divider" />
    </div>

  )
}

export default ExploreMenu
