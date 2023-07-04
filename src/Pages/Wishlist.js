// WishlistPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/Slices/wishlistSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { add } from "../redux/Slices/CartSlice";

const WishlistPage = () => {
  // const { cart } = useSelector((state) => state);
  const { wishlist } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  const addToCart = (product) => {
    dispatch(add(product));
    toast.success("Item added to cart");
  };

  return (
    <div>
      <div className="flex gap-3 justify-center items-center mt-8">
        <AiOutlineHeart className=" font-semibold text-7xl text-slate-700" />
        <h2 className=" font-semibold text-4xl text-slate-900">
          My Wishlist
        </h2>
      </div>
      {wishlist.length === 0 ? (
        <p className="flex flex-col justify-center mx-auto items-center text-black-500 text-semibold text-2xl mt-5">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="overflow-x-hidden tab:px-[4rem] py-[7rem] px-0 container mx-auto">
          <table className="w-full">

            <thead className="border-[1px] border-l-0 border-r-0">
              <tr>
                <th className="text-xl py-4  ">Action</th>
                <th className="text-xl py-4 ">Product Image</th>
                <th className="text-xl py-4 hidden xxl:block">Product Name</th>
                <th className="text-xl py-4 hidden lg:block ">Unit Price</th>
                <th className="text-xl py-4  ">Add to Cart</th>
              </tr>
            </thead>

            <tbody>
              {wishlist.map((product) => (
                <tr className="text-center" key={product.id}>
                  <td><RiDeleteBin6Fill className="cursor-pointer text-xl sm:mx-auto mx-[20px] mr-0 text-center" onClick={() => handleRemoveFromWishlist(product.id)} /></td>
                  <td className="sm:w-[100px] w-[80px] mx-0 mr-0"><img src={product.image} className="w-[80px] block sm:mx-auto mx-0 mr-0" alt="product" /></td>
                  <td className="hidden xxl:block mx-auto"><div className="">{product.title}</div></td>
                  <td className="hidden lg:block "><div className="font-bold text-center pt-[40px]">${product.price}</div></td>
                  <td><button onClick={() => addToCart(product)} className="sm:mx-auto mx-0  flex p-3 items-center gap-x-1 tab:gap-2 rounded-sm bg-green-800 text-white font-bold text-center cursor-pointer">
                    <p className="text-sm">Add to cart</p>
                    <AiOutlineShoppingCart className="text-lg" />
                  </button></td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  )
}

export default WishlistPage;
