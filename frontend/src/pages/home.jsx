import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../Components/FoodDisplay'

const Home = () => {

  const [cateogary, setCateogary] = useState('All')

  return (
    <div className='mx-[30px] my-9'>
      <Header />
      <ExploreMenu cateogary={cateogary} setCateogary={setCateogary} />
      <FoodDisplay cateogary={cateogary}/>
    </div>
  )
}

export default Home
