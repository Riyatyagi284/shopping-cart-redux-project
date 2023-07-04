import React from 'react'
import Logo from "../logo.png"
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"

const Navbar = () => {

  const  cart  = useSelector((state) => state.cart)

  return (
    <div className='w-full h-18 bg-black shadow-md p-4 text-white opacity-80 font-bold'>
      <nav className='flex justify-around items-center mx-8 '>

        <NavLink to="/" className="">
          <img src={Logo} alt="website-logo" className="w-36 pl-4" />
        </NavLink>

        <div className='flex justify-between items-center gap-6 '>
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/wishlist">
            Wishlist
          </NavLink>

          <NavLink to="/cart">
            <AiOutlineShoppingCart className='relative z-9 text-2xl' />
            {
              (cart && cart.length > 0) &&
             (<span className='absolute top-4 right-auto text-sm text-white bg-green-500 rounded-full px-2 font-semibold animate-bounce w-5 h-5 flex items-center justify-center'>{cart.length}</span>) 
            }
          </NavLink>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
