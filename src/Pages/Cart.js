import React, { useState,useEffect } from 'react'
import {useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'
import CartItem from "../Components/CartItem"

const Cart = () => {

const {cart} = useSelector((state)=>state);
const[totalAmount,setTotalAmount] = useState(0);

useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price, 0))
},[cart])

  return (
    <div>
      {
        cart.length > 0 ?
          // Start of first parent div here
          (<div className='block my-8 md:flex flex-row justify-center items-center md:max-w-[11/12] bg-white gap-16'>

            {/* Left side */}
            <div className='flex flex-col gap-4 items-center justify-between'>
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            {/* Right side */}
            <div className='flex flex-col ml-9 mt-9 sm:ml-0 '>
              {/* first div */}
              <div className='flex flex-col gap-2 align-top'>
                <p className='text-green-500 font-semibold text-md text-start'>Your Cart</p>
                <p className='text-3xl text-green-900 font-bold mb-3'>Summary</p>
                <p className='text-grey-400 text-left font-normal'>
                  <span className='text-md mt-3'>Total Items: {cart.length}</span>
                </p>
              </div>
              {/* second div */}
              <div className='flex flex-col align-bottom'>
                <p  className='text-grey-400 text-left font-normal'>Total Amount:<span className='font-extrabold text-sm text-left text-black'>${totalAmount}</span></p>
                <button className='bg-green-900 text-white text-center text-base p-4 mt-4 w-26'> CheckOut Now</button>
              </div>
            </div>
          </div>)
          // End of first parent div here
          :
          // start of second parent div here
          (<div className='block w-1/3 mx-auto mt-12 md:flex md:flex-col justify-between items-center md:width-[1200px] bg-white'>
            <h1 className='font-semibold text-sm text-grey-600 my-2'>Cart Empty</h1>
            <NavLink to="/">
              <button className='p-2 rounded-sm bg-green-800 text-white font-bold text-center'> Shop Now</button>
            </NavLink>
          </div>)
      }
    </div>
  )
}

export default Cart
