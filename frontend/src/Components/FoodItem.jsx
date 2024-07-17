import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

    return (
        <div className='w-[100%] m-auto rounded-xl shadow-fooditemboxshadow transition-all duration-100 animate-fadeIn2'>
            <div className='relative'>
                <img className='rounded-tl-xl rounded-tr-xl w-[100%]' src={url+ '/images/' + image} alt="image" />
                {
                    cartItems[id] === undefined ? (
                        // !cartItems[id] ? (
                        <img
                            onClick={() => addToCart(id)}
                            className='cursor-pointer absolute w-[35px] bottom-[15px] right-[15px] rounded-full'
                            src={assets.add_icon_white}
                            alt="add to cart"
                        />
                    ) : (
                        <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-full bg-white'>
                            <img
                                className='cursor-pointer w-[30px]'
                                onClick={() => removeFromCart(id)}
                                src={assets.remove_icon_red}
                                alt="remove from cart"
                            />
                            <p className='cursor-default'>{cartItems[id]}</p>
                            <img
                                className='cursor-pointer w-[30px]'
                                onClick={() => addToCart(id)}
                                src={assets.add_icon_green}
                                alt="add to cart"
                            />
                        </div>
                    )
                }

            </div>
            <div className='p-[20px]'>
                <div className='flex justify-between items-center mb-2'>
                    <p className='text-[20px] font-semibold'>{name}</p>
                    <img className='w-[70px]' src={assets.rating_starts} alt="" />
                </div>
                <p className='text-[#676767] text-[13px]'>{description}</p>
                <p className='text-[tomato] text-[22px] font-semibold my-[10px]'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
