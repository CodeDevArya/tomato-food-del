import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ cateogary }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className='mt-[30px]' id='food-diaplay'>
            <h2 className='text-foodDisplay font-bold'>Top dishes near you</h2>
            <div className="grid mt-[30px] gap-6 gap-y-[50px] food-diplay-list">
                {food_list.map((item, index) => {
                    if(cateogary==='All' || cateogary === item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
