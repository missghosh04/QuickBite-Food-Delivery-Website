import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'

const FoodItem = ({ id, name, description, price, image }) => {
    
    const { CartItems, setCartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className='food-item  rounded-2xl shadow-2xl p-4 m-2 bg-amber-400'>

            <div className="food-item-image-container relative">

                <img className="food-item-image rounded-2xl" src={image} alt="food-image" />
                {!CartItems[id]
                    ? <img className="add absolute  right-2 bottom-2 w-[2.5vw] h-[5.5vh] cursor-pointer rounded-[50%]" src={assets.add_icon_white} onClick={() => { addToCart(id) }} alt="" />
                    : <div className='food-item-counter p-1 bg-white flex  justify-between items-center gap-2 rounded-3xl absolute  right-2 bottom-2'>
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="remove-icon" />
                        <p>{CartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="add-icon" />

                    </div>
                }

            </div>

            <div className="food-item-info p-3">

                <div className="food-item-name-rating pb-2 text-gray-900 flex justify-between items-center">
                    <p className='food-item-name font-bold text-xl'>{name}</p>
                    <img className="food-item-rating " src={assets.rating_starts} alt="rating" />
                </div>

                <p className='food-item-description pb-2 text-sm text-start text-gray-800'>{description}</p>
                <p className='food-item-price text-amber-800 text-xl font-bold my-2'>${price}</p>

            </div>

        </div>
    )
}

export default FoodItem
