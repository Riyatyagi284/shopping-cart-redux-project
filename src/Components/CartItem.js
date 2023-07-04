
import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import {toast} from "react-hot-toast"
import {remove} from "../redux/Slices/CartSlice"
// curly braaces important here in above remove
import { useDispatch } from 'react-redux'

const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id))
        toast.success("item removed")
    }

    return (
        <div className='block mb-28 ml-6 border-0 md:flex flex-row justify-between items-center pb-4 md:mb-6 md:border-b-4 w-[400px] h-[180px] gap-4 ' >
            <img src={item.image} alt="product-item-image" className='w-[30%] h-auto ' />
            <div className='block md:flex md:flex-wrap gap-3'>
                <h1 className='font-bold text-md '>{item.title}</h1>
                {item.description && (
                <h2 className='text-[0.8rem] sm:text-sm text-slate-500 spacing-2 '>{item.description.split(' ').slice(0, 10).join(' ') + "..."}</h2>
                )}
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <FcDeleteDatabase />
                </div>
            </div>
        </div>
    )
}

export default CartItem


